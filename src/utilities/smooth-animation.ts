// Adapté de https://codepen.io/ReGGae/pen/pxMJLW
export default class SmoothAnimation {
  data: { ease: number; current: number; last: number; rounded: number };
  dom: { el: NodeListOf<HTMLElement> };
  rAF: number | null;

  constructor(elementId: string) {
    this.bindMethods();

    this.data = {
      ease: 0.1,
      current: 0,
      last: 0,
      rounded: 0,
    };

    this.dom = {
      el: document.querySelectorAll(elementId),
    };

    this.rAF = null;

    this.init();
  }

  bindMethods() {
    ["scroll", "run"].forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  scroll() {
    this.data.current = window.scrollY;
  }

  run() {
    this.data.last += (this.data.current - this.data.last) * this.data.ease;
    this.data.rounded = Math.round(this.data.last * 100) / 100;

    //const diff = this.data.current - this.data.rounded;
    //const acc = diff / window.innerHeight
    //const velo =+ acc
    //const skew = velo * 7.5
    const angle = this.data.rounded / 7.5;

    if (this.dom.el)
      this.dom.el.forEach(el => {
        el.style.transform = `rotate3d(0, 0, 1, ${angle}deg)`;
      });

    this.requestAnimationFrame();
  }

  on() {
    this.addEvents();

    this.requestAnimationFrame();
  }

  off() {
    this.cancelAnimationFrame();

    this.removeEvents();
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run);
  }

  cancelAnimationFrame() {
    cancelAnimationFrame(this.rAF);
  }

  destroy() {
    this.data = null;

    this.removeEvents();
    this.cancelAnimationFrame();
  }

  addEvents() {
    window.addEventListener("scroll", this.scroll, { passive: true });
  }

  removeEvents() {
    window.removeEventListener("scroll", this.scroll);
  }

  init() {
    this.on();
  }
}
