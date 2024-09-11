import { ref } from 'vue';
import { webSocket } from '../utils/webSocket';


const balance = ref({ soft: 0, hard: 0 });
const level = ref(0);
const tap = ref(0);
const power = ref(0);
const powerMax = ref(0);
const balanceToLevelUp = ref(0);
const nextCostTap = ref(0);
const speed = ref(0);
const nextCostPower = ref(null);

const preloading = ref(false);
const ws: any = ref({});

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
      power.value = data.data.power.current;
      powerMax.value = data.data.power.max;

      tap.value = data.data.tap.current;

      balanceToLevelUp.value = data.data.level.next_level_value;
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

const resetWebSocket = () => {
  ws.value.close();
  ws.value = null;
}

export default function () {
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
    if (ws.value) {
      ws.value.send(JSON.stringify({ action: 'tap' }));
    }
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
    ws,
    preloading,

    handleWebSocket,
    resetWebSocket,
    upPower,
    upTap,
    upSpeed,
    makeTap
  }
};
