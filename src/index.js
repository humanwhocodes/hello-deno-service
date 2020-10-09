/**
 * @fileoverview Deno Microservice example
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { serve } from "https://deno.land/std@0.74.0/http/server.ts";

//-----------------------------------------------------------------------------
// Setup
//-----------------------------------------------------------------------------

// port must be a number
// https://github.com/denoland/deno/issues/7891
const PORT = Number(Deno.env.get("PORT") ?? "8080");
const HOST = "0.0.0.0";

//-----------------------------------------------------------------------------
// Server
//-----------------------------------------------------------------------------

const server = serve({ hostname: HOST, port: PORT });
console.log(`HTTP webserver running.  Access it at:  http://${ HOST }:${ PORT }/`);

for await (const request of server) {
    request.respond({ status: 200, body: "Hello world!" });
}
