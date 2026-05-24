import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
  addResult
} from "../../services/resultService";

const MarksInput = () => {

  const [formData,
  setFormData] =
  useState({

    registrationNo: "",
    subject: "",
    marks: "",
    grade: ""
  });

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      await addResult(
        formData
      );

      alert(
"Marks Added Successfully"
      );

      setFormData({

        registrationNo: "",
        subject: "",
        marks: "",
        grade: ""
      });

    } catch (error) {

      console.log(error);

      alert(
"Failed To Add Marks"
      );
    }
  };

  return (

<DashboardLayout>

<div
style={{

minHeight: "100vh",

display: "flex",

justifyContent:
"center",

alignItems:
"center",

background:
"linear-gradient(135deg, #dbeafe, #f0f9ff)",

padding: "20px"
}}
>

<div
style={{

width: "100%",
maxWidth: "500px",

background:
"#ffffff",

padding: "35px",

borderRadius:
"20px",

boxShadow:
"0px 10px 30px rgba(0,0,0,0.15)"
}}
>

<h2
style={{

textAlign:
"center",

marginBottom:
"25px",

color: "#2563eb",

fontWeight:
"bold"
}}
>

Teacher Marks Panel

</h2>

<form
onSubmit=
{handleSubmit}
>

<input
type="text"

name=
"registrationNo"

placeholder=
"Student Registration No"

value={
formData.registrationNo
}

onChange=
{handleChange}

required

style={{

width: "100%",

padding: "14px",

marginBottom:
"15px",

border:
"1px solid #ccc",

borderRadius:
"10px",

fontSize:
"16px",

outline:
"none"
}}
/>

<input
type="text"

name="subject"

placeholder=
"Subject Name"

value={
formData.subject
}

onChange=
{handleChange}

required

style={{

width: "100%",

padding: "14px",

marginBottom:
"15px",

border:
"1px solid #ccc",

borderRadius:
"10px",

fontSize:
"16px"
}}
/>

<input
type="number"

name="marks"

placeholder=
"Marks"

value={
formData.marks
}

onChange=
{handleChange}

required

style={{

width: "100%",

padding: "14px",

marginBottom:
"15px",

border:
"1px solid #ccc",

borderRadius:
"10px",

fontSize:
"16px"
}}
/>

<input
type="text"

name="grade"

placeholder=
"Grade"

value={
formData.grade
}

onChange=
{handleChange}

required

style={{

width: "100%",

padding: "14px",

marginBottom:
"20px",

border:
"1px solid #ccc",

borderRadius:
"10px",

fontSize:
"16px"
}}
/>

<button
type="submit"

style={{

width: "100%",

padding: "14px",

background:
"linear-gradient(90deg,#2563eb,#06b6d4)",

color: "white",

border: "none",

borderRadius:
"12px",

fontSize:
"18px",

fontWeight:
"bold",

cursor:
"pointer",

transition:
"0.3s"
}}
>

Submit Marks

</button>

</form>

</div>
</div>

</DashboardLayout>
  );
};

export default MarksInput;