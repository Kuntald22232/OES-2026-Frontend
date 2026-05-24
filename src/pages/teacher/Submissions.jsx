import { useEffect, useState } from "react";
import { getSubmissions } from "../../services/examApi";

const Submissions = () => {
  const [submissions, setSubmissions] =
    useState([]);

  const [examId, setExamId] =
    useState("1");

  // ================= LOAD SUBMISSIONS =================
  useEffect(() => {
    const fetchSubmissions =
      async () => {
        try {
          const res =
            await getSubmissions(
              examId
            );

          console.log(
            "Submissions:",
            res.data
          );

          setSubmissions(
            res.data || []
          );
        } catch (error) {
          console.log(
            "Submission error:",
            error
          );
        }
      };

    if (examId) {
      fetchSubmissions();
    }
  }, [examId]);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        backgroundColor:
          "#f4f6f8",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom:
            "20px",
        }}
      >
        Student Submissions
      </h1>

      {/* EXAM ID INPUT */}
      <div
        style={{
          textAlign: "center",
          marginBottom:
            "20px",
        }}
      >
        <input
          type="number"
          placeholder="Enter Exam ID"
          value={examId}
          onChange={(e) =>
            setExamId(
              e.target.value
            )
          }
          style={{
            padding: "10px",
            borderRadius:
              "8px",
            border:
              "1px solid #ccc",
            width: "200px",
          }}
        />
      </div>

      {/* SUBMISSIONS */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        {submissions.length ===
        0 ? (
          <p
            style={{
              textAlign:
                "center",
              color: "#777",
            }}
          >
            No submissions found
          </p>
        ) : (
          submissions.map(
            (s) => {
              let parsedAnswers =
                [];

              try {
                parsedAnswers =
                  JSON.parse(
                    s.answersJson ||
                      "[]"
                  );
              } catch (
                error
              ) {
                console.log(
                  "JSON parse error:",
                  error
                );
              }

              return (
                <div
                  key={s.id}
                  style={{
                    backgroundColor:
                      "#fff",
                    padding:
                      "20px",
                    marginBottom:
                      "15px",
                    borderRadius:
                      "12px",
                    boxShadow:
                      "0 3px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* STUDENT */}
                  <h3
                    style={{
                      marginBottom:
                        "8px",
                    }}
                  >
                    👨‍🎓 Student:{" "}
                    <span
                      style={{
                        color:
                          "#333",
                      }}
                    >
                      {s.student
                        ?.fullName ||
                        s.student
                          ?.name ||
                        "Unknown"}
                    </span>
                  </h3>

                  {/* EXAM */}
                  <p
                    style={{
                      marginBottom:
                        "10px",
                    }}
                  >
                    📘 Exam:{" "}
                    <strong>
                      {s.exam
                        ?.examTitle ||
                        "N/A"}
                    </strong>
                  </p>

                  {/* TIME */}
                  <p
                    style={{
                      fontSize:
                        "13px",
                      color:
                        "#666",
                      marginBottom:
                        "15px",
                    }}
                  >
                    ⏰ Submitted:{" "}
                    {
                      s.submittedAt
                    }
                  </p>

                  {/* ANSWERS */}
                  <div
                    style={{
                      backgroundColor:
                        "#f9f9f9",
                      padding:
                        "12px",
                      borderRadius:
                        "8px",
                    }}
                  >
                    <h4
                      style={{
                        marginBottom:
                          "12px",
                      }}
                    >
                      📝 Answers
                    </h4>

                    {parsedAnswers.length ===
                    0 ? (
                      <p>
                        No answers
                        found
                      </p>
                    ) : (
                      parsedAnswers.map(
                        (
                          answer,
                          index
                        ) => (
                          <div
                            key={
                              index
                            }
                            style={{
                              background:
                                "#fff",
                              padding:
                                "12px",
                              marginBottom:
                                "8px",
                              borderRadius:
                                "8px",
                              border:
                                "1px solid #ddd",
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                              }}
                            >
                              <strong>
                                Question
                                ID:
                              </strong>{" "}
                              {
                                answer.questionId
                              }
                            </p>

                            <p
                              style={{
                                margin:
                                  "5px 0 0",
                              }}
                            >
                              <strong>
                                Selected
                                Answer:
                              </strong>{" "}
                              {
                                answer.selectedAnswer
                              }
                            </p>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Submissions;