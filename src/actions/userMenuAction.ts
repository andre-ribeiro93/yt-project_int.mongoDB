import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/userContexts/loginContext";
import type { UserMenuActions } from "../data/userMenuItems";
import { useContext } from "react";

export const userMenuHandler = () => {

  const { logOut } = useContext(LoginContext);
  const navigate = useNavigate();
  
  return (action: UserMenuActions) => {
    switch (action) {
      case 'logOut':
        logOut();
        navigate('/');
        break;

      default:
        console.warn(`Unknown action: ${action}`);
    }
  };
};