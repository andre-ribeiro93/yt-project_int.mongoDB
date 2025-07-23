import { useContext, useEffect, useState } from "react";
import SearchComponent from "../../components/searchComponent/searchCompIndex";
import { SearchContainer, VideoContainer } from "./searchStyles";
import { SearchContext } from "../../contexts/searchContext";

import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

function Search() {

  interface VideoProps {
    id: {
      videoId: string
    }
    snippet: {
      thumbnails: {
        maxres: {
          url: string
        }
        high: {
          url: string
        }
      }
      title: string,
      publishedAt: string,
      channelTitle: string,
      channelId: string,
      description: string,
    }
    statistics: {
      viewCount: string,
    }
  };

  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [channelImagens, setChannelImagens] = useState<{ [channelId: string]: string }>({});
  const [videoStatistics, setVideoStatistics] = useState<{ [videoStatisc: string]: string }>({});
  const { search } = useContext(SearchContext);

  useEffect(() => {
    load();
  }, [search])

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY!;

  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&regionCode=us&q=${search}&key=${API_KEY}`;

  async function load() {
    try {
      const res = await axios.get(URL);

      const arrayItems = res.data.items
      setVideos(arrayItems);

      const uniqueChannelIds =
        arrayItems.map((video: any) => video.snippet.channelId);

      const channelRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${uniqueChannelIds}&key=${API_KEY}`
      );

      const channelImgMap: { [channelId: string]: string } = {};

      channelRes.data.items.forEach((channel: any) => {
        channelImgMap[channel.id] = channel.snippet.thumbnails.default.url
      });

      setChannelImagens(channelImgMap);

      const uniqueVideoIds =
        arrayItems.map((video: any) => video.id.videoId);

      const videoStatisRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${uniqueVideoIds}&key=${API_KEY}`
      )

      const statisticsMap: { [videoStatistics: string]: string } ={};

      videoStatisRes.data.items.forEach((video: any) => {
        statisticsMap[video.id] = video.statistics?.viewCount ?? '0'
      });

      setVideoStatistics(statisticsMap);

    } catch (error) {
      console.log('Error fetching videos:', error);
    }
  }

  function viewCountFormat (viewCount: number): string {
    const plural = viewCount === 1 ? 'view' : 'views'

    if (viewCount >= 1000000) {
      return `${(viewCount/1000000).toFixed(1).replace('.0', '')}M ${plural}`;
    } else if (viewCount >= 1000) {
      return `${(viewCount/1000).toFixed(0)}K ${plural}`;
    } else {
      return `${viewCount} ${plural}`;
    }
  }

  function publishedAtFormat (publishedAt: string): string {
    return formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
      locale: enUS
    }).replace('about', '');
  }

  return (
    <SearchContainer>

      <VideoContainer>
        {videos.map((video) => (
          <SearchComponent
            thumbnail={
              video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url
            }
            title={video.snippet.title}
            videoDetails={
              `${viewCountFormat(Number(videoStatistics[video.id.videoId]))} • ${publishedAtFormat(video.snippet.publishedAt)}`
            }
            channelImage={channelImagens[video.snippet.channelId]}
            channelName={video.snippet.channelTitle}
            description={video.snippet.description}
            key={video.id.videoId}
          />
        ))}
      </VideoContainer>

    </SearchContainer>
  )
}

export default Search;