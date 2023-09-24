import axios from "axios";

const mailjet = axios.create({
  baseURL: "https://api.mailjet.com/v3.1",
  auth: {
    username: process.env.MAILJET_API_KEY,
    password: process.env.MAILJET_SECRET_KEY,
  },
});

export default mailjet;
