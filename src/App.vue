<template>
  <div id="app">
    <Menu
      v-if="store.currentPage == 'app-menu'">
    </Menu>
    <Solve
      v-if="store.currentPage == 'app-solve'"
      :category="store.selectedCategory"
      :histories="store.histories"
      @show-page="showPage($event)">
    </Solve>
    <Stat
      v-if="store.currentPage == 'app-stat'"
      :histories="store.histories"
      @show-page="showPage($event)">
    </Stat>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Solve from './components/Solve.vue'
import Stat from './components/Stat.vue'
import store from './store.js'

store.init();

export default {
  components: { Menu, Stat, Solve },
  data: () => ({
    store,
  }),

  methods: {
    showPage: function(name) {
      this.store.currentPage = name;
    },
  }
}
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
}

div.page header .back {
  padding: 10px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  float: left;
}

div.page header div {
  color: white;
  height: 30px;
  text-align: center;
  padding-top: 5px;
  font-size: 20px;
}

.bg-add1 { background: #C7243A; }
.bg-sub1 { background: #EDAD0B; }
.bg-add2 { background: #A4C520; }
.bg-sub2 { background: #1A95B7; }
.bg-stat { background: #666; }
</style>
