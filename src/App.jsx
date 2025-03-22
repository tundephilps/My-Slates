import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Auth/Onboarding";

import SchoolAccessSetup from "./Pages/Auth/SchoolAccessSetup";

import PersonalInformation from "./Pages/Auth/PersonalInformation";
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
import CommuncationTools from "./Pages/Dashboard/CommunicationTools/CommuncationTools";
import Attendance from "./Pages/Dashboard/Attendance/Attendance";
import ChatPage from "./Pages/Dashboard/CommunicationTools/ChatPage";
import SubjectDetails from "./Pages/Dashboard/Subjects/SubjectDetails";
import AddSubject from "./Pages/Dashboard/Subjects/AddSubject";
import Calendar from "./Pages/Dashboard/Calendar/Calendar";
import StudentDetails from "./Pages/Dashboard/Students/StudentDetails";
import CreateAccount from "./Pages/Auth/CreateAccount";
import PasswordSetup from "./Pages/Auth/PasswordSetup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />

          <Route path="/SchoolAccessSetup" element={<SchoolAccessSetup />} />

          <Route
            path="/PersonalInformation"
            element={<PersonalInformation />}
          />

          <Route path="/PasswordSetup" element={<PasswordSetup />} />

          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/PasswordSuccess" element={<PasswordSuccess />} />

          <Route path="/SetNewPassword" element={<SetNewPassword />} />

          <Route path="/CheckMail" element={<CheckMail />} />

          <Route element={<Layout />}>
            <Route path="Dashboard" element={<Homepage />} />

            <Route path="Students" element={<Students />} />

            <Route path="StudentDetails" element={<StudentDetails />} />

            <Route path="Subjects" element={<Subjects />} />

            <Route path="SubjectDetails" element={<SubjectDetails />} />

            <Route path="AddSubject" element={<AddSubject />} />
            <Route path="TeachingTools" element={<TeachingTools />} />

            <Route path="CommunicationTools" element={<CommuncationTools />} />

            <Route path="ChatPage" element={<ChatPage />} />

            <Route path="Attendance" element={<Attendance />} />

            <Route path="Calendar" element={<Calendar />} />
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
