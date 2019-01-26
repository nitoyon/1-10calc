export default {
  currentPage: 'app-menu',
  selectedCategory: null,
  histories: [],
  categories: [
    {
      id: 'add1',
      title: 'たしざん 1',
      example: '3 + 6',
      done: 0,
      sign: '+',
      isOK: false, isNG: false,
      q: null,
      questions: []
    },
    {
      id: 'sub1',
      title: 'ひきざん 1',
      example: '8 - 3',
      done: 0,
      sign: '-',
      isOK: false, isNG: false,
      q: null,
      questions: []
    },
    {
      id: 'add2',
      title: 'たしざん 2',
      example: '7 + 5',
      done: 0,
      sign: '+',
      isOK: false, isNG: false,
      q: null,
      questions: []
    },
    {
      id: 'sub2',
      title: 'ひきざん 2',
      example: '13 - 7',
      done: 0,
      sign: '-',
      isOK: false, isNG: false,
      q: null,
      questions: []
    }
  ],

  init() {
    for (var x = 1; x <= 10; x++) {
      for (var y = 1; y <= 10; y++) {
        if (x + y <= 10) {
          this.categories[0].questions.push([x, y, x + y]);
        } else {
          if (x != 10 && y != 10) {
            this.categories[2].questions.push([x, y, x + y]);
            this.categories[3].questions.push([x + y, y, x]);
          }
        }
        if (x - y >= 1) {
          this.categories[1].questions.push([x, y, x - y]);
        }
      }
    }
  },

  showPage: function(name) {
    this.currentPage = name;
  },

  setCategory: function(id) {
    this.selectedCategory = this.categories.find((c) => c.id === id);
    if (this.selectedCategory === undefined) {
      this.showPage('app-menu');
    } else {
      this.showPage('app-solve');
    }
  }
};
