import axios from "axios";

const API = "https://onlineexamsystem2026.onrender.com/api";


// ===========================
// 🎓 STUDENT EXAMS
// ===========================

// 📅 Upcoming exams (notice / schedule)
export const getUpcomingExams = () =>
  axios.get(`${API}/exams/student/upcoming-exams`);

// ===========================
// 📢 STUDENT NOTICE
// ===========================

export const getNotices = () =>
  axios.get(`${API}/upcoming-exam/all`);


// 🧪 Available exams (ready to attempt)
export const getAvailableExams = () =>
  axios.get(`${API}/exams/student/available`);


// 📄 Get single exam details
export const getExamById = (id) =>
  axios.get(`${API}/exams/${id}`);


// ===========================
// 👨‍🏫 TEACHER EXAMS (CRUD)
// ===========================

// Create exam
export const createExam = (data) =>
  axios.post(`${API}/exams`, data);

// Get all exams
export const getAllExams = () =>
  axios.get(`${API}/exams`);

// Get active exams
export const getActiveExams = () =>
  axios.get(`${API}/exams/active`);

// Update exam
export const updateExam = (id, data) =>
  axios.put(`${API}/exams/${id}`, data);

// Delete exam
export const deleteExam = (id) =>
  axios.delete(`${API}/exams/${id}`);


// ===========================
// ❓ QUESTIONS API
// ===========================

// Add question
export const addQuestion = (data) =>
  axios.post(`${API}/questions`, data);

// Get questions by exam
export const getExamQuestions = (examId) =>
  axios.get(`${API}/questions/exam/${examId}`);

// Update question
export const updateQuestion = (id, data) =>
  axios.put(`${API}/questions/${id}`, data);

// Delete question
export const deleteQuestion = (id) =>
  axios.delete(`${API}/questions/${id}`);


// ===========================
// 📝 EXAM SUBMISSION (STUDENT)
// ===========================

// Submit exam answers
export const submitExam = (data) =>
  axios.post(`${API}/student/exam/submit`, data);


// ===========================
// 👨‍🏫 TEACHER SUBMISSIONS
// ===========================

// View submissions for exam
export const getSubmissions = (examId) =>
  axios.get(`${API}/teacher/submissions/exam/${examId}`);