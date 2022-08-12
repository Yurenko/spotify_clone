import { useEffect, useState } from "react";
import "./App.css";
import { accessUrl, getTokenFromResponse } from "./Auth/Auth";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">
      <a href={accessUrl}>Log in with Spotify</a>
      {token}
    </div>
  );
}

export default App;
