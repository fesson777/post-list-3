import { Component } from '../core/component'

export class NavigationComponent extends Component {
  constructor(id, arr) {
    super(id)
    this.tabs = []
  }

  registerTabs(arr) {
    this.tabs = arr
  }

  init() {
    this.$el.addEventListener('click', navHandler.bind(this))
  }
}

function navHandler(event) {
  event.preventDefault()
  if (event.target.dataset.name) {
    this.$el.querySelectorAll('a').forEach((i) => i.classList.remove('active'))
    event.target.classList.add('active')

    const activeTab = this.tabs.find(
      (f) => f.name === event.target.dataset.name
    )
    this.tabs.forEach((tab) => tab.component.hide())
    activeTab.component.show()
  }
}
