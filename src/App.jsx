import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  const isLoggedIn = !!localStorage.getItem("token"); // check token

  return (
    <Router>
      <Routes>
        {/* Auth Pages: Only for logged out users */}
        <Route
          path="/auth/*"
          element={!isLoggedIn ? <AuthRoutes /> : <Navigate to="/" replace />}
        />

        {/* Public Pages: Only for logged in or general */}
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
