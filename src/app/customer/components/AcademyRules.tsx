import React from "react";
import { Academy } from "../customer.type";
import { LuScrollText } from "react-icons/lu";

interface AcademyRulesProps {
  academy: Academy;
}

const AcademyRules: React.FC<AcademyRulesProps> = ({ academy }) => {
  if (academy.academyRules.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <LuScrollText className="h-4 w-4 text-indigo-600" />
        <h3 className="text-sm font-bold text-indigo-900">قوانين الأكاديمية</h3>
      </div>

      <ul className="space-y-2.5">
        {academy.academyRules.map((rule) => (
          <li
            key={rule.id}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-indigo-800"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            <span>{rule.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademyRules;
