import Menu from './components/Menu.vue'
import Solve from './components/Solve.vue'
import Stat from './components/Stat.vue'

new Vue({
  el: '#app',
  components: { Menu, Stat, Solve },
  template: `
    <div id="app">
      <Menu
        v-if="currentPage == 'app-menu'"
        v-bind:categories="categories"
        v-on:show-page="showPage($event)"
        v-on:set-category="setCategory($event)">
      </Menu>
      <Solve
        v-if="currentPage == 'app-solve'"
        v-bind:category="selectedCategory"
        v-bind:histories="histories"
        v-on:show-page="showPage($event)">
      </Solve>
      <Stat
        v-if="currentPage == 'app-stat'"
        v-bind:histories="histories"
        v-on:show-page="showPage($event)"/>
      </Stat>
    </div>`,
  data: {
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
        title: 'ひきざん 1',
        example: '13 - 7',
        done: 0,
        sign: '-',
        isOK: false, isNG: false,
        q: null,
        questions: []
      }
    ]
  },

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
});

window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
});
