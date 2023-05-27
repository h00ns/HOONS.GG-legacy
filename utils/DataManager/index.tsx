import { useGetVersionsFetch } from '@hooks/fetch/useVersionFetch';
import { versionState } from '@recoil/version';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

type Props = {
  readonly children: React.ReactNode;
};

export default function DataManager({ children }: Props) {
  const [version, setVersion] = useRecoilState(versionState);
  const { getVersionsData: versionsData } = useGetVersionsFetch();

  // 최신 버전으로 recoil set
  useEffect(() => {
    if (!version && versionsData) {
      const latest = versionsData[0];
      setVersion(latest);
    }
  }, [versionsData, version, setVersion]);

  return <>{children}</>;
}
