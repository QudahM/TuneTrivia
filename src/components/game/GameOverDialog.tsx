import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface GameOverDialogProps {
  open?: boolean;
  onClose?: () => void;
  score?: number;
  totalQuestions?: number;
  onPlayAgain?: () => void;
}

const GameOverDialog = ({
  open = true,
  onClose = () => {},
  score = 8,
  totalQuestions = 10,
  onPlayAgain = () => {},
}: GameOverDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center justify-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Game Over!
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Your Final Score
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">
              {score} / {totalQuestions}
            </p>
            <p className="text-muted-foreground">
              {score === totalQuestions
                ? "Perfect Score! 🎉"
                : score >= totalQuestions / 2
                  ? "Well done! 👏"
                  : "Keep practicing! 💪"}
            </p>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Close
          </Button>
          <Button className="w-full sm:w-auto" onClick={onPlayAgain}>
            Play Again
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverDialog;
