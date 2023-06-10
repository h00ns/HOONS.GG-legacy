
## HOONS.GG

https://hoons.site

Leage of Legend Search Platform

23.05.24 ~ 23.06.29 develop

## Tech Stack

- 코어 : Nextjs, TypeScript
- 상태관리 : React-query, Recoil
- 스타일링: emotion
- CI/CD : Vercel
- 패턴 : Atomic Design Pattern
- 추가 라이브러리 : i18n

## 배포 환경
Vercel을 통해 배포환경을 구축하였습니다.

## 설치 및 실행
1. 상단의 URL에 접속하거나 git clone 명령어를 통해 클론합니다.
2. 클론한 프로젝트 디렉토리에서 yarn install 명령어를 실행합니다.
3. yarn dev 명령어로 개발 서버를 실행합니다.
4. localhost:3000에 접속하여 프로젝트를 확인할 수 있습니다.

## 프로젝트 구조
```
📦HOONS.GG
 ┣ 📂apis
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂lotations
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂match
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂summoner
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜axios.ts
 ┣ 📂components
 ┃ ┣ 📂_atoms
 ┃ ┃ ┣ 📂Badge
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Champion
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Divider
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Icon
 ┃ ┃ ┃ ┣ 📜icons.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Item
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂NextLink
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Rune
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Spell
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂TextInput
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Typography
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂_molecules
 ┃ ┣ 📂_organisms
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📂LanguageBox
 ┃ ┃ ┃ ┃ ┣ 📂LanguageModal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Logo
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂MobileHeader
 ┃ ┃ ┃ ┣ 📂Logo
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂MobileMenu
 ┃ ┃ ┃ ┃ ┣ 📂LanguageNavItem
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📂ItemBox
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂SpellBox
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂_templetes
 ┃ ┃ ┣ 📂ErrorTemplate
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📂Hooks
 ┃ ┃ ┃ ┣ 📂MainSection
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📂Section0
 ┃ ┃ ┃ ┃ ┣ 📂ChampionItem
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂SearchTemplate
 ┃ ┃ ┃ ┣ 📂Content
 ┃ ┃ ┃ ┃ ┣ 📂MatchCardList
 ┃ ┃ ┃ ┃ ┃ ┣ 📂MatchCard
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂ChampionBox
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂KdaBox
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂MatchDetailCard
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂PlayerRow
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂DamageBox
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂MatchInfoBox
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂PlayerBox
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂PlayerItem
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂SummonerInfoCard
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📂TierCardList
 ┃ ┃ ┃ ┃ ┃ ┣ 📂TierCard
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Hooks
 ┃ ┃ ┃ ┃ ┣ 📜useGetGameTime.ts
 ┃ ┃ ┃ ┃ ┣ 📜useGetKdaAvg.ts
 ┃ ┃ ┃ ┃ ┣ 📜useGetPercent.ts
 ┃ ┃ ┃ ┃ ┣ 📜useGetQueueType.ts
 ┃ ┃ ┃ ┃ ┗ 📜useGetWinRate.ts
 ┃ ┃ ┃ ┣ 📂SearchForm
 ┃ ┃ ┃ ┃ ┣ 📂FavoritesBox
 ┃ ┃ ┃ ┃ ┃ ┣ 📂FavoritesUser
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂hocs
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📂DefaultLayouts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜.DS_Store
 ┣ 📂constants
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜Button.ts
 ┃ ┃ ┣ 📜Icon.ts
 ┃ ┃ ┗ 📜Typography.ts
 ┃ ┣ 📂language
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜compiler.ts
 ┃ ┃ ┗ 📜routes.ts
 ┃ ┣ 📂service
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂time
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂customType
 ┃ ┣ 📂champion
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂lotations
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂match
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂summoner
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜useGetRuneIconUrl.ts
 ┃ ┃ ┣ 📜useGetSpellName.ts
 ┃ ┃ ┗ 📜useGetTypoSize.ts
 ┃ ┣ 📂fetch
 ┃ ┃ ┣ 📜useDataFetch.ts
 ┃ ┃ ┣ 📜useLotationsFetch.ts
 ┃ ┃ ┣ 📜useMatchFetch.ts
 ┃ ┃ ┗ 📜useSummonerFetch.ts
 ┃ ┣ 📂interaction
 ┃ ┃ ┣ 📜useCheckScrollToTop.ts
 ┃ ┃ ┣ 📜useHandleOutsideClick.ts
 ┃ ┃ ┗ 📜useInfiniteScroll.ts
 ┃ ┣ 📂responsive
 ┃ ┃ ┗ 📜useIsMobile.ts
 ┃ ┣ 📂service
 ┃ ┃ ┗ 📜useGetChampionDataById.ts
 ┃ ┗ 📜.DS_Store
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📂champions
 ┃ ┃ ┃ ┃ ┗ 📜[version].js
 ┃ ┃ ┃ ┗ 📂version
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂lotations
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂match
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┗ 📜[matchId].js
 ┃ ┃ ┃ ┗ 📜[puuid].js
 ┃ ┃ ┣ 📂summoner
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┗ 📜[id].js
 ┃ ┃ ┃ ┗ 📜[name].js
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜404.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜ArrowDown.svg
 ┃ ┃ ┃ ┣ 📜ArrowUp.svg
 ┃ ┃ ┃ ┣ 📜Close.svg
 ┃ ┃ ┃ ┣ 📜Error.svg
 ┃ ┃ ┃ ┣ 📜Favorite.svg
 ┃ ┃ ┃ ┣ 📜FavoriteEmpty.svg
 ┃ ┃ ┃ ┣ 📜Global.svg
 ┃ ┃ ┃ ┣ 📜Menu.svg
 ┃ ┃ ┃ ┗ 📜Search.svg
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┃ ┣ 📜Github.png
 ┃ ┃ ┃ ┃ ┣ 📜Insta.png
 ┃ ┃ ┃ ┃ ┗ 📜Velog.png
 ┃ ┃ ┃ ┣ 📂tier
 ┃ ┃ ┃ ┃ ┣ 📜BRONZE.png
 ┃ ┃ ┃ ┃ ┣ 📜CHALLENGER.png
 ┃ ┃ ┃ ┃ ┣ 📜DIAMOND.png
 ┃ ┃ ┃ ┃ ┣ 📜GOLD.png
 ┃ ┃ ┃ ┃ ┣ 📜MASTER.png
 ┃ ┃ ┃ ┃ ┣ 📜PLATINUM.png
 ┃ ┃ ┃ ┃ ┣ 📜SILVER.png
 ┃ ┃ ┃ ┃ ┗ 📜UNRANKED.png
 ┃ ┃ ┃ ┣ 📜lol-og.jpeg
 ┃ ┃ ┃ ┗ 📜main-bg.jpeg
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂locales
 ┃ ┃ ┣ 📂en
 ┃ ┃ ┃ ┣ 📜common.json
 ┃ ┃ ┃ ┣ 📜home.json
 ┃ ┃ ┃ ┗ 📜search.json
 ┃ ┃ ┗ 📂ko
 ┃ ┃ ┃ ┣ 📜common.json
 ┃ ┃ ┃ ┣ 📜home.json
 ┃ ┃ ┃ ┗ 📜search.json
 ┃ ┣ 📜.DS_Store
 ┃ ┗ 📜favicon.ico
 ┣ 📂recoil
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂favorites
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜Colors.ts
 ┃ ┣ 📜Radius.ts
 ┃ ┣ 📜Shadow.ts
 ┃ ┗ 📜globals.css
 ┣ 📂utils
 ┃ ┣ 📂DataManager
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜champion.ts
 ┃ ┣ 📜cookie.ts
 ┃ ┣ 📜regex.ts
 ┃ ┣ 📜style.ts
 ┃ ┗ 📜time.ts
 ┣ 📜.babelrc
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜next-env.d.ts
 ┣ 📜next-i18next.config.js
 ┣ 📜next.config.js
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜typing.d.ts
 ┗ 📜yarn.lock
```
 - pages : 페이지
 - components : 컴포넌트 
 - apis : api 
 - hooks : fetch 관련 및 서비스 로직 관련 custom hooks
 - customTypes : api 관련 types
 - constants : 상수
 - recoil : recoil 전역 상태 
 - styles : 스타일 관련 상수
 - utils : 유틸 기능
 - assets : image <br/>
 
 로 폴더를 나눠 프로젝트를 구성하였습니다.

## 화면 구성
PC <br />
![스크린샷 2023-05-29 오후 1 04 54](https://github.com/h00ns/HOONS.GG/assets/97011015/6579749e-2097-4eea-9ff6-c7b3046eb914)

MOBILE <br />
![스크린샷 2023-05-29 오후 1 17 46](https://github.com/h00ns/HOONS.GG/assets/97011015/0922e13b-232a-4356-83be-50b16b4747c5)
