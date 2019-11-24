<template>
  <div id="qa" class="page" :class="'page-' + category.id">
    <header :class="'bg-' + category.id">
      <span class="back" @click="showPage('app-menu')">
        <font-awesome-icon icon="arrow-left" size="lg"/>
      </span>
      <div>{{ $t('done', [category.done]) }} [{{ $t(category.id) }}]</div>
    </header>
    <div id="q" v-if="category.q" :class="{ok: category.isOK, ng: category.isNG}">
      <span>{{ category.q[0] }} {{ category.sign }} {{ category.q[1] }}</span>
      =
      <template v-if="inputValue">{{inputValue}}</template>
      <font-awesome-icon icon="question" v-if="showQuestionMark"/>
    </div>
    <div id="a" v-if="category.q">
      <button v-for="b in buttons" :key="b.label" @click="answer(b)" :class="{ng: b.ng, ok: b.ok}">{{ b.label }}</button>
      <button id="clear" v-if="isMultiple" @click="clear()" :class="{ok: inputValue}">C</button>
    </div>
    <transition name="fadeout"><div id="ok" v-if="category.isOK">🙆</div></transition>
    <transition name="fadeout"><div id="ng" v-if="category.isNG">😢</div></transition>
    <div id="done" v-if="!category.q">🎉</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';

interface Button {
  label: number;
  ok: boolean;
  ng: boolean;
}

export default Vue.extend({
  name: 'Solve',
  data: () => ({
    buttons: [
      { label: 1, ok: false, ng: false },
      { label: 2, ok: false, ng: false },
      { label: 3, ok: false, ng: false },
      { label: 4, ok: false, ng: false },
      { label: 5, ok: false, ng: false },
      { label: 6, ok: false, ng: false },
      { label: 7, ok: false, ng: false },
      { label: 8, ok: false, ng: false },
      { label: 9, ok: false, ng: false },
      { label: 10, ok: false, ng: false },
    ] as Button[],
    inputValue: 0,
    showQuestionMark: true,
  }),

  computed: {
    category: () => store.selectedCategory,
    histories: () => store.histories,
    isMultiple: () => store.selectedCategory != null && store.selectedCategory.id === 'mul1',
  },

  mounted() {
    this.newQuiz();
  },

  methods: {
    showPage: (name: string) => store.showPage(name),

    initButtons() {
      if (this.category === null) { throw new Error('category is null'); }
      const over10 = (this.category.id === 'add2' ? 11 : 1);

      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].label = i + over10;
        if (this.isMultiple) { this.buttons[9].label = 0; }
        this.buttons[i].ok = false;
        this.buttons[i].ng = false;
      }
      this.showQuestionMark = true;
      this.inputValue = 0;
    },

    newQuiz() {
      if (this.category === null) { throw new Error('category is null'); }

      this.initButtons();

      this.category.q = this.findQuestion();
      if (this.category.q === null) {
        return;
      }

      const q = this.category.q;
      const t = q[0] + this.category.sign + q[1];
      this.histories.push({
        q,
        text: t,
        start: new Date(),
        end: null,
        ans: [],
      });
    },

    clear() {
      this.inputValue = 0;
      this.showQuestionMark = true;
    },

    answer(btn: Button) {
      const category = this.category;
      if (category === null) { throw new Error('category is null'); }
      const q = category.q;
      if (q === null) { throw new Error('question is null'); }
      if (!this.isMultiple && (btn.ok || btn.ng)) { return; }

      const clicked = this.inputValue * 10 + btn.label;
      const ans = q[2];

      if (this.isMultiple) {
        this.inputValue = clicked;
        if (ans >= 10 && clicked < 10) {
          return;
        }
        this.showQuestionMark = false;
      }

      const h = this.histories[this.histories.length - 1];
      if (ans !== clicked) {
        h.ans.push({num: clicked, ok: false});
        btn.ng = !this.isMultiple;
        category.isNG = true;
        setTimeout(() => {
          this.inputValue = 0;
          this.showQuestionMark = true;
          category.isNG = false;
        }, 500);
      } else {
        h.end = new Date();
        h.ans.push({num: ans, ok: true});
        const all = category.questions;
        all.splice(all.indexOf(q), 1);

        btn.ok = true;
        category.isOK = true;
        setTimeout(() => {
          category.isOK = false;
          category.done++;
          this.newQuiz();
        }, 500);
      }
    },

    findQuestion() {
      if (this.category === null) { throw new Error('category is null'); }
      const all = this.category.questions;
      if (all.length === 0) {
        return null;
      }

      return all[Math.floor(Math.random() * all.length)];
    },
  },
});
</script>

<style scoped>
div#qa {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

div#q {
  font-size: 60px;
  height: 90px;
  text-align: center;
  position: fixed;
  top: 40px;
  width: 100%;
}

.page-mul1 div#q {
  text-align: left;
  padding-left: .5em;
}

div#q.ok {
  background: #ddee80;
}

div#q.ng {
  background: #ffcccc;
}

#a {
  text-align: center;
  position: fixed;
  top: 130px;
  width: 100%;
  bottom: 0;
}

button {
  background: #ccc;
  padding: 0;
  text-align: center;
  width: 33%;
  height: 25%;
  border: 2px solid white;
  border-radius: 40px;
  font-size: 4em;
}

button:active {
  border: 1px solid black;
  background: #ddd;
}

button:focus {
  outline: 0;
}

#a button.ng {
	background: #666;
}

#a button.ok {
	background: #666;
}

#a button#clear.ok {
  background: #ddd;
  color: #000;
}

#a button#clear {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #eee;
  color: #ddd;
}

div#ok, div#ng, div#done {
  position: absolute;
  margin: auto;
  height: 180px;
  font-size: 180px;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.fadeout-leave-active {
  transition: all 100ms;
}

.fadeout-leave-to {
  opacity: 0;
}
</style>
