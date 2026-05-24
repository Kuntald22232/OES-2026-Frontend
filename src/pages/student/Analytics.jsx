import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  Grid,
  CircularProgress,
  Button,
} from "@mui/material";

import PassFailPieChart from "../../../components/analytics/PassFailPieChart";
import ResultBarChart from "../../../components/analytics/ResultBarChart";

// 🔥 NEW ADD (CURVE GRAPH)
import ResultLineChart from "../../../components/analytics/ResultLineChart";

import { getPassFail, getMarks } from "../../../services/analyticsService";

const Analytics = () => {
  const [regNo, setRegNo] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [passFailData, setPassFailData] = useState(null);
  const [marksData, setMarksData] = useState([]);

  const fetchAnalytics = async (registrationNo) => {
    if (!registrationNo) {
      setError("Please enter registration number");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const [passFailRes, marksRes] = await Promise.all([
        getPassFail(registrationNo),
        getMarks(registrationNo),
      ]);

      setPassFailData(passFailRes.data);
      setMarksData(marksRes.data);

    } catch (err) {
      console.error(err);
      setError("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Student Analytics
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
        Performance overview (auto-generated)
      </Typography>

      {/* INPUT SECTION */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          label="Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          sx={{ background: "#fff", borderRadius: 2 }}
        />

        <Button
          variant="contained"
          onClick={() => fetchAnalytics(regNo)}
          sx={{
            px: 4,
            background: "#6366f1",
            "&:hover": { background: "#4f46e5" },
          }}
        >
          Search
        </Button>
      </Box>

      {/* LOADING */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {/* ERROR */}
      {error && (
        <Typography color="error" mb={2}>
          {error}
        </Typography>
      )}

      {/* EMPTY STATE */}
      {!loading && !passFailData && marksData.length === 0 && (
        <Typography sx={{ color: "gray", textAlign: "center", mt: 6 }}>
          Enter registration number to view analytics
        </Typography>
      )}

      {/* CHARTS */}
      <Grid container spacing={4}>

        {/* PIE CHART */}
        <Grid item xs={12} md={6}>
          <Card sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 15px 35px rgba(0,0,0,0.12)",
            },
          }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Pass / Fail Analysis
            </Typography>

            {passFailData && (
              <PassFailPieChart data={passFailData} />
            )}
          </Card>
        </Grid>

        {/* BAR CHART */}
        <Grid item xs={12} md={6}>
          <Card sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 15px 35px rgba(0,0,0,0.12)",
            },
          }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Marks Overview
            </Typography>

            {marksData?.length > 0 && (
              <ResultBarChart data={marksData} />
            )}
          </Card>
        </Grid>

        {/* 🔥 CURVE / LINE GRAPH (NEW SECTION) */}
        <Grid item xs={12}>
          <Card sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 15px 35px rgba(0,0,0,0.12)",
            },
          }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Performance Trend (Curve Graph)
            </Typography>

            {marksData?.length > 0 && (
              <ResultLineChart data={marksData} />
            )}
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Analytics;