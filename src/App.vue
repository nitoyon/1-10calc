<template>
  <div id="app">
    <Menu
      v-if="currentPage == 'app-menu'"
      :categories="categories"
      @show-page="showPage($event)"
      @set-category="setCategory($event)">
    </Menu>
    <Solve
      v-if="currentPage == 'app-solve'"
      :category="selectedCategory"
      :histories="histories"
      @show-page="showPage($event)">
    </Solve>
    <Stat
      v-if="currentPage == 'app-stat'"
      :histories="histories"
      @show-page="showPage($event)">
    </Stat>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Solve from './components/Solve.vue'
import Stat from './components/Stat.vue'

export default {
  components: { Menu, Stat, Solve },
  data: () => ({
    currentPage: 'app-menu',
    selectedCategory: null,
    histories: [],
    categories: [
      {
        id: 'add1',
        title: 'たしざん 1',
        example: '3 + 6',
        done: 0,
        sign: '+',
        isOK: false, isNG: false,
        q: null,
        questions: []
      },
      {
        id: 'sub1',
        title: 'ひきざん 1',
        example: '8 - 3',
        done: 0,
        sign: '-',
        isOK: false, isNG: false,
        q: null,
        questions: []
      },
      {
        id: 'add2',
        title: 'たしざん 2',
        example: '7 + 5',
        done: 0,
        sign: '+',
        isOK: false, isNG: false,
        q: null,
        questions: []
      },
      {
        id: 'sub2',
        title: 'ひきざん 2',
        example: '13 - 7',
        done: 0,
        sign: '-',
        isOK: false, isNG: false,
        q: null,
        questions: []
      }
    ]
  }),

  created: function() {
    for (var x = 1; x <= 10; x++) {
      for (var y = 1; y <= 10; y++) {
        if (x + y <= 10) {
          this.categories[0].questions.push([x, y, x + y]);
        } else {
          if (x != 10 && y != 10) {
            this.categories[2].questions.push([x, y, x + y]);
            this.categories[3].questions.push([x + y, y, x]);
          }
        }
        if (x - y >= 1) {
          this.categories[1].questions.push([x, y, x - y]);
        }
      }
    }
  },

  methods: {
    showPage: function(name) {
      this.currentPage = name;
    },

    setCategory: function(id) {
      this.selectedCategory = this.categories.find(function(c) { return c.id === id; });
      if (this.selectedCategory === undefined) {
        this.showPage('app-menu');
      } else {
        this.showPage('app-solve');
      }
    }
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
