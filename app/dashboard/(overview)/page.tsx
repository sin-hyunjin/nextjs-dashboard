import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "@/app/lib/data";
// 페이지는 비동기 구성 요소이며. 이를 통해 데이터를 가져오는 데 사용할 수 있음 await.
export default async function Page() {
  /*데이터 페칭의 경우, 각 요청은 이전 요청이 데이터를 반환한 후에만 시작할 수 있다.
    예를 들어, 먼저 사용자의 ID와 프로필 정보를 가져오고 싶을 수 있습니다. ID를 얻으면 친구 목록을 가져올 수 있다. 
    이 경우 각 요청은 이전 요청에서 반환된 데이터에 따라 달라진다.
    하지만 이러한 행동은 의도치 않은 것일 수도 있고 성능에 영향을 미칠 수도 있다.

    => 모든 데이터 요청을 동시에, 즉 병렬로 시작하는 것 Promise.all()fetchCardData() 를 사용
 */
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
