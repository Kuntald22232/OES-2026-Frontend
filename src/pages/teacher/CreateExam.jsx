import { useState } from "react";
import { createExam } from "../../services/examApi";

const CreateExam = () => {
  const [exam, setExam] = useState({
    examTitle: "",
    durationInMinutes: "",
    examDate: "",
    active: true,
  });

  const handleChange = (e) => {
    setExam({
      ...exam,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createExam(exam);
      alert("Exam Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>📘 Create Exam</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="examTitle"
            placeholder="Exam Title"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="number"
            name="durationInMinutes"
            placeholder="Duration (minutes)"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="datetime-local"
            name="examDate"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Create Exam
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateExam;

/* ===== STYLES ===== */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    width: "430px",
    backgroundColor: "#fff",
    padding: "50px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1e3a8a",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};