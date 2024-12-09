import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import Home from "./components/pages/Home/Home";
import Form from "./components/blocks/Form/Form";
import ProjectsBoard from "./components/pages/ProjectsBoard/ProjectsBoard";
import SingleProject from "./components/pages/SingleProject/SingleProject";
import CreateNewProject from "./components/pages/CreateNewProject/CreateNewProject";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/projects" element={<Navigate to="/" replace />} />

        <Route path="/" element={<Home />}>
          <Route index element={<ProjectsBoard />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="create-project" element={<CreateNewProject />} />
        </Route>

        <Route path="welcome/" element={<AuthPage />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="register" element={<Form isRegister={true} />} />
          <Route path="login" element={<Form />} />
        </Route>
        {/* переадресация */}
        <Route
          path="/login"
          element={<Navigate to="/welcome/login" replace />}
        />
        <Route
          path="/register"
          element={<Navigate to="/welcome/register" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
