## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 폴더 구조

![alt text](image.png)

- `/app:` 애플리케이션에 필요한 모든 경로, 구성 요소, 논리가 포함되어 있습니다. 주로 여기에서 작업을 진행하게 됩니다.

- `/app/lib:` 재사용 가능한 유틸리티 함수, 데이터 가져오기 함수 등 애플리케이션에서 사용되는 함수가 포함되어 있습니다.

- `/app/ui:` 카드, 테이블, 양식 등 애플리케이션의 모든 UI 구성 요소를 포함합니다. 시간을 절약하기 위해 이러한 구성 요소를 미리 스타일 지정했습니다.

- `/public:`이미지 등 애플리케이션의 모든 정적 자산을 포함합니다.-

- 구성 파일`next.config.js :` 애플리케이션 루트 와 같은 구성 파일도 볼 수 있습니다 . 이러한 파일의 대부분은 .를 사용하여 새 프로젝트를 시작할 때 생성되고 사전 구성됩니다 create-next-app. 이 과정에서는 이를 수정할 필요가 없습니다.

## 부분 렌더링

### 정적 경로 대 동적 경로

오늘날 구축된 대부분의 웹 앱의 경우 전체 애플리케이션 또는 특정 경로 에 대해 정적 및 동적 렌더링 중에서 선택합니다 . 그리고 Next.js에서 경로에서 동적 함수를 호출하면 (예: 데이터베이스 쿼리) 전체 경로가 동적이 된다.

![alt text](image-1.png)

- 구성 <SideNav>요소는 데이터에 의존하지 않으며 사용자에 맞게 개인화되지 않으므로 정적 일 수 있다.
- 구성요소는 <Page>자주 변경되는 데이터에 의존하며 사용자에게 맞게 개인화되므로 동적 일 수 있다 .

### 사용 방법

React의 Suspense를 사용

> Suspense 폴백은 정적 콘텐츠와 함께 초기 HTML 파일에 내장. 빌드 시(또는 재검증 시) 정적 콘텐츠는 정적 셸을 생성하기 위해 사전 렌더링이 된다. 동적 콘텐츠의 렌더링은 사용자가 경로를 요청할 때까지 연기 된다

```
next.config.mjs

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;

```

- 'incremental'값을 사용하면 특정 경로에 PPR을 채택할 수 있다

```
app/dashboard/layout.tsx

import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true;

// ...
```

- Next.js는 경로의 정적 부분을 미리 렌더링하고 사용자가 요청할 때까지 동적 부분을 연기
- Suspense를 사용하여 경로의 동적 부분을 래핑하는 한 Next.js는 경로의 어떤 부분이 정적이고 어떤 부분이 동적인지 알 수 있음
