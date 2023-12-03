import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SharedPage from "./pages/Shared/SharedPage.jsx";
import FolderPage from "./pages/Folder/FolderPage.jsx";
import App from "./components/App/App.jsx";
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate replace to="/folder" />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
