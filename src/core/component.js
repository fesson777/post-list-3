export class Component {
  constructor(id) {
    this.$el = document.querySelector(id)
    this.init()
  }

  init() {}

  show() {
    this.$el.classList.remove('hide')
  }

  hide() {
    this.$el.classList.add('hide')
  }
}
