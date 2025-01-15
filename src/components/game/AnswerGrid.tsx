import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  label: string;
}

interface AnswerGridProps {
  options?: Option[];
  selectedAnswer?: string | null;
  correctAnswer?: string | null;
  onSelect?: (id: string) => void;
  isRevealed?: boolean;
}

const defaultOptions = [
  { id: "1", label: "Jazz" },
  { id: "2", label: "Classical" },
  { id: "3", label: "Rock" },
  { id: "4", label: "Pop" },
  { id: "5", label: "Hip Hop" },
  { id: "6", label: "Country" },
];

const AnswerGrid = ({
  options = defaultOptions,
  selectedAnswer = null,
  correctAnswer = "1",
  onSelect = () => {},
  isRevealed = false,
}: AnswerGridProps) => {
  return (
    <div className="w-full max-w-[800px] h-[300px] bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        {options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = isRevealed && option.id === correctAnswer;
          const isWrong =
            isRevealed && isSelected && option.id !== correctAnswer;

          return (
            <Button
              key={option.id}
              variant="outline"
              className={cn(
                "h-full text-lg font-medium transition-all",
                isSelected && "ring-2 ring-primary",
                isCorrect && "bg-green-100 border-green-500 text-green-700",
                isWrong && "bg-red-100 border-red-500 text-red-700",
              )}
              onClick={() => onSelect(option.id)}
              disabled={isRevealed}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerGrid;
