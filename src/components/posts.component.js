import { Component } from '../core/component'
import { apiService } from '../service/api.service'
import { TransformService } from '../service/transform.apiserv'

export class PostsComponent extends Component {
  constructor(id) {
    super(id)
  }
  async onShow() {
    const data = await apiService.fetchPosts() // запрос постов == обьект  с ключ: обьект поста
    const posts = TransformService.transformDataToArrayFireBase(data) // адаптация в массив с id = key in FireBase

    const html = posts.map((post) => renderPost(post))
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }
}

function renderPost(post) {
  return `
       <div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              <li class="tag tag-blue tag-rounded">${post.type}</li>
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
          </div>
        </div>
  `
}
