import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true; // 초기 로딩 성능 개선을 위한 정적 부분을 미리 렌더링하고 사용자가 요청할 때까지 동적 부분을 연기

type Props = {
  children: React.ReactNode;
};
/* 구성 요소는 prop <Layout />을 받습니다 children. 이 자식은 페이지 또는 다른 레이아웃일 수 있습니다. 
   내부 페이지에 있는 자식들은 자동으로 중첩된다. */
export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
