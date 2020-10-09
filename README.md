# Hello Deno Service

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A simple [Deno](https://deno.land/) server intended to serve as an example of deploying a Node.js application to [Google Cloud Run](https://cloud.google.com/run/).

## Usage

After cloning the repository, start the server:

```
$ deno run --allow-net --allow-env src/index.js
```

Locally, this will run the server on http://localhost:8080.

## Notes

1. The server reads from the `PORT` environment variable to determine which port to listen on. This is important because Google Cloud Run defines this variable and it's the only port that will be open.
1. Google Cloud Run also requires that the server listen on 0.0.0.0 because 127.0.0.1 is a loopback address with no external access.
1. Deno requires that the port value is a number and will [throw an error](https://github.com/denoland/deno/issues/7891) otherwise.

## License

Apache 2.0
