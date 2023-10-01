"use client";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useClipboard } from "use-clipboard-copy";

const Copyer = ({ input }) => {
  const clipboard = useClipboard();

  const handleClick = () => {
    console.log(input);
    clipboard.copy(input);
    toast.success("Copied To ClipBoard");
  };

  return (
    <button
      className="p-1 border rounded-md ml-2 text-gray-500 hover:bg-gray-100"
      onClick={handleClick}>
      <Copy className={"w-4 h-4"} />
    </button>
  );
};

export default Copyer;
