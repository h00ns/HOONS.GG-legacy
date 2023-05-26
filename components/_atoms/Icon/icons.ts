import Global from '@public/assets/icons/Global.svg'
import Error from '@public/assets/icons/Error.svg'
import Menu from '@public/assets/icons/Menu.svg'
import Close from '@public/assets/icons/Close.svg'
import Search from '@public/assets/icons/Search.svg'
import ArrowUp from '@public/assets/icons/ArrowUp.svg'
import ArrowDown from '@public/assets/icons/ArrowDown.svg'

export const icons = {
  'global': Global,
  'error': Error,
  'menu': Menu,
  'close': Close,
  'search': Search,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown
}

export type IconName = keyof typeof icons;