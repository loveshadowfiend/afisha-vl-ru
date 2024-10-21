import { MessagesSquare } from "lucide-react";

export default function SupportButton() {
  return (
    <div className="fixed bottom-[20px] right-[20px] rounded-full px-4 py-4 bg-[#f97d41] shadow-2xl flex items-center">
      <MessagesSquare color="white" />
    </div>
  );
}
