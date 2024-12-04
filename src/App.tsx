import { Routes, Route } from "react-router";
import { Header } from "./components/UI/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div style={{
          marginBottom: "100px"
        }}></div>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/auth">
            <Route index path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
