import { FaVideo } from "react-icons/fa";

export default function AttendButton({
  handleModalOpen,
  className,
}: {
  className?: string;
  handleModalOpen: () => void;
}) {
  return (
    <>
      <button
        onClick={() => handleModalOpen()}
        className={`flex items-center justify-center gap-x-3 bg-primary text-secondary text-2xl font-cairo font-bold w-full max-w-[960px] py-3 rounded-lg ${className}`}
      >
        <FaVideo /> احضر التدريب المجاني دلوقتي
      </button>
    </>
  );
}
