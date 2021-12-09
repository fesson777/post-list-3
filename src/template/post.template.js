export function renderPost(post, options = {}) {
  const tag =
    post.type === 'news'
      ? `<li class="tag tag-red tag-rounded">Новость</li>`
      : `<li class="tag tag-blue tag-rounded">Заметка</li>`

  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  const candidate = favorites.find((p) => p.idPost === post.idPost)
  const buttonDel = `<button data-del="${post.id}" data-t="${post.title}" class="button-round button-small button-danger btn-del">X</button>`
  const button = candidate
    ? `<button class="button-round button-small button-warning" data-id="${post.id}" data-title="${post.title}">Удалить</button>`
    : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Сохранить</button>`

  return (
    `
         <div class="panel">
            <div class="panel-head">
              <p class="panel-title">${post.title}</p>
              <ul class="tags">
               ${tag}
              </ul>
            </div>
            <div class="panel-body">
              <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
              <small>${post.date}</small>
              ${options.withButton ? button : ''}
              ${options.withButton ? buttonDel : ''}
            </div>
          </div>
    ` || 'Нет данных'
  )
}
