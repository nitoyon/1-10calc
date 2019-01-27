<template>
  <div id="stat" class="page">
    <header class="bg-stat">
      <span class="back" @click="showPage('app-menu')">
        <font-awesome-icon icon="arrow-left" size="lg"/>
      </span>
      <div><font-awesome-icon icon="chart-bar"/> 勉強結果</div>
    </header>
    <section>
      <h2 v-if="histories.length == 0">まだ 1 問も解いていません</h2>
      <table v-if="histories.length">
        <tr v-for="(h, index) in histories" :key="index">
          <td class="q">{{ h.text}}</td>
          <td class="ans">
            <div v-for="(a, i) in h.ans" :key="i">
              <font-awesome-icon icon="check" class="ok" v-if="a.ok"/>
              <font-awesome-icon icon="exclamation-triangle" class="ng" v-if="!a.ok"/>
              {{a.num}}
            </div>
          </td>
          <td class="time">
            {{ h.end ? Math.floor((h.end.getTime() - h.start.getTime()) / 100) / 10 + " 秒" : "----"}}
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Stat',
  computed: {
    histories: () => store.histories,
  },
  methods: {
    showPage: (name) => store.showPage(name),
  },
};
</script>

<style scoped>
#stat header {
  position: fixed;
  top: 0;
  left: 0;
}

#stat section h2 {
  padding: 80px 1em 0 1em;
}

#stat section table {
  margin: 0;
  position: relative;
  top: 40px;
  width: 100%;
  border-collapse: collapse;
}

#stat section table tr td {
  padding: .2em 0;
}

#stat section table tr:nth-child(even) {
  background: #eeeeee;
}

#stat section table td {
  vertical-align: top;
}

#stat section td.q {
  font-weight: bold;
  white-space: nowrap;
  width: 4em;
  padding-left: 1em;
}

#stat section td.ans {
  width: 5em;
}

#stat section td.time {
  color: #666;
  font-size: .8em;
  padding-right: 1em;
  text-align: right;
  width: 4em;
}

#stat section td div .ok {
  color: #228B22;
}
#stat section td div .ng {
  color: red;
}

</style>
