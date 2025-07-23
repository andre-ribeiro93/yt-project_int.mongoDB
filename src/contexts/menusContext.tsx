import { createContext, useState, useEffect, type ReactNode } from "react";

interface MenuContextProps {
  children: ReactNode,
}

interface MenuContextTypes {
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void,
  userMenu: boolean,
  setUserMenu: (userMenu: boolean) => void,
};

const initialValues = {
  openMenu: true,
  setOpenMenu: () => { },
  userMenu: false,
  setUserMenu: () => { },
};


export const MenuContext = createContext<MenuContextTypes>(initialValues);

export const MenuStorage = ({ children }: MenuContextProps) => {

  const [openMenu, setOpenMenu] = useState(initialValues.openMenu);
  const [userMenu, setUserMenu] = useState(initialValues.userMenu);

  useEffect(() => {
    const screemWidth = window.innerWidth;
    if (screemWidth <= 834) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }, []);

  useEffect(() => {
    if (userMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [userMenu]);

  return (
    <MenuContext.Provider value={{
      openMenu, setOpenMenu,
      userMenu, setUserMenu,
    }}>
      {children}
    </MenuContext.Provider>
  )
};