import { IconName, icons } from './icons';

type Props = {
  readonly name: IconName;
  readonly fill?: string;
};

export default function Icon({ name, fill }: Props) {
  const IconComponent = icons[name] || null;

  return <IconComponent style={{ fill }} />;
}
