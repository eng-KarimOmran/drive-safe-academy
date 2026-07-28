import React from "react";
import StatusBadge from "./StatusBadge";
import { WalletMovement } from "../customer.type";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";

interface WalletMovementsProps {
  walletMovements: WalletMovement[];
}

const isCredit = (type: WalletMovement["transactionType"]) =>
  type === "CUSTOMER_PAYMENT";

const WalletMovements: React.FC<WalletMovementsProps> = ({
  walletMovements,
}) => {
  const visibleMovements = walletMovements.filter(
    (move) => move.transactionType !== "SUBSCRIPTION_CREATED",
  );

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      dir="rtl"
    >
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
        <BiWallet className="h-4 w-4 text-gray-400" />
        <h3 className="font-bold text-gray-800">الحركات المالية</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 font-medium">التاريخ</th>
              <th className="px-6 py-3 font-medium">النوع</th>
              <th className="px-6 py-3 font-medium">المبلغ</th>
              <th className="px-6 py-3 font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {visibleMovements.map((move) => {
              const credit = isCredit(move.transactionType);
              return (
                <tr key={move.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600" dir="ltr">
                    {new Date(move.createdAt).toLocaleDateString("ar-EG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900"></div>
                    <div className="text-xs text-gray-400">
                      {move.paymentMethod === "MONETARY" ? "نقدي" : "الكتروني"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`flex items-center gap-1 font-bold ${
                        credit ? "text-emerald-600" : "text-amber-600"
                      }`}
                    >
                      {credit ? (
                        <BsArrowDownLeft className="h-3.5 w-3.5" />
                      ) : (
                        <BsArrowUpRight className="h-3.5 w-3.5" />
                      )}
                      <span dir="ltr">
                        {credit ? "+" : "-"}
                        {move.amount.toLocaleString()}
                      </span>
                      <span className="font-normal text-gray-400">ج.م</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge
                      status={move.walletMovementStatus}
                      type="wallet"
                    />
                  </td>
                </tr>
              );
            })}
            {visibleMovements.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-10">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <BiWallet className="h-6 w-6" />
                    <span>لا توجد حركات مالية مسجلة</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletMovements;
