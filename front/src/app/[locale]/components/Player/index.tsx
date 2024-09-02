import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as C from "./styles"; // Ensure you import your styles
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RandomMusicsTrue,
  RandomMusicsFalse,
  VolumeOff,
  VolumeOn,
} from "../../svgs"; // Import your SVG components

type Props = {
  _id: string;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
};

interface Music {
  _id: string;
  name: string;
  author: string;
  genre: string;
  audio: string;
  album_img: string;
  tokenId: number;
}

export const Player = ({
  _id,
  setId,
  setIsFull,
  isFull,
  windowWidth,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [musics, setMusics] = useState<Music[]>([]);
  const api = process.env.NEXT_PUBLIC_API_URL;

  const audioTag = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number>(0);

  // Fetch music data
  useEffect(() => {
    const fetchMusics = async () => {
      if (_id) {
        try {
          const response = await axios.get(`${api}/title/${_id}`);
          setMusics([response.data]); // Wrap in an array if single music is returned
        } catch (err) {
          console.error(err);
          toast.error("Failed to fetch music data");
        }
      }
    };

    fetchMusics();
  }, [_id, api]);

  // Play or pause music
  useEffect(() => {
    if (_id && audioTag.current) {
      if (isPlaying) {
        audioTag.current.volume = volume;
        audioTag.current.muted = isMuted;
        audioTag.current.play();

        const interval = setInterval(() => {
          const seconds = Math.floor(audioTag.current.duration);
          setDuration(seconds);
          progressBar.current.max = seconds;
        }, 1000);

        const endInterval = setInterval(() => {
          if (audioTag.current.currentTime === audioTag.current.duration) {
            isRandom ? skipRandom() : skipForward();
          }
        }, 1100);

        return () => {
          clearInterval(interval);
          clearInterval(endInterval);
        };
      } else {
        audioTag.current.pause();
      }
    }
  }, [isPlaying, volume, isMuted, _id, isRandom]);

  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const skipForward = () => {
    if (_id === "") {
      alert("Choose a song!");
    } else if (isRandom) {
      skipRandom();
    } else {
      const idNum = parseInt(_id);
      const newId = idNum + 1 <= musics.length ? idNum + 1 : 1;
      setId(newId.toString());
    }
  };

  const skipRandom = () => {
    const randomNum = Math.floor(Math.random() * musics.length) + 1;
    setId(randomNum.toString());
  };

  const skipBack = () => {
    const idNum = parseInt(_id);
    const newId = idNum - 1 >= 1 ? idNum - 1 : musics.length;
    setId(newId.toString());
  };

  const changeRange = () => {
    if (audioTag.current) {
      audioTag.current.currentTime = Number(progressBar.current.value);
    }
  };

  const handleMusicClick = (music: Music) => {
    setId(music._id); // Set the current music ID
    setIsPlaying(true); // Set playing state to true
    audioTag.current?.play(); // Play the music
  };

  return (
    <C.Container isFull={isFull}>
      <div className="musicDiv">
        {Array.isArray(musics) && musics.length > 0 ? (
          musics.map((music) => (
            <div
              onClick={() => handleMusicClick(music)} // Play music on click
              className="music"
              key={music._id}
            >
              {!isFull ? (
                <>
                  <img src={music.album_img} alt={`${music.name} album`} />
                  <div>
                    <h1>{music.name}</h1>
                    <h3>{music.author}</h3>
                  </div>
                </>
              ) : null}
              <audio
                src={music.audio}
                ref={audioTag}
                onLoadedMetadata={() => setDuration(audioTag.current?.duration)}
              />
            </div>
          ))
        ) : (
          <p>No music available</p>
        )}
      </div>

      <div className="player">
        <div className="inputButtons">
          {windowWidth >= 830 || isFull ? (
            <div className="progressBar">
              <p className="PcurrentTime">{calculateDuration(currentTime)}</p>
              <input
                type="range"
                className="currentProgress"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
              <p className="Pduration">
                {duration ? calculateDuration(duration) : "00:00"}
              </p>
            </div>
          ) : null}
          <div className="buttons">
            {windowWidth >= 830 || isFull ? (
              <button
                onClick={() => setIsRandom(!isRandom)}
                className="randomMusicsButton"
              >
                {isRandom ? <RandomMusicsTrue /> : <RandomMusicsFalse />}
              </button>
            ) : null}
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

      {windowWidth > 825 && (
        <div className="volumeControls">
          <button className="volumeButton" onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <VolumeOff /> : <VolumeOn />}
          </button>
          <input
            type="range"
            step="0.01"
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (audioTag.current) {
                audioTag.current.volume = parseFloat(e.target.value);
              }
            }}
            value={volume}
            max="1"
            min="0"
          />
        </div>
      )}
    </C.Container>
  );
};
