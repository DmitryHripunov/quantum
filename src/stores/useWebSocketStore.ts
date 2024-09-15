import { computed, ref } from 'vue';
import { defineStore } from "pinia";
import { webSocket } from '../utils/webSocket';
import type {
  IUser,
  ILevel,
  IBalance,
  IPower,
  ITap,
  ILootBox,
  IShowCasePower,
  IShowCaseSpeed,
  IShowCaseTap,
} from '@/types/types';

export const useWebSocketStore = defineStore("socket", () => {
  const webSocketError = ref();
  const tap = ref<ITap>();
  const user = ref<IUser>();
  const level = ref<ILevel>();
  const balance = ref<IBalance>();
  const power = ref<IPower>();
  const lootBox = ref<ILootBox>();
  const showcaseTap = ref<IShowCaseTap>();
  const showcasePower = ref<IShowCasePower>();
  const showcaseSpeed = ref<IShowCaseSpeed>();

  const pendingWebSocket = ref(false);
  const ws: any = ref(null);

  const handleWebSocket = async () => {
    ws.value = webSocket();
    pendingWebSocket.value = true;
    ws.value.addEventListener('message', async (message: { data: any }) => {
      let data;

      try {
        webSocketError.value = false;
        data = await JSON.parse(message.data);
      } catch (error) {
        console.log(error);
        webSocketError.value = error;
        return;
      }

      if (data.action === 'me') {
        level.value = data.data.level;
        user.value = data.data.user;
        balance.value = data.data.balance;
        power.value = data.data.power;
        tap.value = data.data.tap.current;
      }

      if (data.action === 'showcase') {
        for (const key of data.data) {
          if (key.name == 'tap') {
            showcaseTap.value = key;
          }

          if (key.name == 'speed') {
            showcaseSpeed.value = key;
          }

          if (key.name == 'power') {
            showcasePower.value = key;
          }
        }
      }

      if (data.action === 'lootbox') {
        lootBox.value = data.data;
      }

      setTimeout(() => {

        pendingWebSocket.value = false;
      }, 600)
    });
  }

  const closeWebSocket = () => {
    ws.value.close();
    ws.value = null;
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
    try {

      ws.value.send(JSON.stringify({ action: 'tap' }));
    } catch {
      console.log('error')
    }
  };

  const prettyLevelXP = computed(() => {
    return level.value?.xp.toLocaleString('en-US');
  });

  const prettyLevelNext = computed(() => {
    return level.value?.next_level_value.toLocaleString('en-US');
  });

  const getProgressPercentage = computed(() => {
    if (!level.value) return 0;

    return (100 - (level.value?.next_level_value - level.value?.xp) / level.value?.next_level_value * 100).toFixed(4);
  });

  return {
    tap,
    user,
    level,
    power,
    balance,
    lootBox,
    showcaseTap,
    showcasePower,
    showcaseSpeed,

    pendingWebSocket,
    webSocketError,

    prettyLevelXP,
    prettyLevelNext,
    getProgressPercentage,

    handleWebSocket,
    closeWebSocket,
    upPower,
    upTap,
    upSpeed,
    makeTap,
  }
});
