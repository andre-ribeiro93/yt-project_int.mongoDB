import { RegisterStorage } from "./contexts/userContexts/registerContext";
import { LoginStorage } from "./contexts/userContexts/loginContext";
import { VideoStorage } from "./contexts/userContexts/videoContext";
import { CategoryStorage } from "./contexts/categoriesContext";
import { SearchStorage } from "./contexts/searchContext";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routesIndex";


function App() {

  return (
    <RegisterStorage>
      <LoginStorage>
        <VideoStorage>
          <CategoryStorage>
            <SearchStorage>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </SearchStorage>
          </CategoryStorage>
        </VideoStorage>
      </LoginStorage>
    </RegisterStorage>
  )
}

export default App;
