import React from "react";
import { Lesson } from "../customer.type";
import StatusBadge from "./StatusBadge";
import { LuCalendarX2 } from "react-icons/lu";
import { CgLock } from "react-icons/cg";
import { BiMapPin, BiWallet } from "react-icons/bi";

interface LessonsListProps {
  lessons: Lesson[];
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("ar-EG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    numberingSystem: "latn",
  });

const formatTime = (date: string) =>
  new Date(date).toLocaleTimeString("ar-EG", {
    hour: "numeric",
    minute: "2-digit",
    numberingSystem: "latn",
  });

const LessonsList: React.FC<LessonsListProps> = ({ lessons }) => {
  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-gray-800">الجلسات والدروس</h3>
        {lessons.length > 0 && (
          <span className="text-xs font-medium text-gray-400">
            {lessons.length} جلسة
          </span>
        )}
      </div>

      {lessons.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-14 px-6 text-center">
          <div className="bg-gray-50 p-3 rounded-full text-gray-300">
            <LuCalendarX2 size={28} strokeWidth={1.5} />
          </div>
          <p className="text-sm text-gray-400">لا توجد جلسات مجدولة بعد</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/80 transition-colors focus-within:bg-gray-50"
            >
              {/* Duration */}
              <div className="flex flex-col items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl w-16 h-16 shrink-0">
                <span className="text-lg font-bold leading-none">
                  {lesson.sessionDurationMinutes}
                </span>
                <span className="text-[10px] text-indigo-400 mt-1">دقيقة</span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">
                      {lesson.jobProfile?.user?.name ?? "مدرب غير معروف"}
                    </h4>
                    <p className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                      <CgLock size={12} />
                      <span>
                        {formatDate(lesson.startTime)} ·{" "}
                        {formatTime(lesson.startTime)}
                      </span>
                    </p>
                  </div>
                  <StatusBadge status={lesson.lessonStatus} type="lesson" />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BiMapPin size={13} className="text-gray-400" />
                    {lesson.transmission === "AUTOMATIC" ? "اتوماتيك" : "مانول"}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <BiWallet size={13} className="text-gray-400" />
                    {lesson.expectedPaymentAmount.toLocaleString("ar-EG", {
                      numberingSystem: "latn",
                    })}{" "}
                    ج.م
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonsList;