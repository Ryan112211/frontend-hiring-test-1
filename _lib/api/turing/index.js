import axios from "axios";
import chalk from "chalk";
import { Observable } from "rxjs";

/* eslint import/namespace: ['error', { allowComputed: true }] */
import generateEndpoint from "@_utils/generateEndpoint";

import * as endpoints from "./endpoint";

export async function api(payloads) {
  try {
    const call = axios.create({
      baseURL: `${process?.env?.APP_API_ENDPOINT}/`,
    });

    const { data = {}, method, path, query, token = "" } = payloads;

    const url = generateEndpoint(endpoints[path.url], path.params);
    const options = {
      headers: {
        "Content-Type": "application/json",
        ClientHostname: process.env.APP_NAME,
      },
      method,
      url,
    };
    if (query && method === "get") {
      options.params = query;
    }
    if (method !== "get") {
      options.data = JSON.stringify(data);
    }
    if (token !== "") {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    /* eslint-disable no-console */
    if (process.env.DEBUGGING === "true") {
      console.log(
        `${chalk.blue("[CLIENT API (turing) CALL]:")} ${chalk.green(
          options.method.toUpperCase()
        )} ${chalk.white(url)}`
      );
      console.log(
        `${chalk.green("[CLIENT (turing) OPTIONS]:")} ${chalk.green(
          JSON.stringify(options)
        )}`
      );
    }
    /* eslint-enable no-console */

    const response = await call(options);
    return [response, null];
  } catch (e) {
    if (e.response) {
      return [null, e.response];
    }
    if (e.request) {
      return [null, e.request];
    }
    return [null, { message: e.message }];
  }
}

export function apiObs(payloads) {
  return new Observable(async (subscriber) => {
    try {
      const obs = axios.create({
        baseURL:
          process.env.NODE_ENV === "development"
            ? `${process.env.APP_BASE_URL}:${process.env.PORT}`
            : `${process.env.APP_BASE_URL}`,
      });

      const { data = {}, method, path, query, token = "" } = payloads;

      const url = generateEndpoint(endpoints[path.url], path.params);

      const options = {
        url,
        method,
      };
      if (query && method === "get") {
        options.query = query;
      }
      if (method !== "get") {
        options.data = data;
      }

      const headers = { "Content-Type": "application/json", "Test-Url": url };
      if (token !== "") {
        headers.authorization = token;
      }

      const response = await obs.post("/turing", options, { headers });
      subscriber.next(response);
      subscriber.complete();
    } catch (error) {
      if (error.response) {
        subscriber.error(
          error?.response?.data?.error?.details ??
            JSON.stringify(error?.response)
        );
      } else {
        subscriber.error(error);
      }
    }
  });
}
