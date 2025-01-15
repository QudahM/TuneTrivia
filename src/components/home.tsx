import React, { useState } from "react";
import GameHeader from "./game/GameHeader";
import AudioPlayer from "./game/AudioPlayer";
import CountdownTimer from "./game/CountdownTimer";
import AnswerGrid from "./game/AnswerGrid";
import GameOverDialog from "./game/GameOverDialog";

const Home = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setIsTimerRunning(true);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    }
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    setIsAnswerRevealed(true);
    setIsTimerRunning(false);

    if (answerId === "1") {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleTimerComplete = () => {
    setIsAnswerRevealed(true);
    setIsTimerRunning(false);
    setStreak(0);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setStreak(0);
    setIsPlaying(false);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setIsGameOver(false);
    setIsTimerRunning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-violet-800 relative overflow-hidden">
      {/* Decorative Music Images */}
      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"
        alt="Music Decoration Left"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 object-cover opacity-40 blur-sm rounded-r-3xl"
      />
      <img
        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800"
        alt="Music Decoration Right"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 object-cover opacity-40 blur-sm rounded-l-3xl"
      />

      <GameHeader score={score} streak={streak} />

      <main className="container mx-auto py-8 flex flex-col items-center gap-8 relative z-10">
        <div className="relative">
          <AudioPlayer isPlaying={isPlaying} onPlayPause={handlePlayPause} />

          <div className="absolute -right-16 top-1/2 -translate-y-1/2">
            <CountdownTimer
              isRunning={isTimerRunning}
              onComplete={handleTimerComplete}
            />
          </div>
        </div>

        <AnswerGrid
          selectedAnswer={selectedAnswer}
          onSelect={handleAnswerSelect}
          isRevealed={isAnswerRevealed}
        />

        <GameOverDialog
          open={isGameOver}
          onClose={() => setIsGameOver(false)}
          score={score}
          onPlayAgain={handlePlayAgain}
        />
      </main>
    </div>
  );
};

export default Home;
