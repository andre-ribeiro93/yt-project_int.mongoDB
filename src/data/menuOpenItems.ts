import HomeIcon from "../assets/home.png";
import ShortsIcon from "../assets/shorts-bw.png";
import SubscriptionsIcon from "../assets/subscriptions.png";
import YTMusicIcon from "../assets/yt-music-bw.png";

import ArrowIcon from "../assets/arrow.png";
import HistoryIcon from "../assets/history.png";
import PlaylistIcon from "../assets/playlist.png";
import VideosIcon from "../assets/video.png";
import WLIcon from "../assets/wl-clock.png"
import LikeIcon from "../assets/like.png";
import DownloadIcon from "../assets/download.png";

import YT1Icon from "../assets/youtubers/yt1.png";
import YT2Icon from "../assets/youtubers/yt2.png";
import YT3Icon from "../assets/youtubers/yt3.png";
import YT4Icon from "../assets/youtubers/yt4.png";
import YT5Icon from "../assets/youtubers/yt5.png";
import YT6Icon from "../assets/youtubers/yt6.png";

import TrandingIcon from "../assets/trending.png";
import MusicIcon from "../assets/music.png";
import MoviesIcon from "../assets/movie.png";
import LiveIcon from "../assets/live.png";
import GamingIcon from "../assets/gaming.png";
import NewsIcon from "../assets/news.png";
import SportsIcon from "../assets/sports.png";
import CoursesIcon from "../assets/courses.png";
import PodcastsIcon from "../assets/podcast.png";

import YTStudioIcon from "../assets/yt-studio.png";
import YTMusicRedIcon from "../assets/yt-music.png";
import YTKidsIcon from "../assets/yt-kids.png";

import SettingsIcon from "../assets/setting.png";
import ReportIcon from "../assets/report-flag.png";
import HelpIcon from "../assets/help.png";
import FeedbackIcon from "../assets/feedback.png";

export const menuOpenItems = [
  {
    title: null,
    titleButton: null,
    items: [
      { icon: HomeIcon, name: 'Home', link: '/' },
      { icon: ShortsIcon, name: 'Shorts', link: '' },
      { icon: SubscriptionsIcon, name: 'Subscriptions', link: '' },
      { icon: YTMusicIcon, name: 'YouTube Music', link: '' },
    ]
  },

  {
    divider: true,
  },

  {
    title: null,
    titleButton: { icon: ArrowIcon, name: 'You', link: '' },
    items: [
      { icon: HistoryIcon, name: 'History', link: '' },
      { icon: PlaylistIcon, name: 'Playlists', link: '' },
      { icon: VideosIcon, name: 'Your videos', link: '/yourvideos' },
      { icon: WLIcon, name: 'Watch later', link: '' },
      { icon: LikeIcon, name: 'Liked videos', link: '' },
      { icon: DownloadIcon, name: 'Downloads', link: '' },
    ]
  },

  {
    divider: true,
  },

  {
    title: 'Subscriptions',
    titleButton: null,
    items: [
      { icon: YT1Icon, name: 'YTGuy', link: '/@YTGuy' },
      { icon: YT2Icon, name: 'The Girls', link: '/@TheGirl' },
      { icon: YT3Icon, name: 'Geek News', link: '/@GeekNews' },
      { icon: YT4Icon, name: 'Bearded', link: '/@Bearded' },
      { icon: YT5Icon, name: 'Lofi Lady', link: '/@LofiLady' },
      { icon: YT6Icon, name: 'Smile Maker', link: '/@SmileMaker' },
    ]
  },

  {
    divider: true,
  },

  {
    title: 'Explore',
    titleButton: null,
    items: [
      { icon: TrandingIcon, name: 'Tranding', link: '' },
      { icon: MusicIcon, name: 'Music', link: '' },
      { icon: MoviesIcon, name: 'Movies', link: '' },
      { icon: LiveIcon, name: 'Live', link: '' },
      { icon: GamingIcon, name: 'Gaming', link: '' },
      { icon: NewsIcon, name: 'News', link: '' },
      { icon: SportsIcon, name: 'Sports', link: '' },
      { icon: CoursesIcon, name: 'Courses', link: '' },
      { icon: PodcastsIcon, name: 'Podcasts', link: '' },
    ]
  },

  {
    divider: true,
  },

  {
    title: 'More from YouTube',
    titleButton: null,
    items: [
      { icon: YTStudioIcon, name: 'YouTube Studio', link: '' },
      { icon: YTMusicRedIcon, name: 'YouTube Music', link: '' },
      { icon: YTKidsIcon, name: 'YouTube Kids', link: '' },
    ]
  },

  {
    divider: true,
  },

  {
    title: null,
    titleButton: null,
    items: [
      { icon: SettingsIcon, name: 'Settings', link: '' },
      { icon: ReportIcon, name: 'Report history', link: '' },
      { icon: HelpIcon, name: 'Help', link: '' },
      { icon: FeedbackIcon, name: 'Send feedback', link: '' },
    ]
  },

  {
    divider: true,
  },
];