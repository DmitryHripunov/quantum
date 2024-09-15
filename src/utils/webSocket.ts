export const webSocket = (): WebSocket | null => {
  let ws: any = null;


  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  ws = new WebSocket(`${import.meta.env.VITE_WS_CATS_PLAY}`);

  ws.addEventListener('error', () => {
    console.error(`WebSocket Error`);
    ws = null;
  });

  ws.addEventListener('open', () => {
    console.log('WebSocket connection established');

    ws.send(JSON.stringify({ action: 'login', name: 'power1', user_id: 2 }));
    ws.send(JSON.stringify({ action: 'me' }));
    ws.send(JSON.stringify({ action: 'showcase' }));
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket connection closed');
    ws = null;
  });

  return ws;
};
