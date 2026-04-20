import { render, screen } from "@testing-library/react";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { LandingPage, VenueListingPage } from "./pages";

function renderRoutes(entry = "/") {
  render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="venues" element={<VenueListingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

test("renders landing page parity sections", () => {
  renderRoutes("/");

  expect(screen.getAllByText("Luxe Venue").length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "Host Unforgettable Events" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Featured Venues" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Why Luxe Venue?" })).toBeInTheDocument();
});

test("renders venue listing hierarchy", () => {
  renderRoutes("/venues");

  expect(screen.getByText("Available Venues (12)")).toBeInTheDocument();
  expect(screen.getByText("Grand Atrium")).toBeInTheDocument();
});
