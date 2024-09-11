import { ref } from 'vue';
import { defineStore } from "pinia";
import { webSocket } from '../utils/webSocket';

export const useWebSocketStore = defineStore("socket", () => {
  const balance = ref({ soft: 0, hard: 0 });
  const level = ref(0);
  const tap = ref(0);
  const power = ref(0);
  const powerMax = ref(0);
  const balanceToLevelUp = ref(0);
  const nextCostTap = ref(0);
  const speed = ref(0);
  const nextCostPower = ref(null);
  const nextLevelValue = ref(0);

  const preloading = ref(false);
  const ws: any = ref(null);

  const handleWebSocket = async () => {
    ws.value = webSocket();
    preloading.value = true;
    ws.value.addEventListener('message', async (message: { data: any }) => {
      let data;

      try {
        data = await JSON.parse(message.data);
      } catch (err) {
        console.log(err);
        return;
      }

      if (data.action === 'me') {
        balance.value = data.data.balance;
        level.value = data.data.level.current;
        nextLevelValue.value = data.data.level.next_level_value;
        power.value = data.data.power.current;
        powerMax.value = data.data.power.max;

        tap.value = data.data.tap.current;
      }

      if (data.action === 'showcase') {
        for (const key of data.data) {
          if (key.name == 'tap') {
            nextCostTap.value = key.next.cost;
          }

          if (key.name == 'speed') {
            nextCostTap.value = key.next.cost;
            speed.value = key.current;
          }

          if (key.name == 'power') {
            nextCostPower.value = key.next.cost;
          }
        }
      }
      preloading.value = false;
    });
  }

  const closeWebSocket = () => {
    ws.value.close();
    // ws.value = null;
  }

  const upPower = () => {
    ws.value.send(JSON.stringify({ action: 'buy', name: 'power' }));
  };
  const upTap = () => {
    ws.value.send(JSON.stringify({ action: 'buy', name: 'tap' }));
  };
  const upSpeed = () => {
    ws.value.send(JSON.stringify({ action: 'buy', name: 'speed' }));
  };

  const makeTap = () => {
    ws.value.send(JSON.stringify({ action: 'tap' }));
  };

  return {
    balance,
    level,
    power,
    powerMax,
    tap,
    balanceToLevelUp,
    nextCostTap,
    speed,
    nextCostPower,
    nextLevelValue,
    ws,
    preloading,

    handleWebSocket,
    closeWebSocket,
    upPower,
    upTap,
    upSpeed,
    makeTap,
  }
});
