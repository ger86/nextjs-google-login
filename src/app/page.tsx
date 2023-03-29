"use client";
import Login from "@/components/Login";
import { CLIENT_ID } from "@/consts/clientId";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <main>
        <div>
          <h1>💛 Google OAuth</h1>
          <Login />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
