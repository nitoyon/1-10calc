<template>
  <div id="add-me-to-home" v-if="visible" @click="hide()">
    <font-awesome-icon icon="window-close" class="close"/>
    {{$t('add_to_home_screen1')}}<br>
    {{$t('add_to_home_screen2')}}
    <svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polyline fill="none" points="17,10 25,2 33,10   " stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="32" y2="2.333"/>
      <rect fill="none" height="50" width="50"/>
      <path d="M17,17H8v32h34V17h-9" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </svg>
    {{$t('add_to_home_screen3')}}
    <font-awesome-icon icon="plus-square"/> <strong> {{$t('add_to_home_screen4')}}</strong>
    {{$t('add_to_home_screen5')}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Navigator {
  standalone: boolean;
}
export default Vue.extend({
  name: 'AddMeToHome',

  data: () => {
    // show add me popup only once (iOS & Safari app)
    const home = location.search.indexOf('homescreen') !== -1;
    const standalone = (window.navigator as any).standalone;
    const userAgent = window.navigator.userAgent.toLowerCase();
    const safari = /safari/.test(userAgent);
    const ios = /iphone|ipod|ipad/.test(userAgent);
    return { visible: !home && !standalone && safari && ios };
  },

  methods: {
    hide() {
      this.visible = false;
    },
  },
});
</script>

<style scoped>
#add-me-to-home {
  font-size: 90%;
  position: fixed;
  bottom: 15px;
  border-radius: .5em;
  margin: .5em;
  padding: 10px 24px .5em 84px;
  height: auto;
  z-index: 9;
  background: url('../../public/apple-touch-icon.png') no-repeat;
  background-size: 64px;
  background-position: 10px 10px;
  background-color: #eedddd;
  animation: vertical .8s ease-in-out infinite alternate;
}

#add-me-to-home > .close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 15px;
  color: white;
}


#add-me-to-home::after {
  position: absolute;
  top: 99%;
  left: 50%;
  margin-left: -15px;
  content: ' ';
  border: 15px solid transparent;
  border-top-color: #eedddd;
}

@keyframes vertical {
    0% { transform:translateY(-3px); }
  100% { transform:translateY(  0px); }
}
</style>
