import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

type Props = {
  readonly children: ReactNode;
};

//유저 페이지 처음 접속시 localStorage에 브라우저 언어와 다른언어를 설정해놓은경우 localStorage를 기준으로 라우팅.
export default function LanguageManager({ children }: Props) {
  // const router = useRouter();
  // const language = getCookie(LANGUAGE) ?? router.locale ?? RecoilLanguage.KO;

  // useEffect(() => {
  //   if (language !== router?.locale) {
  //     router.push(`/${language}${router.asPath}`, `/${language}${router.asPath}`, { locale: language });
  //   }
  // }, []);

  return <>{children}</>;
}
