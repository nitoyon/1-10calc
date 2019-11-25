import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: navigator.language.substring(0, 2),
  fallbackLocale: 'en',
  messages: {
    en: {
      title: 'Calc Card App',
      notice: 'Please choose a category',
      add1: 'Addition 1',
      sub1: 'Subtraction 1',
      add2: 'Addition 2',
      sub2: 'Subtraction 2',
      mul1: 'Multiplication ',
      done: '{0} Correct!!',
      result: 'View results',
      result_title: 'Results',
      not_solved: 'You have not solved any problem yet.',
      seconds: '{0} sec',
      qr_code: 'QR Code',
      add_to_home_screen1: 'Add this app to home screen!',
      add_to_home_screen2: 'Tap',
      add_to_home_screen3: 'and select',
      add_to_home_screen4: 'Add to Home Screen',
      add_to_home_screen5: '',
    },
    ja: {
      title: 'けいさんカードアプリ',
      notice: 'もんだいをえらんでね',
      add1: 'たしざん 1',
      sub1: 'ひきざん 1',
      add2: 'たしざん 2',
      sub2: 'ひきざん 2',
      mul1: 'かけざん',
      done: '{0}もん',
      result: '勉強結果を見る',
      result_title: '勉強結果',
      not_solved: 'まだ 1 問も解いていません',
      seconds: '{0} 秒',
      qr_code: 'QR コード',
      add_to_home_screen1: 'このアプリをホーム画面から開けるようにしてください。',
      add_to_home_screen2: '',
      add_to_home_screen3: 'をタップして',
      add_to_home_screen4: 'ホーム画面に追加',
      add_to_home_screen5: 'をタップするだけです。',
    },
  },
});
