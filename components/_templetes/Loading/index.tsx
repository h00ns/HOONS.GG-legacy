import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { primary, gray } from '@styles/Colors';

import Typography from '@components/_atoms/Typography';

// constants
import { Radius } from '@styles/Radius';
import { TypoSize } from '@constants/atoms/Typography';

const LoadingWrapper = styled.div<{ isLoading: boolean }>`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);

  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    !props.isLoading &&
    `
    display: none;
  `}
`;

const ContentWrapper = styled.div`
  width: 130px;
  display: grid;
  row-gap: 18px;
  text-align: center;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  100%{ -webkit-transform: rotate(360deg); }
`;

const Indicator = styled.div`
  margin: 0 auto;
  width: 32px;
  height: 32px;
  border: 4px solid #fff;
  margin: 0;
  display: block;
  border-radius: ${Radius.MAXIMUM};
  border-color: ${gray.gray6} rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2);
  animation: ${spin} 1.15s cubic-bezier(0.31, 0.63, 0.8, 0.73) infinite;
`;

export default function Loading({ isLoading = true }) {
  return (
    <LoadingWrapper isLoading={isLoading}>
      <ContentWrapper>
        <IndicatorWrapper>
          <Indicator />
        </IndicatorWrapper>
        <Typography size={TypoSize.SH4} color={primary.gray}>
          잠시만 기다려 주세요
        </Typography>
      </ContentWrapper>
    </LoadingWrapper>
  );
}
