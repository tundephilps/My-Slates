import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Auth/Onboarding";
import Auth from "./Pages/Auth/Auth";
import Register1 from "./Pages/Auth/Register1";
import Register2 from "./Pages/Auth/Register2";
import Register3 from "./Pages/Auth/Register3";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import PasswordSuccess from "./Pages/Auth/PasswordSuccess";
import SetNewPassword from "./Pages/Auth/SetNewPassword";
import CheckMail from "./Pages/Auth/CheckMail";
import Layout from "./components/Layout/Layout";

import Homepage from "./Pages/Dashboard/Homepage";
import Students from "./Pages/Dashboard/Students/Students";
import Subjects from "./Pages/Dashboard/Subjects/Subjects";
import TeachingTools from "./Pages/Dashboard/TeachingTools/TeachingTools";
import Settings from "./Pages/Dashboard/Settings/Settings";

import AssessmentBuilder from "./Pages/Dashboard/TeachingTools/AssessmentBuilder";
import FeedbackBot from "./Pages/Dashboard/TeachingTools/FeedbackBot";
import Chatbot from "./Pages/Dashboard/TeachingTools/Chatbot";
import LessonPlan from "./Pages/Dashboard/TeachingTools/LessonPlan";
import FeedbackBotResponse from "./Pages/Dashboard/TeachingTools/FeedbackBotResponse";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Onboarding" element={<Onboarding />} />

          <Route path="/Auth" element={<Auth />} />

          <Route path="/SchoolAccessSetup" element={<Register1 />} />

          <Route path="/PersonalInformation" element={<Register2 />} />

          <Route path="/PasswordSetup" element={<Register3 />} />

          <Route path="/" element={<Login />} />

          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/PasswordSuccess" element={<PasswordSuccess />} />

          <Route path="/SetNewPassword" element={<SetNewPassword />} />

          <Route path="/CheckMail" element={<CheckMail />} />

          <Route element={<Layout />}>
            <Route path="Dashboard" element={<Homepage />} />
            <Route path="Students" element={<Students />} />
            <Route path="Subjects" element={<Subjects />} />
            <Route path="TeachingTools" element={<TeachingTools />} />
            <Route path="AssessmentBuilder" element={<AssessmentBuilder />} />
            <Route path="Chatbot" element={<Chatbot />} />
            <Route path="FeedbackBot" element={<FeedbackBot />} />

            <Route
              path="FeedbackBotResponse"
              element={<FeedbackBotResponse />}
            />
            <Route path="LessonPlan" element={<LessonPlan />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
