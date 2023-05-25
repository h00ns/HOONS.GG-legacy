import Global from '@public/assets/icons/Global.svg'
import Error from '@public/assets/icons/Error.svg'

export const icons = {
  'global': Global,
  'error': Error
}

export type IconName = keyof typeof icons;