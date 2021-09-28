<template>
  <div id="stat" class="page">
    <header class="bg-stat">
      <span class="back" @click="showPage('app-menu')">
        <font-awesome-icon icon="arrow-left" size="lg"/>
      </span>
      <div><font-awesome-icon icon="chart-bar"/> {{ $t('result_title') }}</div>
    </header>
    <section>
      <div v-for="c in categories" :key="c.id">
        <h3 :class="'bg-' + c.id">{{ $t(c.id) }}</h3>
        <span v-if="c.solved == 0">{{ $t('not_solved')}}</span>
        <div v-else>
          <div class="average">
            {{$t('second_per_problem1')}}
            <span class="value">{{ (c.time / 1000 / c.solved).toPrecision(3)}}</span>
            {{$t('second_per_problem2')}}
          </div>
          <table>
            <tr>
              <td>{{$t('solved_time')}}:</td>
              <td><span class="value">{{(c.time / 1000).toPrecision(3)}}</span> {{$t('seconds')}}</td>
            </tr>
            <tr>
              <td>{{$t('solved_count')}}:</td>
              <td><span class="value">{{c.solved}}</span> {{$t('problems')}}</td>
            </tr>
            <tr>
              <td>{{$t('solve_ratio')}}:</td>
              <td><span class="value">{{Math.floor(c.solved / (c.solved + c.failed.length) * 100)}}</span>%</td></td>
            </tr>
            <tr>
              <td class="vtop">{{$t('solve_failed')}}:</td>
              <td v-if="c.failed.length == 0">🎉{{$t('none')}}</td>
              <td v-else>
                <div v-for="(a, i) in c.failed" :key="i">
                  {{a[0]}}{{c.sign}}{{a[1]}} = <font-awesome-icon icon="exclamation-triangle" class="ng"/>{{a[2]}}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import store from '../store';

export default {
  name: 'Stat',
  computed: {
    categories: () => store.categories,
    histories: () => store.histories,
  },
  methods: {
    showPage: (name: string) => store.showPage(name),
  },
};
</script>

<style scoped>
#stat header {
  position: fixed;
  top: 0;
  left: 0;
}

#stat section {
  padding: 40px 1em 0 1em;
}

#stat h3 {
  font-size: 1;
  color: white;
  padding: .2em;
  border-radius: 5px;
  margin-bottom: .4em;
}

#stat .average {
  font-size: 2em;
  display: block;
}

#stat .count {
  padding-right: 3em;
}

#stat span.value {
  font-size: 1.5em;
  font-weight: bold;
}

#stat section table {
  border-collapse: collapse;
}

#stat section table tr td {
  padding-left: 1em;
}

#stat section table tr td.vtop {
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

#stat section td div .ng {
  color: red;
}

</style>
