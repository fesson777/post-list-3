import { Component } from '../core/component'
import { apiService } from '../service/api.service'
import { renderPost } from '../template/post.template'
import { TransformService } from '../service/transform.apiserv'

export class PostsComponent extends Component {
  constructor(id, { loader }) {
    super(id)
    this.loader = loader
  }
  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow() {
    this.loader.show()

    const data = await apiService.fetchPosts() // запрос постов = обьект  с (ключ: обьект поста)
    const posts = TransformService.transformDataToArrayFireBase(data) // адаптация в массив с id = key in FireBase
    const html = posts.map((post) => renderPost(post, { withButton: true }))

    this.loader.hide()

    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}

function buttonHandler(event) {
  const $el = event.target
  const idPost = event.target.dataset.id
  const titlePost = event.target.dataset.title

  if (idPost) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find((p) => p.idPost === idPost)
    if (candidate) {
      $el.textContent = 'Сохранить'
      $el.classList.add('button-primary')
      $el.classList.remove('button-warning')

      favorites = favorites.filter((p) => p.idPost !== idPost)
    } else {
      $el.textContent = 'Удалить'
      $el.classList.remove('button-primary')
      $el.classList.add('button-warning')

      favorites.push({ idPost, titlePost })
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}
