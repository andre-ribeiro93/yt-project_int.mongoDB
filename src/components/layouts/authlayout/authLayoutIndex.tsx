import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./authLayoutStyles";

function AuthLayout() {

  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}

export default AuthLayout;