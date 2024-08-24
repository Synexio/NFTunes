import { BsMusicNoteBeamed } from "react-icons/bs";
import { useAudioPlayerContext } from "../../context/audio-player-context";
import { tracks, Song } from "../../data/tracks";

interface PlayListProps {
  id: number; // Accepting the id prop
}

export const PlayList = ({ id }: PlayListProps) => {
  const { currentTrack, setIsPlaying, setCurrentTrack } =
    useAudioPlayerContext();

  const handleClick = (track: Song) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <ul className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
      {tracks.map((track) => (
        <li
          key={track.id}
          className={`flex items-center gap-3 p-[0.5rem_10px] cursor-pointer ${
            currentTrack.id === track.id ? "bg-[#a66646]" : ""
          }`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick(track);
            }
          }}
          onClick={() => handleClick(track)}
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-sm overflow-hidden">
            {track.thumbnail ? (
              <img
                className="w-full h-full object-cover"
                src={track.thumbnail as string}
                alt="audio avatar"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
                <span className="text-xl text-gray-600">
                  <BsMusicNoteBeamed />
                </span>
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-sm">{track.title}</p>
            <p className="text-sm text-gray-400">{track.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
