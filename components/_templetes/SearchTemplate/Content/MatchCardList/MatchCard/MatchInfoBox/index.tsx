import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';
import Divider from '@components/_atoms/Divider';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { gray, primary, red } from '@styles/Colors';

//  types
import { getMatchDetailData } from '@customType/match';
import { QueueType } from '@constants/service';

//  hooks

//  utils
import { Time } from '@utils/time';
import { useGetQueueType } from '@components/_templetes/SearchTemplate/Hooks/useGetQueueType';
import { useGetGameTime } from '@components/_templetes/SearchTemplate/Hooks/useGetGameTime';

type Props = {
  win?: boolean;
  data: getMatchDetailData['data'];
};

const Layout = styled.div`
  width: 75px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export default function MatchInfoBox({ data, win }: Props) {
  const { queueId, gameDuration, gameCreation } = data?.info ?? {};

  const queueType = useGetQueueType(queueId as QueueType);
  const gameTime = useGetGameTime(gameDuration);

  const fontColor = win ? primary.blue : red.red3;
  const dividerColor = win ? gray.gray5 : red.red2;

  return (
    <Layout>
      <DescriptionBox>
        <Typography size={TypoSize.SH5} color={fontColor}>
          {queueType}
        </Typography>
        <Typography size={TypoSize.B5} color={gray.gray6}>
          {Time(gameCreation).format('MM-DD')}
        </Typography>
      </DescriptionBox>
      <Divider width="20px" color={dividerColor} />
      <DescriptionBox>
        <Typography size={TypoSize.SH5} color={gray.gray6}>
          {win ? '승리' : '패배'}
        </Typography>
        <Typography size={TypoSize.B5} color={gray.gray6}>
          {gameTime}
        </Typography>
      </DescriptionBox>
    </Layout>
  );
}
