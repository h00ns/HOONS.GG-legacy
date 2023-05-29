import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  hooks
import { useGetRuneIconUrl } from '@hooks/atoms/useGetRuneIconUrl';

type Props = {
  readonly size: string;
  readonly runeId: number;
};

const Layout = styled.div`
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;

  position: relative;
`;

export default function Rune({ size, runeId }: Props) {
  const runeIconUrl = useGetRuneIconUrl(runeId);

  const width = size;
  const height = size;

  return (
    <Layout style={{ width, height }}>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeIconUrl}`}
        layout="fill"
        alt={runeId.toString()}
      />
    </Layout>
  );
}
