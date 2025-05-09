import axios, { AxiosInstance } from "axios";

const TABLE_ID = `appqxUGA9YsOA50iX`;

const airtable: AxiosInstance = axios.create({
  baseURL: import.meta.env.PROD
    ? `https://hc-airtable-caching-proxy.netlify.app/api/v1/airtable/${TABLE_ID}`
    : `https://api.airtable.com/v0/${TABLE_ID}`,
  headers: import.meta.env.DEV
    ? {
        Authorization: `Bearer patCMqNApPrJE8SXi.143baa8db7f29e133b886a0c24776496d00671e7ac993231593b78a2cfe599a6`,
      }
    : undefined,
});

export default airtable;
