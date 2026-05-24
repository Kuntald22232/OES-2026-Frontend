import React, { useState } from "react";
import axios from "axios";

const TeacherNoticeUpload = () => {
  const [title, setTitle] =
    useState("");

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage(
        "Please enter notice title"
      );
      return;
    }

    if (!file) {
      setMessage(
        "Please select a PDF file"
      );
      return;
    }

    const formData =
      new FormData();

    formData.append(
      "title",
      title
    );

    formData.append(
      "file",
      file
    );

    try {
      setLoading(true);
      setMessage("");

      const response =
        await axios.post(
          "http://localhost:8080/api/upcoming-exam/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      setMessage(
        response.data.message
      );

      setTitle("");
      setFile(null);

      document.getElementById(
        "pdfFile"
      ).value = "";

    } catch (error) {
      console.error(error);

      if (
        error.response?.data
          ?.message
      ) {
        setMessage(
          error.response.data
            .message
        );
      } else {
        setMessage(
          "Upload failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #eef2ff, #f8fafc)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background:
            "rgba(255,255,255,0.85)",
          backdropFilter:
            "blur(12px)",
          border:
            "1px solid rgba(255,255,255,0.4)",
          borderRadius: "24px",
          padding: "35px",
          boxShadow:
            "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#1e293b",
              fontWeight: "700",
            }}
          >
            📢 Upload Notice
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
              fontSize: "15px",
            }}
          >
            Upload PDF notices for
            students
          </p>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
        >
          {/* Title */}
          <div
            style={{
              marginBottom:
                "22px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom:
                  "8px",
                fontWeight:
                  "600",
                color:
                  "#334155",
              }}
            >
              Notice Title
            </label>

            <input
              type="text"
              placeholder="Enter notice title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              required
              style={{
                width: "100%",
                padding:
                  "14px 16px",
                borderRadius:
                  "14px",
                border:
                  "1px solid #dbeafe",
                outline:
                  "none",
                fontSize:
                  "15px",
                boxSizing:
                  "border-box",
                transition:
                  "0.3s",
                background:
                  "#f8fafc",
              }}
            />
          </div>

          {/* PDF Upload */}
          <div
            style={{
              marginBottom:
                "28px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom:
                  "8px",
                fontWeight:
                  "600",
                color:
                  "#334155",
              }}
            >
              Upload PDF
            </label>

            <input
              id="pdfFile"
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(
                  e.target
                    .files[0]
                )
              }
              required
              style={{
                width: "100%",
                padding:
                  "12px",
                borderRadius:
                  "14px",
                border:
                  "2px dashed #94a3b8",
                background:
                  "#f8fafc",
                cursor:
                  "pointer",
                boxSizing:
                  "border-box",
              }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={
              loading
            }
            style={{
              width: "100%",
              padding:
                "15px",
              border: "none",
              borderRadius:
                "16px",
              background:
                loading
                  ? "#94a3b8"
                  : "linear-gradient(135deg,#2563eb,#7c3aed)",
              color:
                "#fff",
              fontSize:
                "16px",
              fontWeight:
                "600",
              cursor:
                "pointer",
              transition:
                "0.3s",
              boxShadow:
                "0 8px 20px rgba(37,99,235,0.3)",
            }}
          >
            {loading
              ? "Uploading..."
              : "🚀 Upload Notice"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div
            style={{
              marginTop:
                "20px",
              padding:
                "14px",
              borderRadius:
                "14px",
              textAlign:
                "center",
              fontWeight:
                "600",
              background:
                message.includes(
                  "success"
                )
                  ? "#dcfce7"
                  : "#fee2e2",
              color:
                message.includes(
                  "success"
                )
                  ? "#166534"
                  : "#b91c1c",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherNoticeUpload;