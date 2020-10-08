FROM hayd/alpine-deno:1.4.4

WORKDIR /app
USER deno

# Copy and cache local files
ADD . .
RUN deno cache src/index.js

CMD ["run", "--allow-net", "--allow-env", "src/index.js"]
