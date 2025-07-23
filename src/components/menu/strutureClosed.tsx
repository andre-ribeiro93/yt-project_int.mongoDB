import { useContext } from "react";
import {
  ButtonIcon,
  MenuItem,
} from "./menuRenderStyles";
import { MenuContext } from "../../contexts/menusContext";
import { menuClosedItems } from "../../data/menuClosedItems";
import { useNavigate } from "react-router-dom";


function MenuRenderClosed() {

  const { openMenu } = useContext(MenuContext);
  const navigate = useNavigate();


  return (
    <section>
      {menuClosedItems.map((item, index) => (
        <MenuItem
          key={index}
          openMenu={openMenu}
          onClick={() => navigate(item.link)}
        >
          <ButtonIcon alt={`${item.name} icon`} src={item.icon} />
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </section>
  )
}

export default MenuRenderClosed;