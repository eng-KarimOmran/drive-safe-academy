import { IAcademy } from "@/type";

interface AcademyRulesDialogProps {
  academy: IAcademy;
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AcademyRulesDialog({
  academy,
}: AcademyRulesDialogProps) {
  const { name, academyRules } = academy;

  return (
    <Dialog defaultOpen>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="text-center">شروط وقواعد {name}</DialogTitle>
          <DialogDescription className="text-center">
            برجاء قراءة القواعد التالية كاملة والموافقة عليها للمتابعة
          </DialogDescription>
        </DialogHeader>
        <ol className="space-y-3 text-sm leading-relaxed">
          {academyRules.map((r, i) => (
            <li key={r.id} className="flex gap-2">
              <span className="shrink-0 font-medium text-muted-foreground">
                {i + 1}.
              </span>
              <span>{r.content}</span>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  );
}
