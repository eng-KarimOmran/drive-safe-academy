import React from "react";
import {
  LessonStatus,
  SubscriptionStatus,
  WalletMovementStatus,
} from "../customer.type";

type AllStatuses = SubscriptionStatus | WalletMovementStatus | LessonStatus;

interface StatusBadgeProps {
  status: AllStatuses;
  type: "subscription" | "wallet" | "lesson";
}

const statusMaps = {
  subscription: {
    ACTIVE: { label: "نشط", className: "bg-green-100 text-green-700" },
    PENDING_DEPOSIT: {
      label: "في انتظار دفع المقدم",
      className: "bg-yellow-100 text-yellow-700",
    },
    PENDING_FIRST_SESSION: {
      label: "في انتظار أول حصة",
      className: "bg-blue-100 text-blue-700",
    },
    GRACE_PERIOD: {
      label: "فترة سماح",
      className: "bg-orange-100 text-orange-700",
    },
    SUSPENDED: { label: "موقوف", className: "bg-red-100 text-red-700" },
    CANCELED: { label: "ملغي", className: "bg-gray-200 text-gray-700" },
    COMPLETED: { label: "مكتمل", className: "bg-primary/10 text-primary" },
    FULLY_BOOKED: {
      label: "مكتمل الحجز",
      className: "bg-purple-100 text-purple-700",
    },
  },
  wallet: {
    PENDING: { label: "معلق", className: "bg-blue-100 text-blue-700" },
    APPROVED: { label: "موافق عليه", className: "bg-green-100 text-green-700" },
    REJECTED: { label: "مرفوض", className: "bg-red-100 text-red-700" },
  },
  lesson: {
    SCHEDULED: { label: "مجدولة", className: "bg-blue-100 text-blue-700" },
    COMPLETED: { label: "مكتملة", className: "bg-green-100 text-green-700" },
    CANCELED: { label: "ملغاة", className: "bg-red-100 text-red-700" },
    CANCELED_CHARGED: {
      label: "ملغاة (مع خصم)",
      className: "bg-red-200 text-red-800",
    },
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  const map = statusMaps[type] as Record<
    string,
    { label: string; className: string }
  >;
  const item = map[status];

  if (!item) {
    return null;
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${item.className}`}
    >
      {item.label}
    </span>
  );
};

export default StatusBadge;
