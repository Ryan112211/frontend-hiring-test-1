const axios = require("axios");
const chalk = require("chalk");

const cookie = require("../../utils/cookie");

async function turing(app) {
  return app.post("/turing", async (req, res) => {
    const token = cookie.extract(req, "token=");
    const { data = {}, method, query, url } = req.body;

    try {
      const options = {
        baseURL: process?.env?.APP_API_ENDPOINT,
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          ClientHostname: process.env.APP_NAME,
        },
      };

      if (query && method === "get") {
        options.params = query;
      }
      if (method !== "get") {
        options.data = JSON.stringify(data);
      }
      if (token !== "") {
        // Temporary Hard Coded Token For banner/page Api
        options.headers.Authorization = `Bearer ${token}`;
      }

      /* eslint-disable no-console */
      console.log(
        `${chalk.blue("[SERVER turing API CALL]:")} ${chalk.green(
          req.body.method.toUpperCase()
        )} ${chalk.white(`${options.baseURL}${options.url}`)}`
      );
      console.log(
        `${chalk.green("[SERVER turing OPTIONS]:")} ${chalk.green(
          JSON.stringify(options)
        )}`
      );
      /* eslint-enable no-console */

      const response = await axios(options);

      return res.send(response.data);
    } catch (e) {
      if (e.response) {
        const { response } = e;
        return res.status(response.status).send(response.data);
      }
      if (e.request) {
        return res.status(500).send(e.request);
      }
      return res.status(500).send(e.message);
    }
  });
}

module.exports = turing;
