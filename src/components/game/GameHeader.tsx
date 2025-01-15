import React from "react";
import { Trophy, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GameHeaderProps {
  score?: number;
  streak?: number;
}

const GameHeader = ({ score = 0, streak = 0 }: GameHeaderProps) => {
  return (
    <div className="w-full h-20 bg-white/80 backdrop-blur-sm border-b shadow-md relative">
      <div className="container mx-auto h-full flex items-center justify-between px-4 relative z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-primary/50 after:to-transparent">
        <h1 className="text-2xl font-bold text-primary">TuneTrivia</h1>

        <div className="flex items-center gap-6">
          {/* Score Display */}
          <Card className="px-4 py-2 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Score</span>
              <span className="font-bold text-lg">{score}</span>
            </div>
          </Card>

          {/* Streak Display */}
          <Card className="px-4 py-2 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Streak</span>
              <span className="font-bold text-lg">{streak}</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
