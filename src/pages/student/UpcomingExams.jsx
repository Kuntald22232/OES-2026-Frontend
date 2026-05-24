import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";

import { getNotices } from "../../services/examApi";

const UpcomingExams = () => {
  const [notices, setNotices] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadNotices =
      async () => {
        try {
          const res =
            await getNotices();

          setNotices(res.data);
        } catch (err) {
          console.error(
            "Failed to load notices",
            err
          );
        } finally {
          setLoading(false);
        }
      };

    loadNotices();
  }, []);

  return (
    <Box mt={5}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        📢 Teacher Notices
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : notices.length === 0 ? (
        <Typography>
          No notices available
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {notices.map((notice) => (
            <Grid
              item
              xs={12}
              md={6}
              key={notice.id}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardContent>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {notice.title}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    href={`http://localhost:8080/uploads/notices/${notice.fileName}`}
                    target="_blank"
                  >
                    Download Notice
                  </Button>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UpcomingExams;