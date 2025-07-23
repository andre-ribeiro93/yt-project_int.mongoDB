import { useContext } from "react";
import { Container, MenuBackground } from "./menuRenderStyles";
import { MenuContext } from "../../contexts/menusContext";

import MenuRenderOpen from "./strutureOpen";
import MenuRenderClosed from "./strutureClosed";

function Menu() {

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <>
      <Container
        openMenu={openMenu}
        onClick={(e) => e.stopPropagation()}
      >
        {openMenu ? <MenuRenderOpen /> : <MenuRenderClosed />}
      </Container>
      <MenuBackground
        openMenu={openMenu}
        onClick={() => setOpenMenu(false)}
      />
    </>
  )
}

export default Menu;