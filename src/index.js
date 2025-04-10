/// <reference types="@fastly/js-compute" />

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  const response_body = ".env reading test using dotenv-webpack\n" +
      "VALUE_1=" + process.env.VALUE_1 + "\n" +
      "VALUE_2=" + process.env.VALUE_2;
  return new Response(response_body, { status: 200 });
}
