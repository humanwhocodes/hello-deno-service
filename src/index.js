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

const PORT = Deno.env.get("PORT") || 8080;

//-----------------------------------------------------------------------------
// Server
//-----------------------------------------------------------------------------

const server = serve({ port: PORT });
console.log(`HTTP webserver running.  Access it at:  http://${ HOST }:${ PORT }/`);

for await (const request of server) {
    request.respond({ status: 200, body: "Hello world!" });
}
