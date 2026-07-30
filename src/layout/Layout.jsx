import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>

      <header>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#">
              My Website
            </a>
          </div>
        </nav>
      </header>

      <main className="container my-4">
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center p-4 mt-5">
        <div className="container">
          <h5>My Website</h5>
          <p>Learn HTML, Bootstrap, JavaScript, and React with us.</p>

          <p className="mb-1">📍 Moradabad, Uttar Pradesh</p>
          <p className="mb-1">📧 info@example.com</p>
          <p className="mb-3">📞 +91 98765 43210</p>

          <hr />

          <p className="mb-0">
            © 2026 My Website. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}