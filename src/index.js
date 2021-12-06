import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'
import { PostsComponent } from './components/posts.component'

const header = new HeaderComponent('#header')

const navigation = new NavigationComponent('#navigation')

const favorite = new FavoriteComponent('#favorite')
const posts = new PostsComponent('#posts')
const create = new CreateComponent('#create')

navigation.registerTabs([
  { name: 'favorite', component: favorite },
  { name: 'posts', component: posts },
  { name: 'create', component: create },
])
