import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Radius } from '@styles/Radius';

//  hooks
import { useGetRuneIconUrl } from '@hooks/atoms/useGetRuneIconUrl';

type Props = {
  runeId: number;
};

const Layout = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  border-radius: ${Radius.MEDIUM};
  overflow: hidden;
`;

export default function Rune({ runeId }: Props) {
  const runeIconUrl = useGetRuneIconUrl(runeId);

  return (
    <Layout>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${runeIconUrl}`}
        layout="fill"
        alt={runeId.toString()}
      />
    </Layout>
  );
}
