import { Component } from '../core/component'
import { apiService } from '../service/api.service'
import { renderPost } from '../template/post.template'

export class FavoriteComponent extends Component {
  constructor(id, options) {
    super(id)
    this.loader = options.loader
  }

  init() {
    this.$el.addEventListener('click', linkHandler.bind(this))
  }

  onShow() {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const html = renderList(favorites)
    this.$el.insertAdjacentHTML('afterbegin', html)
  }
  onHide() {
    this.$el.innerHTML = ''
  }
}

function renderList(list = []) {
  if (list.length && list) {
    return `
    <ul>
        ${list
          .map(
            (i) =>
              `<li><a href="#" class="js-link" data-id="${i.idPost}">${i.titlePost}</a></li>`
          )
          .join(' ')}
    </ul>
    `
  }

  return `<p class="center">В избранном пока-что ничего нет!</p>`
}

async function linkHandler(event) {
  event.preventDefault()

  if (event.target.classList.contains('js-link')) {
    const id = event.target.dataset.id
    this.$el.innerHTML = ''

    this.loader.show()

    const post = await apiService.fetchPostById(id)

    this.loader.hide()

    this.$el.insertAdjacentHTML(
      'afterbegin',
      renderPost(post, { withButton: false })
    )
  }
}
