FROM hayd/alpine-deno

WORKDIR /app
USER deno

EXPOSE $PORT

COPY . .
RUN deno cache src/index.js

CMD ["run", "--allow-net", "--allow-env", "src/index.js"]
