/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import User from "./User";
import Charts from "./Chart";
import Google from "./Google";

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <>
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="1182376612380831"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.email}</h2>
          <img src={profile.picture.data.url} />
        </div>
      ) : (
        ""
      )}
    </div>
    <Charts/>
    <User/>
    <Google/>
    </>
  );
}

export default App;