require("dotenv").config();
const chalk = require("chalk");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const figlet = require("figlet");
const next = require("next");

const Api = require("./server/api");

const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  if (!dev) {
    server.use(compression());
  }
  server.use(
    cors({
      origin: `${process.env.APP_BASE_URL}:${process.env.PORT}`,
      credentials: true,
    })
  );

  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  Api.turing(server);

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, (error) => {
    if (error) throw error;

    figlet.text(
      process.env.APP_NAME,
      {
        font: "Standard",
        horizontalLayout: "full",
        verticalLayout: "full",
      },
      (err, data) => {
        if (err) {
          return;
        }

        console.log(`\n\n\n\n\n${chalk.magenta(data)}`);

        console.log(
          `> Ready on ${process.env.APP_BASE_URL}:${process.env.PORT}`
        );
      }
    );
  });
});
