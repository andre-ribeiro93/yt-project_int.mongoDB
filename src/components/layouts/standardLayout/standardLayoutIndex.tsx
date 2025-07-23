import { Outlet } from "react-router-dom"
import Header from "../../header/headerIndex"
import Menu from "../../menu/menuRenderIndex"
import { useContext } from "react"
import { MenuContext } from "../../../contexts/menusContext"
import { ContentWrapper, LayoutContainer, MainContent, MenuWrapper, ResponiveMenuWrapper } from "./standardLayoutStyles"
import VideoUpload from "../../videoUploadModal/videoUpIndex"

function StandardLayout() {

  const { openMenu } = useContext(MenuContext);


  return (
    <LayoutContainer>

      <ResponiveMenuWrapper>
        <Menu />
      </ResponiveMenuWrapper>

      <Header />

      <ContentWrapper>

        <MenuWrapper openMenu={openMenu}>
          <Menu />
        </MenuWrapper>

        <MainContent>
          <Outlet />
        </MainContent>

      </ContentWrapper>

      <VideoUpload />

    </LayoutContainer>
  )
}

export default StandardLayout;