import React from "react";
import { Progress } from "../ui/progress";

interface CountdownTimerProps {
  duration?: number; // Duration in seconds
  onComplete?: () => void;
  isRunning?: boolean;
}

const CountdownTimer = ({
  duration = 15,
  onComplete = () => {},
  isRunning = true,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = React.useState(duration);
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prevTime - 1;
      });

      setProgress((prevProgress) => {
        const newProgress = (timeLeft / duration) * 100;
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, duration, onComplete, timeLeft]);

  return (
    <div className="w-[120px] h-[120px] bg-white rounded-full p-2 flex flex-col items-center justify-center shadow-lg">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Progress
            value={progress}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-orange-500">
            {Math.max(0, timeLeft)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
