import { useState } from "react";

interface FakePlaylistProps {
  id: number;
  description: string;
  sources: string;
  subtitle: string;
  thumb: string;
  title: string;
}

export const useVideoPlayList = (props: {
  initialPlaylist: FakePlaylistProps[];
  hasInitialVideo?: number;
}) => {
  const { initialPlaylist, hasInitialVideo } = props; // initialPlaylist is the first video to play and the playlist it self
  //
  const [initialVideo, setInitialVideo] = useState(hasInitialVideo ?? 0); // initialVideo is the first video to play
  //
  const [playlist, setPlaylist] = useState<FakePlaylistProps[] | any>(
    initialPlaylist
  ); // playlist is the playlist
  //
  const [currentVideo, setCurrentVideo] = useState<FakePlaylistProps>(
    initialPlaylist[initialVideo]
  );

  const nextVideo = () => {
    if (initialVideo < playlist.length - 1) {
      setInitialVideo(initialVideo + 1);
      setCurrentVideo(playlist[initialVideo + 1]);
    }
  };

  const previusVideo = () => {
    if (initialVideo > 0) {
      setInitialVideo(initialVideo - 1);
      setCurrentVideo(playlist[initialVideo - 1]);
    }
  };

  return {
    currentVideo,
    nextVideo,
    previusVideo,
    playlist,
    setPlaylist,
    setInitialVideo,
    initialVideo,
  };
};
