import axios from "axios";

const BASE_URL =
"https://onlineexamsystem2026.onrender.com/api/results";

export const addResult =
async (resultData) => {

    return await axios.post(
        BASE_URL,
        resultData
    );
};

export const getResult =
async (registrationNo) => {

    return await axios.get(
`${BASE_URL}/${registrationNo}`
    );
};