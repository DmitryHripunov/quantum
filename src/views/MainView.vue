<template>
  <div class="level mr">Level #{{ level }}</div>
  <div class="tap-progress mr"></div>
  <div class="tap mr" @click="makeTap()">{{ tap }}</div>
  <div class="energy mr">Energy: {{ power }} / {{ powerMax }}</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const balance = ref(0);
const level = ref(0);
const power = ref(0);
const powerMax = ref(0);
const tap = ref(0);
const balanceToLevelUp = ref(0);
const nextCostTap = ref(0);
const speed = ref(0);
const nextCostPower = ref(null);
const ws: any = ref(null);

const wsQuantumCatsPlay = 'wss://ws.quantumcats.io/play';

const webSocket = () => {
  let ws: any = null;

  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  ws = new WebSocket(`${wsQuantumCatsPlay}`);

  ws.addEventListener('error', () => {
    console.log('WebSocket error');
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

const createWebSocket = () => {
  ws.value = webSocket();

  ws.value.addEventListener('message', async (message: any) => {
    let data;

    try {
      data = await JSON.parse(message.data);
    } catch (err) {
      console.log(err);
      return;
    }
    if (data.action === 'me') {
      balance.value = data.data.bal;
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
  });
};

const makeTap = () => {
  if (ws.value) {
    ws.value.send(JSON.stringify({ action: 'tap' }));
  }
};

const uppower = () => {
  ws.value.send(JSON.stringify({ action: 'buy', name: 'power' }));
};
const uptap = () => {
  ws.value.send(JSON.stringify({ action: 'buy', name: 'tap' }));
};
const upspeed = () => {
  ws.value.send(JSON.stringify({ action: 'buy', name: 'speed' }));
};

onMounted(() => {
  createWebSocket();
});

onUnmounted(() => {
  ws.value = null;
});
</script>

<style scoped>
.tap {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: aliceblue;
  margin: 24px auto;
}

.mr {
  margin: 16px 0;
}

.level {
}

.tap-progress {
  height: 8px;
  border-radius: 8px;
  background-color: var(--color-white);
}

.energy {
}
</style>

<!-- let global_user_id = readCookie('user_id');
if(!global_user_id){
    global_user_id = getRandomInt(100000000, 999999999);
    writeCookie('user_id', global_user_id, 3000);
}

function writeCookie(name, val, expires) {
  var date = new Date;
  date.setDate(date.getDate() + expires);
  document.cookie = name+"="+val+"; path=/; expires=" + date.toUTCString();
}

function readCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const app = new Vue({
    data: () => (
        {
            balance: 0,
            level: 1,
            power: 0,
            power_max: 0,
            ws: null,
            showcase: null,
            tap: 0,
            speed: 0,
            next_cost_tap: 0,
            next_cost_power: 0,
            next_cost_speed: 0,
            balance_to_level_up: 0,
        }
    ),
    mounted: function(){
        this.ws = new WebSocket('wss://ws.quantumcats.io/play');

        this.ws.onopen = () => {
            console.log('Connected to WebSocket server');
            this.ws.send(JSON.stringify({ action: 'login', name: 'power', user_id: parseInt(global_user_id) }));
            this.ws.send(JSON.stringify({ action: 'me'}));

            this.ws.send(JSON.stringify({ action: 'showcase'}));
        }

        this.ws.onmessage = (event) => {

            const message = JSON.parse(event.data);

            if (message.action === 'me') {
                this.balance = message.data.balance.soft;
                this.level = message.data.level.current;
                this.power = message.data.power.current;
                this.power_max = message.data.power.max;

                this.tap = message.data.tap.current;

                this.balance_to_level_up = message.data.level.next_level_value;
            }

            if (message.action === 'showcase') {
                this.showcase = message.data;

                for(key in this.showcase){

                    if(this.showcase[key].name == 'tap'){
                        this.next_cost_tap = this.showcase[key].next.cost;
                    }

                    if(this.showcase[key].name == 'speed'){
                        this.next_cost_speed = this.showcase[key].next.cost;
                        this.speed = this.showcase[key].current;
                    }

                    if(this.showcase[key].name == 'power'){
                        this.next_cost_power = this.showcase[key].next.cost;
                    }
                }

            }
        }

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        }
    },
    methods: {

        maketap: function() {
            this.ws.send(JSON.stringify({action: 'tap'}));
        },
        uppower: function() {
            this.ws.send(JSON.stringify({action: 'buy', name: 'power'}));
        },
        uptap: function() {
            this.ws.send(JSON.stringify({action: 'buy', name: 'tap'}));
        },
        upspeed: function() {
            this.ws.send(JSON.stringify({action: 'buy', name: 'speed'}));
        },
    },
});
 -->

