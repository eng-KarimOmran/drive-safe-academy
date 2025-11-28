import React from "react";
import { MdErrorOutline } from "react-icons/md";

export default function MessageError({error}:{error: string}) {
  return (
    <div className="flex text-sm items-center gap-1 text-red-500">
      <MdErrorOutline />
      <span>{error}</span>
    </div>
  );
}
