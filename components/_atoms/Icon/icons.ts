import Global from '@public/assets/icons/Global.svg'
import Error from '@public/assets/icons/Error.svg'
import Menu from '@public/assets/icons/Menu.svg'
import Close from '@public/assets/icons/Close.svg'
import Search from '@public/assets/icons/Search.svg'
import ArrowUp from '@public/assets/icons/ArrowUp.svg'
import ArrowDown from '@public/assets/icons/ArrowDown.svg'
import Favorite from '@public/assets/icons/Favorite.svg'
import FavoriteEmpty from '@public/assets/icons/FavoriteEmpty.svg'

export const icons = {
  'global': Global,
  'error': Error,
  'menu': Menu,
  'close': Close,
  'search': Search,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'favorite': Favorite,
  'favorite-empty': FavoriteEmpty
}

export type IconName = keyof typeof icons;