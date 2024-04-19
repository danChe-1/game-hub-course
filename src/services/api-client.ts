import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72586899785c47489a27a03aa6397872",
  },
});

