import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import Home from "./components/pages/Home/Home";
import Form from "./components/blocks/Form/Form";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
