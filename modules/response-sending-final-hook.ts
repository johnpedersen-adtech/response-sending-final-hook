import type { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  context.addResponseSendingHook(() => {
    return new Response("Modified response", { status: 201 });
  });

  context.addResponseSendingFinalHook(async (response) => {
    context.log.info("Final response hook", {
      status: response.status,
      body: await response.clone().text(),
    });
  });

  return new Response("Original response", { status: 200 });
}
