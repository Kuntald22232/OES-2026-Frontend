import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignIcon from "@mui/icons-material/Campaign";

import axios from "axios";

// 🟢 analytics components
import PassFailPieChart from "../../components/analytics/PassFailPieChart";
import ResultBarChart from "../../components/analytics/ResultBarChart";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🟢 analytics state
  const [passFail, setPassFail] =
    useState(null);

  const [marks, setMarks] =
    useState([]);

  const regNo = "demo123"; // later session user

  // 🟢 fetch analytics data
  useEffect(() => {
    const fetchData =
      async () => {
        try {

          const passRes =
            await axios.get(
              `http://localhost:8000/analytics/pass-fail/${regNo}`
            );

          const marksRes =
            await axios.get(
              `http://localhost:8000/analytics/marks/${regNo}`
            );

          setPassFail(
            passRes.data
          );

          setMarks(
            marksRes.data
          );

        } catch (error) {

          console.log(
            "Analytics error:",
            error
          );
        }
      };

    fetchData();
  }, []);

  // 🟢 DASHBOARD CARDS
  const cards = [
    {
      title:
        "Available Exams",
      desc:
        "Start Exam",
      icon: (
        <SchoolIcon fontSize="large" />
      ),
      path:
        "/student/exam",
      color:
        "#1976d2",
    },
    {
      title:
        "Results",
      desc:
        "View Performance",
      icon: (
        <BarChartIcon fontSize="large" />
      ),
      path:
        "/student/result",
      color:
        "#ed6c02",
    },
    {
      title:
        "Teacher Notice",
      desc:
        "View Notices",
      icon: (
        <CampaignIcon fontSize="large" />
      ),
      path:
        "/student/dashboard/teachers-notice",
      color:
        "#d32f2f",
    },
  ];

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>

        {/* 🔵 HEADER */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Student Dashboard
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={3}
        >
          Welcome back!
          Track exams,
          results and
          student
          performance
          analytics.
        </Typography>

        {/* 🟢 CARDS SECTION */}
        <Grid
          container
          spacing={3}
        >
          {cards.map(
            (
              card,
              index
            ) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Card
                  onClick={() =>
                    navigate(
                      card.path
                    )
                  }
                  sx={{
                    cursor:
                      "pointer",
                    height:
                      "100%",
                    transition:
                      "0.3s",
                    "&:hover":
                      {
                        transform:
                          "translateY(-6px)",
                        boxShadow: 6,
                      },
                    borderTop: `4px solid ${card.color}`,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        color:
                          card.color,
                        mb: 1,
                      }}
                    >
                      {
                        card.icon
                      }
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight="600"
                    >
                      {
                        card.title
                      }
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {
                        card.desc
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>

        {/* 🔥 ANALYTICS SECTION */}
        <Box sx={{ mt: 5 }}>

          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
          >
            Student Analytics
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mb={3}
          >
            Performance
            overview
            (auto-generated)
          </Typography>

          {passFail && (
            <Grid
              container
              spacing={3}
            >

              {/* PIE CHART */}
              <Grid
                item
                xs={12}
                md={6}
              >
                <Card
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    mb={2}
                  >
                    Pass /
                    Fail
                    Analysis
                  </Typography>

                  <PassFailPieChart
                    data={
                      passFail
                    }
                  />
                </Card>
              </Grid>

              {/* BAR CHART */}
              <Grid
                item
                xs={12}
                md={6}
              >
                <Card
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    mb={2}
                  >
                    Marks
                    Analysis
                  </Typography>

                  <ResultBarChart
                    data={
                      marks
                    }
                  />
                </Card>
              </Grid>

            </Grid>
          )}

        </Box>

      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;