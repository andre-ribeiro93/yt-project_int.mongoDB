import { userMenuItems } from "../../data/userMenuItems";

import { useContext } from "react";
import { MenuContext } from "../../contexts/menusContext";
import { LoginContext } from "../../contexts/userContexts/loginContext";
import { userMenuHandler } from "../../actions/userMenuAction";

import {
  ArrowIcon,
  ButtonIcon,
  Divider,
  MenuContainer,
  MenuItem,
  StyledLink,
  TextContainer,
  UserDataContent,
  UserImg,
  UINavigationContent
} from "./userMenuStyles";


function UserMenu() {

  const { setUserMenu } = useContext(MenuContext);
  const { userName, userID } = useContext(LoginContext);

  const handleAction = userMenuHandler();

  const userHandle = `@${userName.toLowerCase() + userID.slice(0, 4)}`;

  return (

    <MenuContainer>

      <UserDataContent>
        <UserImg>
          {userName[0].toUpperCase()}
        </UserImg>

        <TextContainer>
          <span>{userName}</span>

          <span>
            {userHandle}
          </span>

          <StyledLink to={`/${userHandle}`}>
            View your channel
          </StyledLink>
        </TextContainer>
      </UserDataContent>

      <Divider /> {/* A fixed divider to separate the UINavigationContent scrollbar from UserDataContent */}

      <UINavigationContent>
        {userMenuItems.map((section, i) => (
          section.divider ? (
            <Divider key={i} />
          ) : (
            <div key={i}>
              {section.items?.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleAction(item.action);
                    setUserMenu(false);
                  }}
                >
                  <ButtonIcon alt={`${item.name} icon`} src={item.icon} />
                  <span>{item.name}</span>
                  {item.afterIcon && (
                    <ArrowIcon alt={`${item.afterIcon} icon`} src={item.afterIcon} />
                  )}
                </MenuItem>
              ))}
            </div>
          )
        ))}
      </UINavigationContent>

    </MenuContainer>
  )
}

export default UserMenu;