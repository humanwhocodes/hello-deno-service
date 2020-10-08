FROM hayd/alpine-deno:1.4.4

WORKDIR /app
USER deno

# Cache internal dependencies
COPY deps.ts .
RUN deno cache deps.ts

# Copy and cache local files
ADD . .
RUN deno cache src/index.js

CMD ["run", "--allow-net", "--allow-env", "src/index.js"]
