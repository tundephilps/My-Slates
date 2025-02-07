import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";
import Auth from "./Pages/Auth";
import Register1 from "./Pages/Register1";
import Register2 from "./Pages/Register2";
import Register3 from "./Pages/Register3";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import PasswordSuccess from "./Pages/PasswordSuccess";
import SetNewPassword from "./Pages/SetNewPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Onboarding />} /> */}

          {/* <Route path="/" element={<Auth />} /> */}

          {/* <Route path="/" element={<Register1 />} /> */}

          {/* <Route path="/" element={<Register2 />} /> */}

          {/* <Route path="/" element={<Register3 />} /> */}

          {/* <Route path="/" element={<Login />} /> */}

          {/* <Route path="/" element={<ForgotPassword />} /> */}

          {/* <Route path="/" element={<PasswordSuccess />} /> */}

          <Route path="/" element={<SetNewPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
