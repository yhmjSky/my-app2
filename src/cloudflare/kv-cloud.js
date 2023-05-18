const NAMESPACE_ID = 'YOUR_NAMESPACE_ID';

// 处理路由请求
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 从Cloudflare KV获取数据
  const value = await KV_NAMESPACE.get('myKey');

  if (value) {
    return new Response(value);
  } else {
    return new Response('Key not found', { status: 404 });
  }
}
