// мини JQuery-подобная библиотека для упрощения доступа к элементам страницы и работы с состояниями
// Пример:
// $('.class').onclick( function f(){
//      $(this).toggleClass("-active");
// })

window.$ = (selector) => {
  const sq = new SQuery(selector);
  return sq;
};

class SQuery {
  constructor(selector) {
    this.selector = selector;
    this.elemArr = [];
    if (selector) {
      if (typeof selector !== 'object') {
        this.elemArr = document.querySelectorAll(selector);
      } else {
        this.elemArr.push(selector);
      }
    } else {
      this.elemArr = document;
    }
    return this;
  }

  debug() {
    console.log(this.elemArr);
    return this;
  }

  onclick(f) {
    this.on('click', f);
    return this;
  }

  on(eventName, f) {
    const h = this;
    this.elemArr.forEach((item) => {
      item.addEventListener(eventName, function (e) {
        for (let { target } = e; target && target != this; target = target.parentNode) {
          if (target.matches(this.selector)) {
            handler.call(target, e);
            break;
          }
        }
        f.bind()();// привязали контекст f к объекту SQuery
      }, false);
    });
    return this;
  }

  toggleClass(cls) {
    this.elemArr.forEach((item) => { item.classList.toggle(cls); });
    return this;
  }

  addClass(cls) {
    this.elemArr.forEach((item) => { item.classList.add(cls); });
    return this;
  }

  addClass2(cls) {
    this.elemArr.classList.add(cls);
    return this;
  }

  removeClass(cls) {
    this.elemArr.forEach((item) => { item.classList.remove(cls); });
    return this;
  }

  each(f) {
    // this не работает, передавать через аргумент
    return this.elemArr.forEach(f);
  }
}
