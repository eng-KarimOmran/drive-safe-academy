import { getCustomer } from "../customer.service";
import CustomerHeader from "../components/CustomerHeader";
import AcademyRules from "../components/AcademyRules";
import SubscriptionDetails from "../components/SubscriptionDetails";

interface Props {
  params: Promise<{
    customerId: string;
  }>;
}

export default async function CustomerDetails({ params }: Props) {
  const { customerId } = await params;
  const data = await getCustomer(customerId);

  return (
    <div className="p-6 bg-gray-50" dir="rtl">
      <CustomerHeader customer={data} />

      {data.academy.academyRules.length > 0 && (
        <AcademyRules academy={data.academy} />
      )}

      <SubscriptionDetails subscriptions={data.subscriptions} />
    </div>
  );
}
