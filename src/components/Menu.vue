<template>
  <div id="select">
    <h1><font-awesome-icon icon="pencil-alt"/> もんだいをえらんでね</h1>
    <section>
      <a
        v-for="c in categories"
        :key="c.id"
        :class="'bg-' + c.id"
        @click="setCategory(c.id)">
        <h2>{{ c.title }}</h2>
        <span>{{ c.example }}</span>
        <span class="done" v-if="c.done > 0">{{ c.done }} もん</span>
      </a>
    </section>

    <AddMeToHome/>

    <footer>
      <a class="share-facebook"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F">
        <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg"/>
      </a>
      <a class="share-twitter"
        href="https://twitter.com/intent/tweet?text=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F">
        <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
      </a>
      <a class="share-github"
        href="https://github.com/nitoyon/1-10calc/">
        <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
      </a>
      <a href="#" @click.prevent="showPage('app-stat')" id="showstat">
        <font-awesome-icon icon="chart-bar"/> 勉強結果を見る
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import AddMeToHome from './AddMeToHome.vue';
import store from '../store';

export default {
  name: 'Stat',
  components: { AddMeToHome },
  computed: {
    categories: () => store.categories,
  },
  methods: {
    setCategory: (id: string) => store.setCategory(id),
    showPage: (name: string) => store.showPage(name),
  },
};
</script>

<style scoped>
div#select {
  width: 100%;
  height: 100%;
}

div#select h1 {
  font-size: 1.5em;
  padding: 1em;
}

div#select section a {
  display: block;
  position: relative;
  margin: .5em 1em;
  padding: 1em;
  text-decoration: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 80%;
  float: left;
}

div#select section a#add1 { background: #C7243A; }
div#select section a#sub1 { background: #EDAD0B; }
div#select section a#add2 { background: #A4C520; }
div#select section a#sub2 { background: #1A95B7; }

div#select span.done {
  position: absolute;
  bottom: .4em;
  right: .5em;
  font-size: 1.2em;
}

@media (min-width: 560px) {
  div#select section a { width: 35%; }
}

div#select section a h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
}

div#select footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: #ccc;
}

div#select footer a {
  width: 30px;
  height: 27px;
  padding-top: 3px;
  text-align: center;
  display: inline-block;
}

div#select footer a#showstat {
  font-size: 1em;
  width: auto;
  background: #666;
  color: white;
  text-decoration: none;
  display: inline-block;
  padding-left: .4em;
  padding-right: .4em;
}

div#select footer a:hover {
  opacity: 0.7;
}

.share-facebook {
  background: #3B5998;
  color: white;
}

.share-twitter {
  background: #55ACEE;
  color: white;
}

.share-github {
  background: black;
  color: white;
}

</style>
