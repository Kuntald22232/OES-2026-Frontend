import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Stack,
  Paper
} from "@mui/material";

import {
  School,
  AdminPanelSettings,
  Psychology,
  Analytics
} from "@mui/icons-material";

import { useNavigate }
from "react-router-dom";

const Home = () => {

  const navigate =
  useNavigate();

  const features = [

    {
      title:
      "Student Portal",

      description:
      "Attend exams, view results and track academic performance.",

      icon:
      <School
      sx={{
      fontSize: 50
      }}
      />
    },

    {
      title:
      "Teacher Management",

      description:
      "Create exams, add questions and evaluate student performance.",

      icon:
      <AdminPanelSettings
      sx={{
      fontSize: 50
      }}
      />
    },

    {
      title:
      "AI Proctoring",

      description:
      "Prevent cheating with smart AI-powered monitoring system.",

      icon:
      <Psychology
      sx={{
      fontSize: 50
      }}
      />
    },

    {
      title:
      "Analytics Dashboard",

      description:
      "Advanced reporting and detailed performance analytics.",

      icon:
      <Analytics
      sx={{
      fontSize: 50
      }}
      />
    }
  ];

  return (

<Box
sx={{
minHeight:
"100vh",

background:
"linear-gradient(135deg,#0f172a,#1e293b)",

color:
"white"
}}
>

{/* Navbar */}

<AppBar
position="static"

sx={{

background:
"rgba(255,255,255,0.05)",

backdropFilter:
"blur(12px)",

boxShadow:
"none",

borderBottom:
"1px solid rgba(255,255,255,0.1)"
}}
>

<Toolbar
sx={{

display: "flex",

justifyContent:
"space-between"
}}
>

<Typography
variant="h4"

sx={{
fontWeight:
700
}}
>

Online Examination System

</Typography>

<Stack
direction="row"
spacing={2}
>

<Button
variant="outlined"

onClick={() =>
navigate("/login")
}

sx={{

color:
"white",

borderColor:
"#475569",

"&:hover": {

borderColor:
"#2563eb",

background:
"rgba(37,99,235,0.1)"
}
}}
>

Login

</Button>

<Button
variant="contained"

onClick={() =>
navigate("/register")
}

sx={{

background:
"#2563eb",

borderRadius:
"10px",

px: 3,

"&:hover": {

background:
"#1d4ed8"
}
}}
>

Register

</Button>

</Stack>

</Toolbar>

</AppBar>

{/* Hero Section */}

<Container
maxWidth="lg"
>

<Box
sx={{

textAlign:
"center",

py: 12
}}
>

<Typography
variant="h2"

sx={{

fontWeight:
800,

mb: 3,

background:
"linear-gradient(to right,#60a5fa,#c084fc)",

WebkitBackgroundClip:
"text",

WebkitTextFillColor:
"transparent"
}}
>

Online Examination
System

</Typography>

<Typography
variant="h6"

sx={{

maxWidth:
"850px",

mx:
"auto",

color:
"#cbd5e1",

lineHeight:
1.8,

mb: 5
}}
>

Transform digital education
with an intelligent online
examination platform built
for institutions, teachers,
students and administrators.

Secure, scalable and
AI-powered assessment
experience.

</Typography>

<Stack
direction="row"
spacing={3}

justifyContent=
"center"
>

<Button
size="large"
variant="contained"

onClick={() =>
navigate("/login")
}

sx={{

px: 5,
py: 1.7,

fontSize:
"16px",

borderRadius:
"12px",

background:
"#2563eb"
}}
>

Get Started

</Button>

<Button
size="large"
variant="outlined"

onClick={() =>
navigate("/register")
}

sx={{

px: 5,
py: 1.7,

fontSize:
"16px",

borderRadius:
"12px",

color:
"white",

borderColor:
"#64748b"
}}
>

Create Account

</Button>

</Stack>

</Box>

{/* Features */}

<Box
sx={{
py: 6
}}
>

<Typography
variant="h3"

sx={{

textAlign:
"center",

fontWeight:
700,

mb: 6
}}
>

Platform Features

</Typography>

<Grid
container
spacing={4}
>

{
features.map(
(feature,index)=>(

<Grid
item
xs={12}
sm={6}
md={3}

key={index}
>

<Card
sx={{

height:
"100%",

background:
"rgba(255,255,255,0.06)",

backdropFilter:
"blur(12px)",

border:
"1px solid rgba(255,255,255,0.08)",

borderRadius:
"24px",

transition:
"0.3s",

"&:hover": {

transform:
"translateY(-8px)",

boxShadow:
"0px 12px 30px rgba(0,0,0,0.3)"
}
}}
>

<CardContent
sx={{
p: 4
}}
>

<Box
sx={{

display:
"flex",

justifyContent:
"center",

mb: 2,

color:
"#60a5fa"
}}
>

{feature.icon}

</Box>

<Typography
variant="h6"

sx={{

textAlign:
"center",

fontWeight:
700,

color:
"white",

mb: 2
}}
>

{feature.title}

</Typography>

<Typography
sx={{

textAlign:
"center",

color:
"#cbd5e1",

lineHeight:
1.8
}}
>

{feature.description}

</Typography>

</CardContent>

</Card>

</Grid>
))
}

</Grid>

</Box>

{/* Footer */}

<Paper
elevation={0}

sx={{

mt: 8,

py: 3,

textAlign:
"center",

background:
"transparent",

borderTop:
"1px solid rgba(255,255,255,0.1)"
}}
>

<Typography
sx={{
color:
"#94a3b8"
}}
>

© 2026 OES
(Online Examination System)

</Typography>

</Paper>

</Container>

</Box>
  );
};

export default Home;