import decodeJwt from "@/utils/decodeJwt";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string | null>(null);
  async function handleSuccess(credentialResponse: CredentialResponse) {
    console.log("credentialResponse", credentialResponse);
    if (credentialResponse.credential) {
      const { payload } = decodeJwt(credentialResponse.credential);
      console.log("payload credential", payload);
      const response = await fetch("/api/google", {
        method: "POST",
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });
      const json = await response.json();
      console.log("verify", json);
      setEmail(json.email);
    }
  }
  function handleError() {
    console.log("Login failed");
  }

  return (
    <div>
      {!email && (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
        />
      )}
      {email && <p>El usuario ha iniciado sesión: {email}</p>}
    </div>
  );
}
