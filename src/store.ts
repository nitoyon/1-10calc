interface Store {
  currentPage: string;
  selectedCategory: Category|null;
  histories: any[];
  categories: Category[];
  init: () => void;
  showPage: (name: string) => void;
  setCategory: (name: string) => void;
}

interface Category {
  id: string;
  example: string;
  done: number;
  sign: string;
  isOK: boolean;
  isNG: boolean;
  q: [number, number, number]|null;
  questions: Array<[number, number, number]>;
}

export default {
  currentPage: 'app-menu',
  selectedCategory: null,
  histories: [],
  categories: [
    {
      id: 'add1',
      example: '3 + 6',
      done: 0,
      sign: '+',
      isOK: false, isNG: false,
      q: null,
      questions: [],
    },
    {
      id: 'sub1',
      example: '8 - 3',
      done: 0,
      sign: '-',
      isOK: false, isNG: false,
      q: null,
      questions: [],
    },
    {
      id: 'add2',
      example: '7 + 5',
      done: 0,
      sign: '+',
      isOK: false, isNG: false,
      q: null,
      questions: [],
    },
    {
      id: 'sub2',
      example: '13 - 7',
      done: 0,
      sign: '-',
      isOK: false, isNG: false,
      q: null,
      questions: [],
    },
    {
      id: 'mul1',
      example: '5 × 9',
      done: 0,
      sign: '×',
      isOK: false, isNG: false,
      q: null,
      questions: [],
    },
  ],

  init() {
    for (let x = 1; x <= 10; x++) {
      for (let y = 1; y <= 10; y++) {
        if (x + y <= 10) {
          this.categories[0].questions.push([x, y, x + y]);
        } else {
          if (x !== 10 && y !== 10) {
            this.categories[2].questions.push([x, y, x + y]);
            this.categories[3].questions.push([x + y, y, x]);
          }
        }
        if (x - y >= 1) {
          this.categories[1].questions.push([x, y, x - y]);
        }
        if (x < 10 && y < 10) {
          this.categories[4].questions.push([x, y, x * y]);
        }
      }
    }
  },

  showPage(name: string) {
    this.currentPage = name;
  },

  setCategory(id: string) {
    const found = this.categories.find(c => c.id === id);
    if (found === undefined) {
      this.selectedCategory = null;
      this.showPage('app-menu');
    } else {
      this.selectedCategory = found;
      this.showPage('app-solve');
    }
  },
} as Store;
