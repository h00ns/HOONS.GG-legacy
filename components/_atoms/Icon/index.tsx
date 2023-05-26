import { IconSize } from '@constants/atoms/Icon';
import { IconName, icons } from './icons';

type Props = {
  readonly size?: IconSize;
  readonly name: IconName;
  readonly fill?: string;
};

export default function Icon({ size = IconSize.SMALL, name, fill }: Props) {
  const Component = icons[name] || null;

  const width = size;
  const height = size;

  return <Component style={{ width, height, fill }} />;
}
