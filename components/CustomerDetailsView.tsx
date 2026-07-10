import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { ICustomerDetails } from "@/type";
import AcademyRulesDialog from "./AcademyRulesDialog";
import { enumTranslations } from "@/lib/customer-labels";

import { FiUser, FiPhone, FiCreditCard, FiMonitor } from "react-icons/fi";
import Image from "next/image";

interface CustomerDetailsViewProps {
  customer: ICustomerDetails;
}

const formatDateTime = (dateString: string | Date) => {
  if (!dateString) return "-";
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export function CustomerDetailsView({ customer }: CustomerDetailsViewProps) {
  return (
    <div className="min-h-dvh p-4 md:p-8 flex flex-col gap-8">
      <AcademyRulesDialog academy={customer.academy} />

      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-card text-card-foreground shadow-sm border rounded-xl p-6 gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/favicon.ico"
            alt="logo drive safe"
            width={64}
            height={64}
            className="object-contain bg-white p-2 rounded-full border shadow-sm"
            unoptimized
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground font-medium">
              نظام الإدارة
            </span>
            <h1 className="text-2xl font-bold text-primary">
              {customer.academy?.name || "اسم الأكاديمية"}
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-muted/30 p-4 rounded-xl border flex-1 lg:max-w-sm w-full">
          <div className="flex items-center gap-3 text-xl font-bold">
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <FiUser size={18} />
            </div>
            <span>{customer.name}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="p-2 bg-secondary/20 rounded-full">
              <FiPhone size={18} />
            </div>
            <span dir="ltr" className="text-right font-medium text-lg">
              {customer.phone}
            </span>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-bold px-2">الاشتراكات والدورات</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-card shadow-sm border rounded-xl px-4"
        >
          {customer.subscriptions.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-right">
                  <span className="font-semibold text-lg">
                    {item.courseName}
                  </span>
                  <div className="flex items-center gap-4 text-sm font-normal text-muted-foreground">
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      الحالة: {enumTranslations[item.subscriptionStatus]}
                    </span>
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      إجمالي الجلسات: {item.totalSessions}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8 pt-4 pb-6">
                {/* جدول حركات المحفظة */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <FiCreditCard className="text-primary" />
                    حركات المحفظة
                  </h3>
                  <div className="border rounded-md overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="text-right font-bold">
                            المبلغ
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            الحالة
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            طريقة الدفع
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            نوع المعاملة
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {item.walletMovements.map((w) => (
                          <TableRow key={w.id}>
                            <TableCell className="font-medium">
                              {w.amount}
                            </TableCell>
                            <TableCell>
                              {enumTranslations[w.walletMovementStatus]}
                            </TableCell>
                            <TableCell>
                              {enumTranslations[w.paymentMethod]}
                            </TableCell>
                            <TableCell>
                              {enumTranslations[w.transactionType]}
                            </TableCell>
                          </TableRow>
                        ))}
                        {item.walletMovements.length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              className="text-center text-muted-foreground py-4"
                            >
                              لا توجد حركات مالية
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* جدول الدروس */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <FiMonitor className="text-primary" />
                    الحصص
                  </h3>
                  <div className="border rounded-md overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="text-right font-bold">
                            وقت البدء
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            وقت الانتهاء
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            الحالة
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            البث
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            المدة (دقائق)
                          </TableHead>
                          <TableHead className="text-right font-bold">
                            بيانات المدرب
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {item.lessons.map((l) => (
                          <TableRow key={l.id}>
                            <TableCell>{formatDateTime(l.startTime)}</TableCell>
                            <TableCell>{formatDateTime(l.endTime)}</TableCell>
                            <TableCell>
                              {enumTranslations[l.lessonStatus]}
                            </TableCell>
                            <TableCell>
                              {enumTranslations[l.transmission]}
                            </TableCell>
                            <TableCell>{l.sessionDurationMinutes}</TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {l.jobProfile.user.name}
                                </span>
                                <span
                                  className="text-xs text-muted-foreground"
                                  dir="ltr text-right"
                                >
                                  {l.jobProfile.user.phone}
                                </span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                        {item.lessons.length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={6}
                              className="text-center text-muted-foreground py-4"
                            >
                              لا توجد دروس مسجلة
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
