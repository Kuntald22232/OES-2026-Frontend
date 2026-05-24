import { useEffect, useState } from "react";
import {
  addQuestion,
  getExamQuestions,
  updateQuestion,
  deleteQuestion,
} from "../../services/examApi";

const AddQuestion = () => {
  const examId = 1;

  const [questions, setQuestions] = useState([]);
  const [editId, setEditId] = useState(null);

  const [question, setQuestion] = useState({
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    exam: { id: examId },
  });

  const loadQuestions = async () => {
    try {
      const res = await getExamQuestions(examId);
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setQuestion({
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      exam: { id: examId },
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId === null) {
      await addQuestion(question);
    } else {
      await updateQuestion(editId, question);
    }

    resetForm();
    loadQuestions();
  };

  const handleEdit = (q) => {
    setQuestion({
      questionText: q.questionText,
      optionA: q.optionA,
      optionB: q.optionB,
      optionC: q.optionC,
      optionD: q.optionD,
      correctAnswer: q.correctAnswer,
      exam: { id: examId },
    });
    setEditId(q.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this question?")) return;
    await deleteQuestion(id);
    loadQuestions();
  };

  // ================= STYLES =================
  const pageStyle = {
    display: "flex",
    gap: "25px",
    padding: "30px",
    background: "linear-gradient(135deg,#eef2f3,#8e9eab)",
    minHeight: "100vh",
    fontFamily: "Arial",
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const left = { ...cardStyle, width: "40%" };
  const right = { ...cardStyle, width: "60%" };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  };

  const buttonPrimary = {
    width: "100%",
    padding: "10px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "5px",
  };

  const buttonDanger = {
    padding: "6px 10px",
    marginLeft: "8px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const buttonEdit = {
    padding: "6px 10px",
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const questionCard = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #eee",
    marginBottom: "12px",
    background: "#fafafa",
  };

  return (
    <div style={pageStyle}>
      
      {/* ================= FORM ================= */}
      <div style={left}>
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          {editId ? "✏️ Update Question" : "➕ Add Question"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="questionText"
            value={question.questionText}
            placeholder="Enter Question"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input name="optionA" value={question.optionA} placeholder="Option A" onChange={handleChange} style={inputStyle} required />
          <input name="optionB" value={question.optionB} placeholder="Option B" onChange={handleChange} style={inputStyle} required />
          <input name="optionC" value={question.optionC} placeholder="Option C" onChange={handleChange} style={inputStyle} required />
          <input name="optionD" value={question.optionD} placeholder="Option D" onChange={handleChange} style={inputStyle} required />

          <input
            name="correctAnswer"
            value={question.correctAnswer}
            placeholder="Correct Answer (A/B/C/D)"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonPrimary}>
            {editId ? "Update Question" : "Add Question"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                ...buttonPrimary,
                background: "#6b7280",
                marginTop: "10px",
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* ================= LIST ================= */}
      <div style={right}>
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          📚 Questions List
        </h2>

        {questions.length === 0 ? (
          <p style={{ color: "#777" }}>No questions found</p>
        ) : (
          questions.map((q) => (
            <div key={q.id} style={questionCard}>
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                {q.questionText}
              </p>

              <p>A: {q.optionA}</p>
              <p>B: {q.optionB}</p>
              <p>C: {q.optionC}</p>
              <p>D: {q.optionD}</p>

              <p style={{ marginTop: "8px", fontWeight: "bold" }}>
                Answer: {q.correctAnswer}
              </p>

              <div style={{ marginTop: "10px" }}>
                <button style={buttonEdit} onClick={() => handleEdit(q)}>
                  Edit
                </button>

                <button style={buttonDanger} onClick={() => handleDelete(q.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddQuestion;