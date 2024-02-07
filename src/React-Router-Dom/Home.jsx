import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Corrected import statement

const Home = () => {
  const [User, setUser] = useState({});

  const handleLogout = () => {
    setUser({})
  }

  return (
    <>
      {Object.keys(User).length === 0 ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credentailResponseDecoded = jwtDecode(
              credentialResponse.credential
            );
            setUser(credentailResponseDecoded);
            console.log(credentailResponseDecoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div>
          {User.name}

          <p>{User.email}</p>
            <img src={User.picture} alt="" />
            
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
      )}
    </>
  );
};

export default Home;

{
}
