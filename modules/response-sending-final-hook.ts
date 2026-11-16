import type { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  context.addResponseSendingHook(modifiedResponse);

  context.addResponseSendingFinalHook(async (response) => {
    context.log.info("Context final response hook", {
      status: response.status,
      body: await response.clone().text(),
    });
  });

  return originalResponse();
}

export function originalResponse() {
  return new Response("Original response", { status: 200 });
}

export function modifiedResponse() {
  return new Response("Modified response", { status: 201 });
}
