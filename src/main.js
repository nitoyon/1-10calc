import AddMeToHome from './components/AddMeToHome.vue'

Vue.component('app-menu', {
  props: ['categories'],
  components: { AddMeToHome },
  data: function() {
    // show add me popup only once (iOS & Safari app)
    var count = localStorage.getItem('add-me-closed');
    var home = location.search.indexOf('homescreen') !== -1;
    var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);
    return { showAddMe: count === null && !home && standalone && safari && ios };
  },
  template: `<div id="select">
  <h1><i class="fas fa-pencil-alt"></i> もんだいをえらんでね</h1>
  <section>
    <a
      v-for="c in categories"
      v-bind:id="c.id"
      v-on:click="$emit('set-category', c.id)">
      <h2>{{ c.title }}</h2>
      <span>{{ c.example }}</span>
      <span class="done" v-if="c.done > 0">{{ c.done }} もん</span>
    </a>
  </section>

  <AddMeToHome
    v-if="showAddMe"
    v-on:click="hideAddMe()">
  </AddMeToHome>

  <footer>
<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F" class="fab fa-facebook-f"></a
><a href="https://twitter.com/intent/tweet?text=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F" class="fab fa-twitter"></a
><a href="https://github.com/nitoyon/1-10calc/" class="fab fa-github"></a
><a href="#" v-on:click.prevent="$emit('show-page', 'app-stat')"><i class="fas fa-chart-bar"></i> 勉強結果を見る</a>
  </footer>
</div>`,

  methods: {
    hideAddMe: function() {
      var count = localStorage.getItem('add-me-closed');
      count = (count == null ? 1 : count + 1);
      localStorage.setItem('add-me-closed', count);
      this.showAddMe = false;
    }
  }
});

Vue.component('app-solve', {
  props: {
    'buttons': {
      type: Array,
      default: function() {
        return [
          { label: 1, ng: false },
          { label: 2, ng: false },
          { label: 3, ng: false },
          { label: 4, ng: false },
          { label: 5, ng: false },
          { label: 6, ng: false },
          { label: 7, ng: false },
          { label: 8, ng: false },
          { label: 9, ng: false },
          { label: 10, ng: false }
        ];
      }
    },
    'category': Object,
    'histories': Array
  },

  mounted: function() {
    this.newQuiz();
  },

  methods: {
    initButtons: function() {
      var over10 = (this.category.id === 'add2' ? 11 : 1);

      for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].label = i + over10;
        this.buttons[i].ng = false;
      }
    },

    newQuiz: function() {
      this.initButtons();

      this.category.q = this.findQuestion();
      if (this.category.q === null) {
        return;
      }

      var q = this.category.q;
      var t = q[0] + this.category.sign + q[1];
      this.histories.push({
        q: q,
        text: t,
        start: new Date(),
        end: null,
        ans: []
      });
    },

    answer: function(btn) {
      var clicked = btn.label;
      var ans = this.category.q[2];

      var self = this;
      var h = this.histories[this.histories.length - 1];
      if (ans !== clicked) {
        h.ans.push({num: clicked, ok: false});
        btn.ng = true;
        this.category.isNG = true;
        setTimeout(function() {
          self.category.isNG = false;
        }, 500);
      } else {
        h.end = new Date();
        h.ans.push({num: ans, ok: true});
        var all = this.category.questions;
        all.splice(all.indexOf(this.category.q), 1);

        this.category.isOK = true;
        setTimeout(function() {
          self.category.isOK = false;
          self.category.done++;
          self.newQuiz();
        }, 500);
      }
    },

    findQuestion: function() {
      var all = this.category.questions;
      if (all.length === 0) {
        return null;
      }

      return all[Math.floor(Math.random() * all.length)];
    }
  },
  template: `
<div id="qa" class="page">
  <header>
    <i class="back fas fa-arrow-left" v-on:click="$emit('show-page', 'app-menu')"></i>
    <div>{{category.done}} もんせいかい</div>
  </header>
  <div id="q" v-if="category.q" v-bind:class="{ok: category.isOK, ng: category.isNG}"><span>{{ category.q[0] }} {{ category.sign }} {{ category.q[1] }}</span> = <i class="fas fa-question"></i></div>
  <div id="a" v-if="category.q">
    <button v-for="b in buttons" v-on:click="answer(b)" v-bind:class="{ng: b.ng}">{{ b.label }}</button>
  </div>
  <transition name="fadeout"><div id="ok" v-if="category.isOK">🙆</div></transition>
  <transition name="fadeout"><div id="ng" v-if="category.isNG">😢</div></transition>
  <div id="done" v-if="!category.q">🎉</div>
</div>
`
});

import Stat from './components/Stat.vue'

new Vue({
  el: '#app',
  components: { Stat },
  template: `
    <div id="app">
      <app-menu
        v-if="currentPage == 'app-menu'"
        v-bind:categories="categories"
        v-on:show-page="showPage($event)"
        v-on:set-category="setCategory($event)">
      </app-menu>
      <app-solve
        v-if="currentPage == 'app-solve'"
        v-bind:category="selectedCategory"
        v-bind:histories="histories"
        v-on:show-page="showPage($event)">
      </app-solve>
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
