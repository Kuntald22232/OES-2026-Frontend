import React,
{ useState }
from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
  getResult
}
from "../../services/resultService";

const Result = () => {

  const [
    registrationNo,
    setRegistrationNo
  ] = useState("");

  const [
    results,
    setResults
  ] = useState([]);

  const handleSearch =
  async () => {

    try {

      const response =
      await getResult(
        registrationNo
      );

      setResults(
        response.data
      );

    } catch {

      alert(
"No Result Found"
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
"linear-gradient(135deg, #e0f2fe, #dbeafe)",

padding: "20px"
}}
>

<div
style={{

width: "100%",
maxWidth: "850px",

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

color:
"#2563eb",

fontWeight:
"bold"
}}
>

Check Exam Result

</h2>

<div
style={{

display: "flex",
gap: "10px",

marginBottom:
"25px"
}}
>

<input
type="text"

placeholder=
"Enter Registration No"

value=
{registrationNo}

onChange=
{(e)=>

setRegistrationNo(
e.target.value
)
}

style={{

flex: 1,

padding: "14px",

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

<button
onClick=
{handleSearch}

style={{

padding:
"14px 28px",

background:
"linear-gradient(90deg,#2563eb,#06b6d4)",

color:
"white",

border:
"none",

borderRadius:
"10px",

fontSize:
"16px",

fontWeight:
"bold",

cursor:
"pointer"
}}
>

Search

</button>

</div>

<div
style={{

overflowX:
"auto"
}}
>

<table
style={{

width: "100%",

borderCollapse:
"collapse",

textAlign:
"center"
}}
>

<thead>

<tr
style={{

background:
"#2563eb",

color:
"white"
}}
>

<th
style={{
padding:
"14px",

border:
"1px solid #ddd"
}}
>

Subject

</th>

<th
style={{
padding:
"14px",

border:
"1px solid #ddd"
}}
>

Marks

</th>

<th
style={{
padding:
"14px",

border:
"1px solid #ddd"
}}
>

Grade

</th>

</tr>

</thead>

<tbody>

{
results.length > 0 ?

results.map(
(result,index)=>(

<tr
key={index}

style={{
background:
index % 2 === 0
? "#f8fafc"
: "#ffffff"
}}
>

<td
style={{
padding:
"12px",

border:
"1px solid #ddd"
}}
>
{result.subject}
</td>

<td
style={{
padding:
"12px",

border:
"1px solid #ddd"
}}
>
{result.marks}
</td>

<td
style={{
padding:
"12px",

border:
"1px solid #ddd"
}}
>
{result.grade}
</td>

</tr>
))

:

<tr>

<td
colSpan="3"

style={{

padding:
"20px",

color:
"gray"
}}
>

No Results Yet

</td>

</tr>
}

</tbody>

</table>

</div>

</div>

</div>

</DashboardLayout>
  );
};

export default Result;