import Link from 'next/link';

type Props = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly blank?: boolean;
};

export default function NextLink({ href, children, blank }: Props) {
  return (
    <Link href={href}>
      <a target={blank ? '_blank' : '_self'}>{children}</a>
    </Link>
  );
}
