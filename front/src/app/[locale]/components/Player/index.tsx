import * as C from "./styles";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  VolumeOff,
  VolumeOn,
} from "../../svgs";
import { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
  isPlaying: boolean; // Add isPlaying to Props
  setIsPlaying: (e: boolean) => void; // Add setIsPlaying to Props
  musics: any[]; // Accept the music data array
};

export const Player = ({
  id,
  setId,
  setIsFull,
  isFull,
  windowWidth,
  isPlaying,
  setIsPlaying,
  musics,
}: Props) => {
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioTag = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // Function to calculate duration from seconds to mm:ss format
  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${newMinutes}:${newSeconds}`;
  };

  useEffect(() => {
    const audioElement = audioTag.current;

    if (audioElement) {
      audioElement.volume = isMuted ? 0 : volume; // Set volume based on mute state

      if (isPlaying) {
        audioElement.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioElement.pause();
        cancelAnimationFrame(animationRef.current!);
      }

      // Update duration every second
      const interval = setInterval(() => {
        if (audioElement.duration) {
          setDuration(audioElement.duration);
          if (progressBar.current) {
            progressBar.current.max = audioElement.duration.toString();
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        cancelAnimationFrame(animationRef.current!);
      };
    }
  }, [id, isPlaying, volume, isMuted]);

  const whilePlaying = () => {
    if (audioTag.current) {
      progressBar.current!.value = audioTag.current.currentTime.toString();
      setCurrentTime(audioTag.current.currentTime);
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (audioTag.current && progressBar.current) {
      audioTag.current.currentTime = Number(progressBar.current.value);
      setCurrentTime(audioTag.current.currentTime);
    }
  };

  const skipForward = () => {
    const currentIndex = musics.findIndex((music) => music.id === id);
    const nextIndex = (currentIndex + 1) % musics.length; // Loop back to start
    setId(musics[nextIndex].id);
  };

  const skipBack = () => {
    const currentIndex = musics.findIndex((music) => music.id === id);
    const prevIndex = (currentIndex - 1 + musics.length) % musics.length; // Loop back to end
    setId(musics[prevIndex].id);
  };

  return (
    <C.Container isFull={isFull}>
      <div className="musicDiv">
        {musics.map((music) =>
          id === music.id ? (
            <div
              onClick={() => setIsFull(windowWidth <= 820 && !isFull)}
              className="music"
              key={music.id}
            >
              <img src={music.album_img} alt={music.name} />
              <div>
                <h1>{music.name}</h1>
                <h3>{music.author}</h3>
              </div>
              <audio ref={audioTag} src={music.audio} />
            </div>
          ) : null
        )}
      </div>
      <div className="player">
        <div className="inputButtons">
          <div className="progressBar">
            <p className="PcurrentTime">{calculateDuration(currentTime)}</p>
            <input
              type="range"
              className="currentProgress"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
            <p className="Pduration">{calculateDuration(duration)}</p>
          </div>
          <div className="buttons">
            <button onClick={skipBack}>
              <SkipBack />
            </button>
            <button
              className="playPause"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button onClick={skipForward}>
              <SkipForward />
            </button>
          </div>
        </div>
      </div>

      <div className="volumeControl">
        <button className="volumeButton" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <VolumeOff /> : <VolumeOn />}
        </button>
        <input
          type="range"
          step="0.01"
          onChange={(e) => setVolume(Number(e.target.value))}
          value={volume}
          max="1"
          min="0"
        />
      </div>
    </C.Container>
  );
};
