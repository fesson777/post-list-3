import { Component } from '../core/component.js'

export class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if (localStorage.getItem('visited')) {
      this.hide()
    }

    const btn = this.$el.querySelector('.js-header-start')
    btn.addEventListener('click', btnHandler.bind(this))
  }
}

function btnHandler() {
  this.hide()
  localStorage.setItem('visited', true)
}
