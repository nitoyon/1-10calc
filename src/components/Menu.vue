<template>
  <div id="select">
    <h1><i class="fas fa-pencil-alt"></i> もんだいをえらんでね</h1>
    <section>
      <a
        v-for="c in categories"
        :key="c.id"
        :id="c.id"
        @click="$emit('set-category', c.id)">
        <h2>{{ c.title }}</h2>
        <span>{{ c.example }}</span>
        <span class="done" v-if="c.done > 0">{{ c.done }} もん</span>
      </a>
    </section>
  
    <AddMeToHome
      v-if="showAddMe"
      @click="hideAddMe()">
    </AddMeToHome>
  
    <footer>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F" class="fab fa-facebook-f"></a>
      <a href="https://twitter.com/intent/tweet?text=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F" class="fab fa-twitter"></a>
      <a href="https://github.com/nitoyon/1-10calc/" class="fab fa-github"></a>
      <a href="#" @click.prevent="$emit('show-page', 'app-stat')" id="showstat"><i class="fas fa-chart-bar"></i> 勉強結果を見る</a>
    </footer>
  </div>
</template>

<script>
import AddMeToHome from './AddMeToHome.vue'

export default {
  name: 'Stat',
  props: ['categories'],
  components: { AddMeToHome },
  data: () => {
    // show add me popup only once (iOS & Safari app)
    var count = localStorage.getItem('add-me-closed');
    var home = location.search.indexOf('homescreen') !== -1;
    var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);
    return { showAddMe: count === null && !home && standalone && safari && ios };
  },

  methods: {
    hideAddMe: function() {
      var count = localStorage.getItem('add-me-closed');
      count = (count == null ? 1 : count + 1);
      localStorage.setItem('add-me-closed', count);
      this.showAddMe = false;
    },
  },
}
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
  border: 2px solid #9999cc;
  border-radius: 5px;
  color: #9999cc;
  cursor: pointer;
  width: 80%;
  float: left;
}

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
  padding: 5px;
  font-size: 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  text-decoration: none;
}

div#select footer a#showstat {
  font-size: 1em;
  width: auto;
  background: #666;
  color: white;
}

div#select footer a:hover {
  opacity: 0.7;
}

.fa-facebook-f {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-github {
  background: black;
  color: white;
}

</style>
