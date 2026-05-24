import React,
{ useState } from "react";

import { addResult }
from "../../services/resultService";

const StudentResults = () => {

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
"Result Added Successfully"
            );

            setFormData({

                registrationNo:
                "",

                subject: "",

                marks: "",

                grade: ""
            });

        } catch (error) {

            console.error(error);

            alert(
"Error adding result"
            );
        }
    };

    return (

<div className="container mt-5">

<div className="card p-4 shadow">

<h2 className="text-center mb-4">

Teacher Result Panel

</h2>

<form
onSubmit={handleSubmit}>

<input
type="text"
name="registrationNo"
placeholder=
"Registration No"

className=
"form-control mb-3"

value={
formData.registrationNo
}

onChange=
{handleChange}

required
/>

<input
type="text"
name="subject"
placeholder=
"Subject"

className=
"form-control mb-3"

value={
formData.subject
}

onChange=
{handleChange}

required
/>

<input
type="number"
name="marks"
placeholder=
"Marks"

className=
"form-control mb-3"

value={
formData.marks
}

onChange=
{handleChange}

required
/>

<input
type="text"
name="grade"
placeholder=
"Grade"

className=
"form-control mb-3"

value={
formData.grade
}

onChange=
{handleChange}

required
/>

<button
className=
"btn btn-success w-100">

Submit Result

</button>

</form>

</div>
</div>
    );
};

export default
StudentResults;