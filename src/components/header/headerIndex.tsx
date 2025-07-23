import {
  ButtonContainer,
  ButtonIcon,
  Container,
  CreateButton,
  HeaderButtons,
  LogoContainer,
  LogoImg,
  ResponsiveContainer,
  ResponsiveSearch,
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SignButton,
  UserButtonContainer
} from "./headerStyles";

import HamburgerIcon from "../../assets/menu-hamburger.png";
import Logo from "../../assets/youtube-logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microphone.png";
import PlusIcon from "../../assets/plus.png";
import NotificationIcon from "../../assets/bell.png";
import UserBlueIcon from "../../assets/user-blue.png";
import DotsIcon from "../../assets/dots.png";

import { useContext, useRef, useState } from "react";
import { MenuContext } from "../../contexts/menusContext";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/userContexts/loginContext";
import UserMenu from "../userMenu/userMenuIndex";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { SearchContext } from "../../contexts/searchContext";
import { VideoContext } from "../../contexts/userContexts/videoContext";



function Header() {

  const {
    openMenu, setOpenMenu,
    userMenu, setUserMenu
  } = useContext(MenuContext);

  const { isModalOpen, setIsModalOpen } = useContext(VideoContext);

  const {
    login,
    userName
  } = useContext(LoginContext);

  const { setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  function handleInput(inputValue: string) {
    setInputValue(inputValue);
  }

  useOutsideClick(menuRef, () => setUserMenu(false));

  return (

    <ResponsiveContainer>

      <Container>

        <LogoContainer>
          <ButtonContainer
            margin='0 15px 0 0'
            onClick={() => {
              setOpenMenu(!openMenu);
            }}>
            <ButtonIcon alt='menu HamburgerIcon' src={HamburgerIcon} />
          </ButtonContainer>

          <LogoImg
            alt='Youtube Logo'
            src={Logo}
            onClick={() => navigate('/')}
          />
        </LogoContainer>

        <SearchContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder='Search'
              ref={inputRef}
              value={inputValue}
              onChange={(e) => {
                handleInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSearch(inputValue)
                  navigate('/search')
                }
              }}
            />
          </SearchInputContainer>

          <SearchButton
            onClick={() => {
              if (inputValue.trim() === '') {
                alert('type something before press search button!')
                return;
              }
              setSearch(inputValue)
              navigate('/search')
            }}
          >
            <ButtonIcon alt='Search Icon' src={SearchIcon} />
          </SearchButton>

          <ButtonContainer margin='0 0 0 8px' backgroundColor='#f2f2f2'>
            <ButtonIcon alt='Microphone Icon' src={MicIcon} />
          </ButtonContainer>
        </SearchContainer>

        <HeaderButtons ref={menuRef}>
          {login ?
            <>
              <CreateButton
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <ButtonIcon alt='Plus Icon' src={PlusIcon} />
                <span>Create</span>
              </CreateButton>

              <ButtonContainer margin='0 8px'>
                <ButtonIcon alt='Notification Icon' src={NotificationIcon} />
              </ButtonContainer>

              <UserButtonContainer
                margin='0 14px 0 8px'
                onClick={() => setUserMenu(!userMenu)}
              >
                {userName ? userName[0].toUpperCase() : '?'}
              </UserButtonContainer>
            </>
            :
            <>
              <ButtonContainer margin='0 0 0 8px' hoverColor='none'>
                <ButtonIcon alt='User Icon' src={DotsIcon} />
              </ButtonContainer>

              <SignButton onClick={() => navigate('/login')}>
                <ButtonIcon alt='User Icon' src={UserBlueIcon} />
                <span>Sign in</span>
              </SignButton>
            </>
          }
        </HeaderButtons>

        {userMenu && <UserMenu />}

      </Container>

      <ResponsiveSearch>
        <SearchInputContainer>
          <SearchInput
            placeholder='Search'
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              handleInput(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearch(inputValue)
                navigate('/search')
              }
            }}
          />
        </SearchInputContainer>

        <SearchButton
          onClick={() => {
            if (inputValue.trim() === '') {
              alert('type something before press search button!')
              return;
            }
            setSearch(inputValue)
            navigate('/search')
          }}
        >
          <ButtonIcon alt='Search Icon' src={SearchIcon} />
        </SearchButton>

        <ButtonContainer margin='0 0 0 8px' backgroundColor='#f2f2f2'>
          <ButtonIcon alt='Microphone Icon' src={MicIcon} />
        </ButtonContainer>
      </ResponsiveSearch>

    </ResponsiveContainer>

  )
}

export default Header;