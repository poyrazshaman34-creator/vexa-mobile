export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace("/api/", "");

  const response = await fetch("http://78.188.232.178:4001/" + path, {
    method: context.request.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: context.request.method !== "GET"
      ? await context.request.text()
      : undefined
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
