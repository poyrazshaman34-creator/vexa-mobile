export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace("/api/", "");

  const response = await fetch("http://78.188.232.178:4001/" + path, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });

  return new Response(response.body, response);
}
