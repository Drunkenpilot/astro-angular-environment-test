import type { APIContext, APIRoute } from "astro";
import { secrets } from "../secret/server";

export const get: APIRoute = async ({ params, url }: APIContext) => {
  // const env = import.meta.env;

  // console.log(env.PUBLIC_SECRET);
  // console.log(env.SECRET);
  // console.log(env.SECRET_SECRET);

  return {
    body: JSON.stringify(secrets),
  };
};
