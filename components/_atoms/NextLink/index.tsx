import Link from 'next/link';

type Props = {
  readonly href: string;
  readonly children: React.ReactNode;
};

export default function NextLink({ href, children }: Props) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
