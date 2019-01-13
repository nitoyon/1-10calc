<template>
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
</template>

<script>
export default {
  name: 'Solve',
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
};
</script>

<style scoped>
button {
  border: 1px solid black;
  background: #ccc;
}

button:active {
  border: 1px solid black;
  background: #fff;
}

button:focus {
  outline: 0;
}

div#q {
  font-size: 60px;
  text-align: center;
  padding: 45px .5em 10px .5em;
}

div#q.ok {
  background: #78be20;
}

div#q.ng {
  background: red;
}

#a {
  text-align: center;
}

#a button {
  padding: 0;
  text-align: center;
  width: 33%;
  height: calc((100% - 150px) / 4);
  font-size: 4em;
}
#a button.ng {
	background: #666;
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
