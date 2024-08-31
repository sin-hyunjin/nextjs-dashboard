import DashboardSkeleton from "@/app/ui/skeletons";

/**
 *
 * loading.tsxSuspense를 기반으로 구축된 특수한 Next.js 파일로, 페이지 콘텐츠가 로드되는 동안 대체 UI로 표시되는 폴백 UI를 생성할 수 있음
 * 정적 이므로 <SideNav>즉시 표시, 사용자는 <SideNav>동적 콘텐츠가 로딩되는 동안 상호작용 가능 .
 * 사용자는 페이지 로딩이 완료될 때까지 기다릴 필요가 없다(이를 중단 가능한 탐색이라고 함).
 */
export default function Loading() {
  return <DashboardSkeleton />;
}
