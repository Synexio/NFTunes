"use client";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";

import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControl";
import { PlayList } from "./Playlist";
import { TrackInfo } from "./TrackInfo";
import { tracks } from "../../data/tracks"; // Import tracks

export const PlayerAudio = ({ id }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const currentTrack = tracks.find((track) => track.id === id); // Find the current track by id

  return (
    <div>
      <div className="min-h-8 bg-[#2e2d2d] flex flex-col gap-9 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo track={currentTrack} />{" "}
        {/* Pass currentTrack to TrackInfo */}
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1">
          <Controls />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <RiMenuAddLine />
          </button>
        </div>
      </div>

      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          openDrawer ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
          <PlayList id={id} /> {/* Pass the id prop */}
        </div>
      </div>
    </div>
  );
};

export default PlayerAudio;
