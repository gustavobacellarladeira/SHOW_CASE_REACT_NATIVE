import { useEffect, useState } from "react";

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
  const [playlistIndex, setPlaylistIndex] = useState(1);
  const [playlistLength, setPlaylistLength] = useState(initialPlaylist.length);

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

  // para fazer o looping da playlist, esses dopios useEffects são necessários
  useEffect(() => {
    playlist.push(initialPlaylist[0]);
    setPlaylist(playlist);
    setPlaylistLength(playlist.length);
  }, []);

  useEffect(() => {
    // quando chegar no final da playlist, volta para o inicio
    if (playlistIndex === playlistLength) {
      setPlaylistIndex(1);
      setInitialVideo(0);
      setCurrentVideo(playlist[0]);
    }
  }, [initialVideo, playlist]);
  // -------------

  /**
   * @description: muda o video atual
   * @memberof useVideoPlayList
   *
   */
  const nextVideo = () => {
    if (initialVideo < playlist.length - 1) {
      setInitialVideo(initialVideo + 1);
      setCurrentVideo(playlist[initialVideo + 1]);
      setPlaylistIndex(playlistIndex + 1);
    }
  };

  /**
   *@description: muda o video atual para o anterior
   *@memberof useVideoPlayList

   */
  const previusVideo = () => {
    if (initialVideo > 0) {
      setInitialVideo(initialVideo - 1);
      setCurrentVideo(playlist[initialVideo - 1]);
      setPlaylistIndex(playlistIndex - 1);
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
