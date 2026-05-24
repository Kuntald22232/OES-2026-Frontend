import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentDashboard from "../pages/student/Dashboard";
import TeacherDashboard from "../pages/teacher/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

import ExamPage from "../pages/student/ExamPage";
import AvailableExams from "../pages/student/AvailableExams";
import StudentNotices from "../pages/student/StudentNotices";

import CreateExam from "../pages/teacher/CreateExam";
import AddQuestion from "../pages/teacher/AddQuestion";
import Submissions from "../pages/teacher/Submissions";
import MarksInput from "../pages/teacher/MarksInput";
import TeacherNoticeUpload from "../pages/teacher/TeacherNoticeUpload";

import Home from "../pages/Home";

import Result from "../pages/student/Result";
import StudentResults from "../pages/teacher/StudentResults";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* =======================
            HOME
        ======================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* =======================
            AUTH
        ======================= */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =======================
            STUDENT
        ======================= */}

        {/* Student Dashboard */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Available Exams */}
        <Route
          path="/student/exam"
          element={
            <ProtectedRoute role="STUDENT">
              <AvailableExams />
            </ProtectedRoute>
          }
        />

        {/* Backup Route */}
        <Route
          path="/student/available-exams"
          element={
            <ProtectedRoute role="STUDENT">
              <AvailableExams />
            </ProtectedRoute>
          }
        />

        {/* Student Exam Page */}
        <Route
          path="/student/exam/:examId"
          element={
            <ProtectedRoute role="STUDENT">
              <ExamPage />
            </ProtectedRoute>
          }
        />

        {/* Student Result */}
        <Route
          path="/student/result"
          element={
            <ProtectedRoute role="STUDENT">
              <Result />
            </ProtectedRoute>
          }
        />

        {/* ✅ Teacher Notices */}
        <Route
          path="/student/dashboard/teachers-notice"
          element={
            <ProtectedRoute role="STUDENT">
              <StudentNotices />
            </ProtectedRoute>
          }
        />

        {/* =======================
            TEACHER / EXAMINER
        ======================= */}

        {/* Teacher Dashboard */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute role="EXAMINER">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* Create Exam */}
        <Route
          path="/teacher/create-exam"
          element={
            <ProtectedRoute role="EXAMINER">
              <CreateExam />
            </ProtectedRoute>
          }
        />

        {/* Add Question */}
        <Route
          path="/teacher/add-question"
          element={
            <ProtectedRoute role="EXAMINER">
              <AddQuestion />
            </ProtectedRoute>
          }
        />

        {/* Teacher Submissions */}
        <Route
          path="/teacher/submissions"
          element={
            <ProtectedRoute role="EXAMINER">
              <Submissions />
            </ProtectedRoute>
          }
        />

        {/* Teacher Results */}
        <Route
          path="/teacher/results"
          element={
            <ProtectedRoute role="EXAMINER">
              <StudentResults />
            </ProtectedRoute>
          }
        />

        {/* Teacher Marks */}
        <Route
          path="/teacher/marks"
          element={
            <ProtectedRoute role="EXAMINER">
              <MarksInput />
            </ProtectedRoute>
          }
        />

        {/* Teacher Notice Upload */}
        <Route
          path="/teacher/upload-notice"
          element={
            <ProtectedRoute role="EXAMINER">
              <TeacherNoticeUpload />
            </ProtectedRoute>
          }
        />

        {/* =======================
            ADMIN
        ======================= */}

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;