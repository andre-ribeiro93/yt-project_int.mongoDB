import { 
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

import api from "../../api";
import type { AxiosError } from "axios";
import { LoginContext } from "./loginContext";

export interface Video {
  video_id: string;
  thumbnail: string;
  title: string;
  description: string;
  publishedAt: string;
}

interface VideoContextProps {
  children: ReactNode,
}

export const VideoContext = createContext({} as any);

export const VideoStorage = ({ children }: VideoContextProps) => {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userVideos, setUserVideos] = useState<Video[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const { token, login } = useContext(LoginContext);

  const getVideos = useCallback(async () => {
    if (token) {
      try {
        const { data } = await api.get(
          `/videos/get-videos`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("VIDEOS FETCHED:", data); // 👈 Adicione isso

        setUserVideos(data.videos);

      } catch (error: unknown) {
        const err = error as AxiosError;

        console.error('Error fetching videos!', err.message);
      }
    }
  }, [token]);

  useEffect(() => {
    if (login) {
      getVideos();
    }
  }, [login, getVideos]);


  const createVideos = async (title: string, description: string, thumbnail: string, publishedAt: Date) => {
    try {
      await api.post(
        '/videos/create-video',
        { title, description, thumbnail, publishedAt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Video sent successfully!');
      getVideos();

    } catch (error: unknown) {
      const err = error as AxiosError;

      console.error('Unable to create user!', err.message);
      alert('Unable to upload video. Try again.')

      return false;
    }
  };

  const deleteVideos = async (video_id: string) => {
    try {
      await api.delete(
        `/videos/delete-video/${video_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Selected videos deleted successfully!');
      getVideos();

    } catch (error: unknown) {
      const err = error as AxiosError;

      console.error('Unable to delete videos!', err.message);
      alert('Unable to delete selected videos. Try again.')

      return false;
    }
  }

  useEffect(() => {
    if (!login) {
      setUserVideos([]);
    }
  }, [login]);

  return (
    <VideoContext.Provider value={{
      thumbnail, setThumbnail,
      title, setTitle,
      description, setDescription,
      isModalOpen, setIsModalOpen,
      userVideos,
      getVideos,
      createVideos,
      selectedVideos, setSelectedVideos,
      isDeleteModalOpen, setIsDeleteModalOpen,
      deleteVideos
    }}>

      {children}

    </VideoContext.Provider>
  )
}