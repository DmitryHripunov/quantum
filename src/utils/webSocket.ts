export const webSocket = (): WebSocket | null => {
  let ws: any = null;

  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  ws = new WebSocket(`${import.meta.env.VITE_WS_CATS_PLAY}`);

  ws.addEventListener('error', (errorEvent: ErrorEvent) => {
    console.log(`WebSocket error: ${errorEvent}`);
    ws = null;
  });

  ws.addEventListener('open', () => {
    console.log('WebSocket connection established');

    ws.send(JSON.stringify({ action: 'login', name: 'power', user_id: 1 }));
    ws.send(JSON.stringify({ action: 'me' }));
    ws.send(JSON.stringify({ action: 'showcase' }));
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket connection closed');
    ws = null;
  });

  return ws;
};
