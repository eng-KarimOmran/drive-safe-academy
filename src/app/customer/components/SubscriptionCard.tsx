import React from "react";

import { Subscription } from "../customer.type";
import StatusBadge from "./StatusBadge";

interface SubscriptionCardProps {
  subscription: Subscription;
  isActive: boolean;
  onClick: (id: string) => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  isActive,
  onClick,
}) => {
  return (
    <button
      key={subscription.id}
      onClick={() => onClick(subscription.id)}
      className={`w-full text-right p-4 rounded-xl transition-all border ${
        isActive
          ? "bg-white border-indigo-500 shadow-md ring-1 ring-indigo-500"
          : "bg-white border-gray-200 hover:border-indigo-300 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="font-bold text-gray-900">
          {subscription.courseName}
        </span>
        <StatusBadge
          type="subscription"
          status={subscription.subscriptionStatus}
        />
      </div>
      <div className="text-xs text-gray-500 space-y-1">
        <div className="flex justify-between">
          <span>عدد الجلسات:</span>
          <span className="font-medium text-gray-700">
            {subscription.totalSessions}
          </span>
        </div>
        <div className="flex justify-between">
          <span>السعر:</span>
          <span className="font-medium text-gray-700">
            {subscription.priceAtBooking} ج.م
          </span>
        </div>
      </div>
    </button>
  );
};

export default SubscriptionCard;
