<template>
  <div id="qrcode" class="page">
    <header class="bg-qrcode">
      <span class="back" @click="showPage('app-menu')">
        <font-awesome-icon icon="arrow-left" size="lg"/>
      </span>
      <div><font-awesome-icon icon="qrcode"/> {{ $t('qr_code') }}</div>
    </header>
    <section>
      <div class="qrcode"/>
      <div class="url">https://nitoyon.github.io/1-10calc/</div>
    </section>
  </div>
</template>

<script lang="ts">
import store from '../store';

export default {
  name: 'QrCode',
  methods: {
    showPage: (name: string) => store.showPage(name),
  },
};
</script>

<style scoped>
#qrcode header {
  position: fixed;
  top: 0;
  left: 0;
}

#qrcode section {
  padding: 80px 1em 0 1em;
}

div.qrcode {
  background: url('../../qrcode.png') no-repeat;
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
}

div.url {
  text-align: center;
}
</style>
