import { useGetChampionsFetch, useGetVersionsFetch } from '@hooks/fetch/useDataFetch';
import { championsState, versionState } from '@recoil/data';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

type Props = {
  readonly children: React.ReactNode;
};

/**
 *  버전 리스트 가져와서 최신 버전 set
 *  set한 최신 버전을 기반으로 최신 챔피언 데이터 set !
 */
export default function DataManager({ children }: Props) {
  const [version, setVersion] = useRecoilState(versionState);
  const { getVersionsData: versionsData } = useGetVersionsFetch();

  const [champions, setChampions] = useRecoilState(championsState);
  const { getChampionsData: championsData } = useGetChampionsFetch({ version });

  useEffect(() => {
    if (!version && versionsData) {
      const latest = versionsData[0];
      setVersion(latest);
    }
  }, [versionsData, version, setVersion]);

  useEffect(() => {
    if (!Object.keys(champions).length && championsData) {
      setChampions(championsData);
    }
  }, [championsData, champions, setChampions]);

  return <>{children}</>;
}
