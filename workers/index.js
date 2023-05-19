/**
 *  KV example
 */
const MY_NAMESPACE = 'MY_KV';

async function handleRequest(request) {
  const { method } = request;

  if (method === 'GET') {
    // 从KV获取值
    const value = await MY_NAMESPACE.get('json');

    return new Response(value || 'Value not found', { status: 200 });
  }

  if (method === 'PUT') {
    // 将值存储到KV
    const data = await request.text();
    await MY_NAMESPACE.put('my-key', data);

    return new Response('Value stored', { status: 200 });
  }
}

// addEventListener('fetch', (event) => {
//   event.respondWith(handleRequest(event.request));
// });
