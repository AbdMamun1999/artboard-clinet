import { useEffect, useState } from "react";

const useSignupToken = (user) => {
  const [signupToken, setSignupToken] = useState("");
  const newUser = user;


  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body:JSON.stringify(newUser)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          const accessToken = data.access_token;
          localStorage.setItem('accessToken',accessToken)
          setSignupToken(data)
        });
    }

  }, [user]);
  return signupToken;
};

export default useSignupToken;
