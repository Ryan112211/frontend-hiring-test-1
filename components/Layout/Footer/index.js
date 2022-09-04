import React from "react";

import { makeStyles } from "@material-ui/core";

import { ContainerItem } from "@components";

const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    padding: "15px",
  },
  button: { padding: "10px 12px", width: "20px", color: "#fff" },
  center: { textAlign: "center" },
  copy: { padding: "0 0 10px", margin: 0 },
  item: { padding: 0 },
  link: {
    color: "#333",
    fontWeight: "600",
    margin: "0 10px",
    textTransform: "uppercase",
    "@media screen and (max-width: 767px)": {
      display: "block",
    },
  },
  static: { textAlign: "center", padding: "10px 0" },
}));

function Component() {
  const style = useStyle();
  return (
    <div className={style.root}>
      <ContainerItem md={12} sm={12} xs={12} className={style.item}>
        <div className={style.center}>
          <p className={style.copy}>
            Copyright &copy;
            {new Date().getFullYear()}
            &nbsp;Turing. All rights reserved
          </p>
        </div>
      </ContainerItem>
    </div>
  );
}

export const Footer = Component;

export default Footer;
