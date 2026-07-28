"use client";

import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import WalletMovements from "./WalletMovements";
import StatusBadge from "./StatusBadge";
import { Subscription } from "../customer.type";
import LessonsList from "./LessonsList";
import { CgLock } from "react-icons/cg";
import { BiDumbbell } from "react-icons/bi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { BsInbox } from "react-icons/bs";

interface SubscriptionDetailsClientProps {
  subscriptions: Subscription[];
}

const SubscriptionDetails: React.FC<SubscriptionDetailsClientProps> = ({
  subscriptions,
}) => {
  const [activeSubId, setActiveSubId] = useState<string | null>(
    subscriptions.length > 0 ? subscriptions[0].id : null,
  );

  const activeSubscription = subscriptions.find((s) => s.id === activeSubId);

  const sessionsProgress = activeSubscription
    ? Math.min(
        100,
        Math.round(
          (activeSubscription.lessons.length /
            (activeSubscription.totalSessions || 1)) *
            100,
        ),
      )
    : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
      {/* Sidebar: Subscriptions List */}
      <div className="lg:col-span-4 space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-bold text-gray-800">الاشتراكات</h2>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
            {subscriptions.length}
          </span>
        </div>
        {subscriptions.map((sub) => (
          <SubscriptionCard
            key={sub.id}
            subscription={sub}
            isActive={activeSubId === sub.id}
            onClick={setActiveSubId}
          />
        ))}
      </div>

      {/* Main Content: Subscription Details */}
      <div className="lg:col-span-8">
        {activeSubscription ? (
          <div className="space-y-6">
            {/* Subscription Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">تفاصيل الاشتراك</h3>
                <span className="text-xs text-gray-400" dir="ltr">
                  ID: {activeSubscription.id}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x-0 md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-100">
                <div className="flex flex-col items-center gap-1.5 p-5 text-center">
                  <CgLock className="h-4 w-4 text-indigo-400" />
                  <div className="text-xs text-gray-500">مدة الجلسة</div>
                  <div className="font-bold text-gray-900">
                    {activeSubscription.sessionDurationMinutes} دقيقة
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-5 text-center">
                  <BiDumbbell className="h-4 w-4 text-indigo-400" />
                  <div className="text-xs text-gray-500">نوع التدريب</div>
                  <div className="font-bold text-gray-900">
                    {activeSubscription.trainingTypeAtRegistration === "MANUAL"
                      ? "مانول"
                      : activeSubscription.trainingTypeAtRegistration ===
                          "AUTOMATIC"
                        ? "اتوماتيك"
                        : "مانول و اتوماتيك"}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-5 text-center">
                  <LuCalendarCheck2 className="h-4 w-4 text-indigo-400" />
                  <div className="text-xs text-gray-500">الجلسات</div>
                  <div className="font-bold text-gray-900">
                    {activeSubscription.lessons.length} /{" "}
                    {activeSubscription.totalSessions}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-5 text-center">
                  <div className="text-xs text-gray-500">الحالة</div>
                  <StatusBadge
                    status={activeSubscription.subscriptionStatus}
                    type="subscription"
                  />
                </div>
              </div>

              {/* Sessions progress */}
              <div className="px-6 pb-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{ width: `${sessionsProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Wallet Movements */}
            <WalletMovements
              walletMovements={activeSubscription.walletMovements}
            />

            {/* Lessons List */}
            <LessonsList lessons={activeSubscription.lessons} />
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
            <BsInbox className="h-8 w-8" />
            <span>اختر اشتراكاً لعرض تفاصيله</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionDetails;
