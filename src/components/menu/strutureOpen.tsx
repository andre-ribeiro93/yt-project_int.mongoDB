import { useContext } from "react";
import {
  ButtonContainer,
  ButtonIcon,
  Divider,
  LogoContainer,
  LogoImg,
  MenuItem,
  Title,
  TitleButton,
} from "./menuRenderStyles";
import { MenuContext } from "../../contexts/menusContext";

import HamburgerIcon from "../../assets/menu-hamburger.png";
import Logo from "../../assets/youtube-logo.png";

import { menuOpenItems } from "../../data/menuOpenItems";
import { useNavigate } from "react-router-dom";

import Footer from "../footer/footerIndex";

function MenuRenderOpen() {

  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const navigate = useNavigate();


  return (
    <div>
      <LogoContainer>
        <ButtonContainer
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
      
      <section>
        {menuOpenItems.map((section, i) => {
          if (section.divider) {
            return <Divider key={i} />
          }

          return (
            <div key={i}>
              {section.title && <Title>{section.title}</Title>}
              {section.titleButton && (
                <TitleButton onClick={() => navigate(section.titleButton.link)}>
                  <Title>{section.titleButton.name}</Title>
                  <ButtonIcon alt={`${section.titleButton.name} icon`} src={section.titleButton.icon} />
                </TitleButton>
              )}
              {section.items?.map((item, index) => (
                <MenuItem
                  key={index}
                  openMenu={openMenu}
                  onClick={() => navigate(item.link)}
                >
                  <ButtonIcon alt={`${item.name} icon`} src={item.icon} />
                  <span>{item.name}</span>
                </MenuItem>
              ))}
            </div>
          )
        })}
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default MenuRenderOpen;