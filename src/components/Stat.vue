<template>
  <div id="stat" class="page">
    <header>
      <i class="back fas fa-arrow-left" @click="$emit('show-page', 'app-menu')"></i>
      <div><i class="fas fa-chart-bar"></i> 勉強結果</div>
    </header>
    <section>
      <h2 v-if="histories.length == 0">まだ 1 問も解いていません</h2>
      <table v-if="histories.length">
        <tr v-for="(h, index) in histories" :key="index">
          <td class="q">{{ h.text}}</td>
          <td class="ans">
            <div v-for="(a, i) in h.ans" :key="i" :class="{ok: a.ok, ng: !a.ok}">{{a.num}}</div>
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
export default {
  name: 'Stat',
  props: ['histories'],
}
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

#stat section td div.ok:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00c";
  color: #228B22;
  padding: 0 .2em 0 1em;
}
#stat section td div.ng:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: red;
  content: "\f071";
  padding: 0 .2em 0 1em;
}

</style>
