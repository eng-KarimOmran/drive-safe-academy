import React from "react";
import { CustomerDetails } from "../customer.type";
import { BiPhone } from "react-icons/bi";
import { LuBuilding2 } from "react-icons/lu";

interface CustomerHeaderProps {
  customer: CustomerDetails;
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 1)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ customer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* الهوية الأساسية */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-bold text-indigo-600 ring-1 ring-indigo-100">
            {getInitials(customer.name)}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {customer.name}
            </h1>
            <a
              href={`tel:${customer.phone}`}
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              dir="ltr"
            >
              <BiPhone className="h-3.5 w-3.5" />
              <span dir="ltr">{customer.phone}</span>
            </a>
          </div>
        </div>

        {/* الأكاديمية */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 self-stretch md:self-auto">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
            <LuBuilding2 className="h-4 w-4 text-indigo-600" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              الأكاديمية
            </div>
            <div className="text-sm font-bold text-gray-800">
              {customer.academy.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
