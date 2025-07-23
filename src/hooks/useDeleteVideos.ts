import { useContext } from "react";
import { VideoContext, type Video } from "../contexts/userContexts/videoContext";


export function useDeleteVideos(video: Video) {

  const { userVideos, deleteVideos, selectedVideos, setSelectedVideos } = useContext(VideoContext);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allVideoIds = userVideos.map((video: Video) => video.video_id);
      setSelectedVideos(allVideoIds);
    } else {
      setSelectedVideos([]);
    }
  };

  const videoId = video.video_id
  const isChecked = selectedVideos.includes(videoId);

  const handleCheckboxSelection = () => {
    if (isChecked) {
      setSelectedVideos((prev: string[]) => prev.filter((id: string) => id !== videoId));
    } else {
      setSelectedVideos((prev: string) => [...prev, videoId]);
    }
  };

  const handleDeleteVideo = async () => {
    if (selectedVideos.length === 0) {
      alert('Select at least one video to delete');
      return;
    }
    for (const videoId of selectedVideos) {
      await deleteVideos(videoId);
    }
    setSelectedVideos([]);
  };

  return {
    isChecked,
    handleSelectAll,
    handleCheckboxSelection,
    handleDeleteVideo,
  }
}
