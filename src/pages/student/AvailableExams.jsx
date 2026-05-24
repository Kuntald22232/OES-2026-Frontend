import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvailableExams } from "../../services/examApi";

const AvailableExams = () => {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = async () => {
    try {
      const res = await getAvailableExams();

      console.log("Available Exams:", res.data);

      setExams(res.data || []);
    } catch (error) {
      console.log("Exam fetch error:", error);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🧪 Available Exams</h1>

      {exams.length === 0 ? (
        <p style={styles.empty}>No available exams</p>
      ) : (
        <div style={styles.grid}>
          {exams.map((exam) => (
            <div key={exam.id} style={styles.card}>
              <h2 style={styles.title}>
                {exam.examTitle || exam.title || "Exam"}
              </h2>

              <p>
                Date:{" "}
                {exam.examDate
                  ? new Date(exam.examDate).toLocaleString()
                  : "N/A"}
              </p>

              <button
                style={styles.button}
                onClick={() =>
                  navigate(`/student/exam/${exam.id}`)
                }
              >
                Start Exam
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: "30px",
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "14px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    color: "gray",
  },
};

export default AvailableExams;