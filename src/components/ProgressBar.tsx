import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { questions } from "../constants";

type ProgressBarProps = {
  progress: number;
  next: () => void;
  previous: () => void;
};

const ProgressBar = ({ progress, next, previous }: ProgressBarProps) => {
  const percentage = Math.floor((progress / questions.length) * 100);

  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <div className="bg-primary h-[56px] flex items-center rounded-r-md">
        <button onClick={previous} className="pr-2"><BiChevronDown className="sm:size-8 size-6" /></button>
        <button onClick={next} className="pl-2"><BiChevronUp className="sm:size-8 size-6" /></button>
      </div>

      <div className="relative w-36 sm:w-52 bg-gray-600 px-4 py-2 rounded-l-md h-[56px]">
        <p className="text-sm mb-1 flex justify-between">
          <span>Completed</span>
          <span>{percentage}%</span>
        </p>

        <div className="h-2 bg-gray-400 rounded-full overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-primary transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;