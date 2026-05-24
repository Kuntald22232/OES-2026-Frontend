import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getExamQuestions,
  submitExam,
} from "../../services/examApi";

const ExamPage = () => {

  // Route param
  const { examId } = useParams();

  const [questions, setQuestions] =
    useState([]);

  const [answers, setAnswers] =
    useState([]);

  // ===== TIMER (10 MINUTES) =====
  const [timeLeft, setTimeLeft] =
    useState(1 * 60);

  // ================= LOAD QUESTIONS =================
  useEffect(() => {
    if (!examId) return;

    const loadQuestions =
      async () => {
        try {
          const { data } =
            await getExamQuestions(
              examId
            );

          console.log(
            "Questions loaded:",
            data
          );

          setQuestions(
            data || []
          );

        } catch (error) {

          console.log(
            "Question load error:",
            error
          );

          setQuestions([]);
        }
      };

    loadQuestions();
  }, [examId]);

  // ================= TIMER =================
  useEffect(() => {

    if (timeLeft <= 0) {
      alert(
        "⏰ Your time is up!"
      );

      handleSubmit(true);
      return;
    }

    // Warning at 1 minute
    if (timeLeft === 60) {
      alert(
        "⚠️ Only 1 minute left!"
      );
    }

    const timer =
      setInterval(() => {
        setTimeLeft(
          (prev) => prev - 1
        );
      }, 1000);

    return () =>
      clearInterval(timer);

  }, [timeLeft]);

  // ================= ANSWER HANDLE =================
  const handleAnswer = (
    questionId,
    selectedAnswer
  ) => {
    setAnswers((prev) => {

      const filtered =
        prev.filter(
          (a) =>
            a.questionId !==
            questionId
        );

      return [
        ...filtered,
        {
          questionId,
          selectedAnswer,
        },
      ];
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (
    autoSubmit = false
  ) => {
    try {

      const payload = {
        studentId: 1, // TEMPORARY
        examId,
        answers,
      };

      console.log(
        "Submitting payload:",
        payload
      );

      console.log(
        "Exam ID:",
        examId
      );

      console.log(
        "Answers:",
        answers
      );

      const response =
        await submitExam(
          payload
        );

      console.log(
        "Submit success:",
        response.data
      );

      alert(
        autoSubmit
          ? "Time is up! Exam submitted automatically."
          : "Exam submitted successfully!"
      );

    } catch (error) {

      console.log(
        "Submit error:",
        error.response
          ?.data || error
      );
    }
  };

  // ================= FORMAT TIMER =================
  const formatTime = (
    seconds
  ) => {
    const mins =
      Math.floor(
        seconds / 60
      );

    const secs =
      seconds % 60;

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div
        style={
          styles.headerRow
        }
      >
        <div>
          <h1
            style={
              styles.title
            }
          >
            📝 MCQ Examination
          </h1>

          <p
            style={
              styles.subtitle
            }
          >
            Answer carefully
            before
            submitting
          </p>
        </div>

        {/* TIMER */}
        <div
          style={
            styles.timer
          }
        >
          ⏳{" "}
          {formatTime(
            timeLeft
          )}
        </div>
      </div>

      {/* QUESTIONS */}
      <div
        style={
          styles.container
        }
      >
        {questions.length ===
        0 ? (

          <div
            style={
              styles.empty
            }
          >
            No questions found
          </div>

        ) : (

          questions.map(
            (
              q,
              index
            ) => (
              <div
                key={q.id}
                style={
                  styles.card
                }
              >

                <div
                  style={
                    styles.qHeader
                  }
                >
                  <span
                    style={
                      styles.qNo
                    }
                  >
                    Q
                    {index +
                      1}
                  </span>

                  <span
                    style={
                      styles.qText
                    }
                  >
                    {
                      q.questionText
                    }
                  </span>
                </div>

                <div
                  style={
                    styles.options
                  }
                >
                  {[
                    "A",
                    "B",
                    "C",
                    "D",
                  ].map(
                    (
                      opt
                    ) => (
                      <label
                        key={
                          opt
                        }
                        style={
                          styles.option
                        }
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          onChange={() =>
                            handleAnswer(
                              q.id,
                              opt
                            )
                          }
                          style={
                            styles.radio
                          }
                        />

                        <span
                          style={
                            styles.optionText
                          }
                        >
                          {
                            q[
                              `option${opt}`
                            ]
                          }
                        </span>
                      </label>
                    )
                  )}
                </div>

              </div>
            )
          )
        )}

        {/* SUBMIT */}
        {questions.length >
          0 && (
          <div
            style={
              styles.footer
            }
          >
            <button
              onClick={
                handleSubmit
              }
              style={
                styles.button
              }
            >
              🚀 Submit
              Exam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight:
      "100vh",
    background:
      "linear-gradient(135deg, #f8fafc, #e2e8f0)",
    padding: "30px",
    fontFamily:
      "Arial",
    color: "#111827",
  },

  headerRow: {
    display: "flex",
    justifyContent:
      "space-between",
    alignItems:
      "center",
    maxWidth:
      "850px",
    margin:
      "0 auto 30px",
  },

  title: {
    fontSize: "34px",
    fontWeight:
      "700",
    marginBottom:
      "6px",
    color: "#1e3a8a",
  },

  subtitle: {
    color:
      "#64748b",
    fontSize:
      "14px",
  },

  timer: {
    background:
      "#dc2626",
    color: "white",
    padding:
      "12px 20px",
    borderRadius:
      "12px",
    fontWeight:
      "bold",
    fontSize:
      "18px",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.2)",
  },

  container: {
    maxWidth:
      "850px",
    margin:
      "0 auto",
  },

  card: {
    backgroundColor:
      "#ffffff",
    padding: "22px",
    marginBottom:
      "18px",
    borderRadius:
      "14px",
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.08)",
  },

  qHeader: {
    marginBottom:
      "15px",
    display:
      "flex",
    gap: "10px",
  },

  qNo: {
    backgroundColor:
      "#2563eb",
    color: "white",
    padding:
      "5px 12px",
    borderRadius:
      "8px",
  },

  qText: {
    fontSize:
      "16px",
    fontWeight:
      "600",
  },

  options: {
    display:
      "flex",
    flexDirection:
      "column",
    gap: "10px",
  },

  option: {
    display:
      "flex",
    alignItems:
      "center",
    gap: "12px",
    padding: "10px",
    backgroundColor:
      "#f8fafc",
    borderRadius:
      "10px",
    border:
      "1px solid #e5e7eb",
  },

  optionText: {
    fontSize:
      "14px",
  },

  radio: {
    transform:
      "scale(1.2)",
  },

  footer: {
    textAlign:
      "center",
    marginTop:
      "25px",
  },

  button: {
    padding:
      "12px 34px",
    fontSize:
      "16px",
    background:
      "#2563eb",
    color: "white",
    border: "none",
    borderRadius:
      "12px",
    cursor:
      "pointer",
  },

  empty: {
    textAlign:
      "center",
    marginTop:
      "50px",
    color:
      "#64748b",
  },
};

export default ExamPage;