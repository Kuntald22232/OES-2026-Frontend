import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import AddBoxIcon from "@mui/icons-material/AddBox";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GradeIcon from "@mui/icons-material/Grade";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Create Exam",
      desc: "Add New Exam",
      icon: <AddBoxIcon fontSize="large" />,
      path: "/teacher/create-exam",
      color: "#1976d2",
    },
    {
      title: "Manage Questions",
      desc: "Edit Question Bank",
      icon: <QuestionAnswerIcon fontSize="large" />,
      path: "/teacher/add-question",
      color: "#2e7d32",
    },
    {
      title: "Student Performance",
      desc: "Check Performance",
      icon: <AssessmentIcon fontSize="large" />,
      path: "/teacher/submissions",
      color: "#ed6c02",
    },
    {
      title: "Student Results",
      desc: "Give Marks",
      icon: <GradeIcon fontSize="large" />,
      path: "/teacher/marks",
      color: "#9c27b0",
    },

    // ✅ Upload Notice (replaces Upcoming Exams)
    {
      title: "Upload Notice",
      desc: "Upload PDF Notice",
      icon: <UploadFileIcon fontSize="large" />,
      path: "/teacher/upload-notice",
      color: "#d32f2f",
    },
  ];

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Teacher Dashboard
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={3}
        >
          Manage exams, questions,
          notices and student performance
          in one place.
        </Typography>

        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
            >
              <Card
                onClick={() =>
                  navigate(card.path)
                }
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform:
                      "translateY(-6px)",
                    boxShadow: 6,
                  },
                  borderTop:
                    `4px solid ${card.color}`,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: card.color,
                      mb: 1,
                    }}
                  >
                    {card.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="600"
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;