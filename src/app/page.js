"use client";
import React from "react";
import axios from "axios";
const Page = () => {
  const [token, setToken] = React.useState("");
  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/posts");

      console.log(response.data); // Handle response data here
      setToken(response?.data?.access_token);
    } catch (error) {
      console.error("There was a problem with the axios request:", error);
    }
  };

  React.useEffect(() => {
    postData();
  }, []);

  return <div>{`Token : ${token}`}</div>;
};

export default Page;
