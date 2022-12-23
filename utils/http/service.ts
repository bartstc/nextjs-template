import { HttpService } from "./HttpService";

const headers = {
  "Content-Type": "application/json",
};

const host = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_HOST;

export const httpService = new HttpService({
  host,
  headers,
});
