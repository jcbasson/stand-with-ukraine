import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://support-ukraine-contact-your-mps.netlify.app/"
      : " http://localhost:8888/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
