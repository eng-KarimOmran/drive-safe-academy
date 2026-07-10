import { CustomerDetailsView } from "@/components/CustomerDetailsView";
import { getCustomer } from "@/service";

interface Props {
  params: Promise<{
    customerId: string;
  }>;
}

export default async function CustomerDetails({ params }: Props) {
  const { customerId } = await params;
  const data = await getCustomer(customerId);

  return <CustomerDetailsView customer={data} />;
}