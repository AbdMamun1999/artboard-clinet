import React, { useEffect, useState } from "react";

const useLoginToken = (user) => {
    const [loginToken,setLoginToken] = useState('')
    const newUser = user;
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.access_token;
          localStorage.setItem("accessToken", accessToken);
          setLoginToken(data);
        });
    }
  }, [user]);
};

export default useLoginToken;
