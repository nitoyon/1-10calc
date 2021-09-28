interface Store {
  currentPage: string;
  selectedCategory: Category|null;
  categories: Category[];
  init: () => void;
  showPage: (name: string) => void;
  setCategory: (name: string) => void;
}

class Category {
  public id: string;
  public example: string;
  public done: number = 0;
  public sign: string;
  public isOK: boolean = false;
  public isNG: boolean = false;
  public q: Question|null = null;
  public qStart: Date = new Date(0);
  public questions: Question[] = [];
  public left: Question[] = [];
  public solved: number = 0;
  public time: number = 0;
  public timeCurrent: number = 0;
  public failed: Question[] = [];

  constructor(id: string, example: string, sign: string) {
    this.id = id;
    this.example = example;
    this.sign = sign;
  }
}

export default {
  currentPage: 'app-menu',
  selectedCategory: null,
  categories: [
    new Category('add1', '3 + 6', '+'),
    new Category('sub1', '8 - 3', '-'),
    new Category('add2', '7 + 5', '+'),
    new Category('sub2', '13 - 7', '-'),
    new Category('mul1', '5 × 9', '×'),
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

    for (const category of this.categories) {
      category.left = [...category.questions];
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
