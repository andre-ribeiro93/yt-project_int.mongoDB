import { Route, Routes } from "react-router-dom"
import StandardLayout from "../components/layouts/standardLayout/standardLayoutIndex"
import Home from "../pages/home/homeIndex";
import Login from "../pages/login/loginIndex";
import Register from "../pages/register/registerIndex";
import AuthLayout from "../components/layouts/authlayout/authLayoutIndex"
import Search from "../pages/search/searchIndex";
import YourVideos from "../pages/yourVideos/yourVideosIndex";

function AppRoutes() {

  return (
    <Routes>

      {/* Rotas COM layout */}
      <Route element={<StandardLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/yourvideos' element={<YourVideos />} />
        <Route path='/search' element={<Search />} />
      </Route>

      {/* Rotas SEM layout */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes;