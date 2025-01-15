import React, { useState } from "react";
import { Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AudioPlayerProps {
  audioUrl?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}

const AudioPlayer = ({
  audioUrl = "https://example.com/audio.mp3",
  isPlaying = false,
  onPlayPause = () => {},
}: AudioPlayerProps) => {
  const [localIsPlaying, setLocalIsPlaying] = useState(isPlaying);

  const handlePlayPause = () => {
    setLocalIsPlaying(!localIsPlaying);
    onPlayPause();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-primary">Guess the Genre</h2>
      <Card className="w-[600px] h-[300px] bg-white p-8 flex flex-col items-center justify-center gap-6">
        {/* Play/Pause Button */}
        <Button
          size="lg"
          variant="default"
          className="w-16 h-16 rounded-full flex items-center justify-center bg-primary hover:bg-primary/90"
          onClick={handlePlayPause}
        >
          {localIsPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
          )}
        </Button>

        {/* Waveform Visualization (Mock) */}
        <div className="w-full h-24 bg-slate-100 rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center gap-1">
            {Array.from({ length: 40 }).map((_, index) => (
              <div
                key={index}
                className="w-2 bg-slate-400"
                style={{
                  height: `${Math.random() * 100}%`,
                  opacity: localIsPlaying ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AudioPlayer;
