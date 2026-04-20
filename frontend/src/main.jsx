import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  AdminDashboardPage,
  AdminLayoutPage,
  AdminLoginPage,
  BookingConfirmationPage,
  BookingFlowPage,
  LandingPage,
  VenueDetailPage,
  VenueListingPage,
} from "./pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="venues" element={<VenueListingPage />} />
          <Route path="venues/:id" element={<VenueDetailPage />} />
          <Route path="book/:venueId" element={<BookingFlowPage />} />
          <Route
            path="booking/confirmation/:id"
            element={<BookingConfirmationPage />}
          />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/bookings" element={<AdminDashboardPage />} />
          <Route path="admin/layouts" element={<AdminLayoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
