## Zuplo API

This is a Zuplo API that was created with
[`create-zuplo-api`](https://zuplo.com/docs).

It reproduces a final response hook receiving the original response instead of
the replacement returned by a response-sending hook. See the
[reproduction handler](modules/response-sending-final-hook.ts).

## Getting Started

Install dependencies with `npm install`, then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the
result.

You can start editing the API by modifying `config/routes.oas.json`. The dev
server will automatically reload the API with your changes.

## Reproduce

```shell
curl.exe -i http://localhost:9000/context-test
```

The client receives `201` and `Modified response`. The `Final response hook` log
should report the same response, but reports `200` and `Original response`.

[Zuplo documents final hooks](https://zuplo.com/docs/programmable-api/hooks#hook-onresponsesendingfinal)
as running after all processing, immediately before sending the response.

## Debugging

In VS Code, open **Run and Debug**, select **Launch & Attach Zuplo**, and click
the green play button.

For other editors and more details, see the
[debugging guide](https://zuplo.com/docs/articles/local-development-debugging).

## Learn More

To learn more about Zuplo, you can visit the
[Zuplo documentation](https://zuplo.com/docs).

To connect with the community join [Discord](https://discord.zuplo.com).
