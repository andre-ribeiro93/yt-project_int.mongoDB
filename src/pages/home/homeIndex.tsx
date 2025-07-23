import { useContext, useEffect, useState } from "react";
import Categories from "../../components/categories/categoriesIndex";
import VideoComponent from "../../components/videoComponent/videoCompIndex";
import ShortsComponent from "../../components/shortsComponent/shortsCompIndex";
import { HomeContainer, VideoContainer, ShortsContainer, TitleContainer, TitleImg, ButtonContainer, ButtonIcon, TitleContent } from "./homeStyles";
import { CategoryContext } from "../../contexts/categoriesContext";

import axios from "axios";

import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale"

import { parse as parseDuration } from "iso8601-duration";

import ShortsIcon from "../../assets/shorts.png";
import DotsIcon from "../../assets/dots.png";
import useWindowWidth from "../../hooks/useWindowWidth";


function Home() {

  interface VideoProps {
    id: string,
    snippet: {
      title: string,
      thumbnails: {
        default: {
          url: string,
        }
        maxres: {
          url: string,
          width: string,
          height: string,
        }
        high: {
          url: string,
          width: string,
          height: string,
        }
      }
      channelTitle: string,
      publishedAt: string,
      channelId: string,
    }
    contentDetails: {
      duration: string,
    }
    statistics: {
      viewCount: string,
    }
  };

  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [shorts, setShorts] = useState<VideoProps[]>([]);
  const [channelImages, setChannelImages] = useState<{ [channelId: string]: string }>({});
  const { categoryId } = useContext(CategoryContext);
  const width = useWindowWidth();

  const getVisibleVideos = (): VideoProps[] => {
    if (width <= 580) return videos.slice(0, 1);
    if (width <= 834) return videos.slice(0, 2);
    return videos;
  };
  const getVisibleShorts = (): VideoProps[] => {
    if (width <= 580) return shorts.slice(0, 2);
    if (width <= 834) return shorts.slice(0, 3);
    return shorts;
  };

  const visibleVideos = getVisibleVideos();
  const visibleShorts = getVisibleShorts();

  useEffect(() => {
    load();
  }, [categoryId])

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY!;

  const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&hl=en_US&maxResults=3&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

  async function load() {
    try {
      setVideos([]);
      setShorts([]);
      setChannelImages({});

      const res = await axios.get(URL);

      const arrayItems = res.data.items
      setVideos(arrayItems);

      const uniqueChannelIds = arrayItems.map((video: VideoProps) => video.snippet.channelId);

      const channelsRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${uniqueChannelIds}&key=${API_KEY}`
      );

      const channelImgMap: { [channelId: string]: string } = {};

      channelsRes.data.items.forEach((channel: VideoProps) => {
        channelImgMap[channel.id] = channel.snippet.thumbnails.default.url;
      });

      setChannelImages(channelImgMap);


      const searchRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoDuration=short&regionCode=US&q=shorts${categoryId !== '0' ? `&videoCategoryId=${categoryId}` : ''}&key=${API_KEY}`
      );
      const shortVideosIds = searchRes.data.items.map((video: any) => video.id.videoId);

      if (shortVideosIds.length > 0) {
        const idsParam = shortVideosIds.join(',');
        const shortDetailsRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${idsParam}&key=${API_KEY}`
        );

        const shortVideos = shortDetailsRes.data.items;

        const isShortEnough = shortVideos.filter((video: VideoProps) => {
          const durationSec = durationFormat(video.contentDetails.duration);
          return durationSec <= 180;
        });

        setShorts(isShortEnough);
      }

    } catch (error) {
      console.log(error);
    }
  }

  function viewCountFormat(viewCount: number): string {
    const plural = viewCount === 1 ? 'view' : 'views'

    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1).replace('.0', '')}M ${plural}`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)}K ${plural}`;
    } else {
      return `${viewCount} ${plural}`;
    }
  }

  function publishedAtFormat(publishedAt: string): string {
    return formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
      locale: enUS
    }).replace('about', '');
  }

  function durationFormat(isoDuration: string): number {
    const duration = parseDuration(isoDuration);
    return (
      ((duration.hours || 0) * 3600) +
      ((duration.minutes || 0) * 60) +
      (duration.seconds || 0)
    );
  }

  return (
    <HomeContainer>

      <Categories />

      <VideoContainer>
        {visibleVideos.map((video) => (
          <VideoComponent
            thumbnail={
              video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url
            }
            channelImage={channelImages[video.snippet.channelId]}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            videoDetails={
              `${viewCountFormat(Number(video.statistics.viewCount))} • ${publishedAtFormat(video.snippet.publishedAt)}`
            }
            key={video.id}
          />
        ))}
      </VideoContainer>

      <TitleContainer>
        <TitleContent>
          <TitleImg alt='Shorts icon' src={ShortsIcon} />
          <span>Shorts</span>
        </TitleContent>

        <ButtonContainer>
          <ButtonIcon alt='Video Menu Icon' src={DotsIcon} />
        </ButtonContainer>
      </TitleContainer>

      <ShortsContainer>
        {visibleShorts.map((video) => (
          <ShortsComponent
            thumbnail={
              video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url
            }
            title={video.snippet.title}
            videoDetails={
              `${viewCountFormat(Number(video.statistics.viewCount))}`
            }
            key={video.id}
          />
        ))}
      </ShortsContainer>

    </HomeContainer>
  )
}

export default Home;