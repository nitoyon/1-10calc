<template>
  <div id="add-me-to-home" v-if="visible" @click="hide()">
    <span class="fas fa-window-close"></span>
    このアプリをホーム画面から開けるようにしましょう。<br>
    <svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <polyline fill="none" points="17,10 25,2 33,10   " stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="32" y2="2.333"/>
      <rect fill="none" height="50" width="50"/>
      <path d="M17,17H8v32h34V17h-9" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </svg>
    をタップして <i class="fas fa-plus-square"></i> <strong>ホーム画面に追加</strong> をタップするだけです。
  </div>
</template>

<script>
export default {
  name: 'AddMeToHome',

  data: () => {
    // show add me popup only once (iOS & Safari app)
    var count = localStorage.getItem('add-me-closed');
    var home = location.search.indexOf('homescreen') !== -1;
    var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);
    return { visible: count === null && !home && standalone && safari && ios };
  },

  methods: {
    hide: function() {
      var count = localStorage.getItem('add-me-closed');
      count = (count == null ? 1 : count + 1);
      localStorage.setItem('add-me-closed', count);
      this.visible = false;
    },
  },
}
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

#add-me-to-home > span {
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
