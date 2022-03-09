import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWEwYTMwMTE5ZmM2MmMwNTE1Y2UwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjYzNTE3NiwiZXhwIjoxNjQ2ODk0Mzc2fQ.vUrHA3Scj-ldoKXAqWDlxnYvERKTgZHJwESFtizbMZM";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
}) 