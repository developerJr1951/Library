import { Routes, Route } from "react-router-dom";
import { HomePageLibrary, ListBooks, RegisterBook ,Menu} from "../pages/Library";

export const LibraryRouter = () => {
  return (
  
<>
<Menu/>
<div className="library">

    <Routes >
         <Route path="home" element={<HomePageLibrary />} />
         <Route path="create" element={<RegisterBook />} />
         <Route path="view" element={<ListBooks />} />
      </Routes>
</div>
</>
  )
}
