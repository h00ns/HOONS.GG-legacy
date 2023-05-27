import { useGetChampionsFetch, useGetVersionsFetch } from '@hooks/fetch/useDataFetch';
import { championsState, versionState } from '@recoil/data';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

type Props = {
  readonly children: React.ReactNode;
};

export default function DataManager({ children }: Props) {
  const [version, setVersion] = useRecoilState(versionState);
  const { getVersionsData: versionsData } = useGetVersionsFetch();

  const [champions, setChampions] = useRecoilState(championsState);
  const { getChampionsData: championsData } = useGetChampionsFetch({ version });

  // 최신 버전으로 recoil set
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
  }, [championsData]);

  useEffect(() => {
    console.log(champions);
  }, [champions]);

  return <>{children}</>;
}
