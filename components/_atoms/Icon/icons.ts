import Global from '@public/assets/icons/Global.svg'
import Error from '@public/assets/icons/Error.svg'
import Menu from '@public/assets/icons/Menu.svg'
import Close from '@public/assets/icons/Close.svg'
import Search from '@public/assets/icons/Search.svg'

export const icons = {
  'global': Global,
  'error': Error,
  'menu': Menu,
  'close': Close,
  'search': Search
}

export type IconName = keyof typeof icons;