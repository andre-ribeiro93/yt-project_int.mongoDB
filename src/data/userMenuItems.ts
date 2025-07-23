import BGoogleIcon from "../assets/g-google-bw.png";
import SwitchIcon from "../assets/switch-account.png";
import SignOutIcon from "../assets/sign-out.png";

import StudioIcon from "../assets/yt-studio-bw.png";
import YPBenefitsIcon from "../assets/yp-benefits.png";
import PAndMIcon from "../assets/dollar-sign.png";

import UserDataIcon from "../assets/user-data.png";
import AppearanceIcon from "../assets/moon.png";
import LanguageIcon from "../assets/language.png";
import RestricModeIcon from "../assets/restric-mode.png";
import LocationIcon from "../assets/globe2.png";
import KeyboardIcon from "../assets/keyboard.png";

import SettingIcon from "../assets/setting.png";

import HelpIcon from "../assets/help.png";
import FeedbackIcon from "../assets/feedback.png";

import ArrowIcon from "../assets/arrow.png";



export type UserMenuActions = 'logOut' | undefined

interface UserMenuItemsParams {
  icon: string;
  name: string;
  link: string;
  action?: UserMenuActions;
  afterIcon?: string;
}

interface UserMenuSectionParams {
  divider?: boolean;
  items?: UserMenuItemsParams[];
}


export const userMenuItems: UserMenuSectionParams[] = [

  {
    items: [
      { icon: BGoogleIcon, name: 'Google Account', link: '' },
      { icon: SwitchIcon, name: 'Switch account', link: '', afterIcon: ArrowIcon },
      { icon: SignOutIcon, name: 'Sign out', link: '', action: 'logOut' },
    ]
  },

  {
    divider: true
  },

  {
    items: [
      { icon: StudioIcon, name: 'YouTube Studio', link: '' },
      { icon: YPBenefitsIcon, name: 'Your Premium benefits', link: '' },
      { icon: PAndMIcon, name: 'Purchases and memberships', link: '' },
    ]
  },

  {
    divider: true
  },

  {
    items: [
      { icon: UserDataIcon, name: 'Your data in YouTube', link: '' },
      { icon: AppearanceIcon, name: 'Appearance: Light', link: '', afterIcon: ArrowIcon },
      { icon: LanguageIcon, name: 'Language: English', link: '', afterIcon: ArrowIcon },
      { icon: RestricModeIcon, name: 'Restricted Mode: Off', link: '', afterIcon: ArrowIcon },
      { icon: LocationIcon, name: 'Location: Brazil', link: '', afterIcon: ArrowIcon },
      { icon: KeyboardIcon, name: 'Keyboard shortcuts', link: '' },
    ]
  },

  {
    divider: true
  },

  {
    items: [
      { icon: SettingIcon, name: 'Settings', link: '' },
    ]
  },

  {
    divider: true
  },

  {
    items: [
      { icon: HelpIcon, name: 'Help', link: '' },
      { icon: FeedbackIcon, name: 'Send feedback', link: '' },
    ]
  },
]