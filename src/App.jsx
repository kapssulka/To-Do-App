import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import Home from "./components/pages/Home/Home";
import ProjectsBoard from "./components/pages/ProjectsBoard/ProjectsBoard";
import SingleProject from "./components/pages/SingleProject/SingleProject";
import CreateNewProject from "./components/pages/CreateNewProject/CreateNewProject";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import WithAuth from "./hoc/WithAuth";
import WithGuest from "./hoc/WithGuest";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/projects" element={<Navigate to="/" replace />} />

        <Route
          path="/"
          element={
            <WithAuth>
              <Home />
            </WithAuth>
          }
        >
          <Route index element={<ProjectsBoard />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="create-project" element={<CreateNewProject />} />
        </Route>

        <Route
          path="welcome/"
          element={
            <WithGuest>
              <AuthPage />
            </WithGuest>
          }
        >
          <Route index element={<Navigate to="login" replace />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
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
