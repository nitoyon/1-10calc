<template>
  <div id="app">
    <Menu
      v-if="store.currentPage == 'app-menu'">
    </Menu>
    <Solve
      v-if="store.currentPage == 'app-solve'">
    </Solve>
    <Stat
      v-if="store.currentPage == 'app-stat'">
    </Stat>
    <QrCode
      v-if="store.currentPage == 'app-qrcode'">
    </QrCode>
  </div>
</template>

<script lang="ts">
import Menu from './components/Menu.vue';
import Solve from './components/Solve.vue';
import Stat from './components/Stat.vue';
import QrCode from './components/QrCode.vue';
import store from './store';

store.init();

export default {
  components: { Menu, Stat, Solve, QrCode },
  data: () => ({
    store,
  }),
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system;
}

div.page header {
  z-index: 4;
  position: fixed;
  width: 100%;
  height: 40px;
}

div.page header .back {
  padding: 10px;
  color: white;
  font-size: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  float: left;
}

div.page header div {
  color: white;
  height: 30px;
  text-align: center;
  padding-top: 5px;
  padding-right: 40px;
  font-size: 20px;
}

.bg-add1 { background: #C7243A; }
.bg-sub1 { background: #EDAD0B; }
.bg-add2 { background: #A4C520; }
.bg-sub2 { background: #1A95B7; }
.bg-mul1 { background: #1A5CED; }
.bg-stat { background: #666; }
.bg-qrcode { background: #000; }
</style>
