FROM hayd/alpine-deno:1.4.4

WORKDIR /app
USER deno
ENV PORT=${PORT:-8080}

EXPOSE ${PORT}

COPY . .
RUN deno cache src/index.js

CMD ["run", "--allow-net", "--allow-env", "src/index.js"]
