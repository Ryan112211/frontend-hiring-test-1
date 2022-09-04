import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";

import theme from "../_lib/theme";

import stylesd from "../public/styles-draft";
import styles from "../public/styles";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          {styles.map((href) => (
            <link key={href} href={href} rel="stylesheet" type="text/css" />
          ))}
          {stylesd.map((href) => (
            <link key={href} href={href} rel="stylesheet" type="text/css" />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const styledSheets = new StyledComponentSheets();
  const muiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => muiSheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    styles: (
      <React.Fragment key="styles">
        {initialProps.styles}
        {muiSheets.getStyleElement()}
        {styledSheets.getStyleElement()}
      </React.Fragment>
    ),
  };
};
