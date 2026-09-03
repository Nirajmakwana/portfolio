import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("Niraj Makwana Portfolio Test Suite", () => {
  test("renders portfolio application without crashing", () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Niraj Makwana/i);
    expect(nameElements.length).toBeGreaterThan(0);
  });

  test("renders navigation bar with key navigation links", () => {
    render(<App />);
    const homeLinks = screen.getAllByText(/Home/i);
    expect(homeLinks.length).toBeGreaterThan(0);
    const aboutLinks = screen.getAllByText(/About/i);
    expect(aboutLinks.length).toBeGreaterThan(0);
    const skillsLinks = screen.getAllByText(/Skills/i);
    expect(skillsLinks.length).toBeGreaterThan(0);
    const experienceLinks = screen.getAllByText(/Experience/i);
    expect(experienceLinks.length).toBeGreaterThan(0);
    const projectLinks = screen.getAllByText(/Projects/i);
    expect(projectLinks.length).toBeGreaterThan(0);
  });

  test("renders hero section with professional title and CTAs", () => {
    render(<App />);
    expect(screen.getByText(/View Featured Projects/i)).toBeInTheDocument();
    const resumeLinks = screen.getAllByText(/Resume/i);
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  test("renders verified real experience for all four companies", () => {
    render(<App />);
    expect(screen.getAllByText(/Tecvisio\.AI \/ Tecvisio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/StratoSphere IT Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Spectus Infotech/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Groovy Web/i).length).toBeGreaterThan(0);
  });

  test("renders project cards with titles from ProjectsData", () => {
    render(<App />);
    // Verify key projects render with their new title field
    expect(screen.getByText("iAudix")).toBeInTheDocument();
    expect(screen.getByText("iSail Marine")).toBeInTheDocument();
    expect(screen.getByText("SlotXpert")).toBeInTheDocument();
  });

  test("filters projects when category button is clicked", () => {
    render(<App />);
    // The new data uses "Mobile + Web" as a category value
    const mobileFilter = screen.getByRole("tab", { name: /Mobile \+ Web/i });
    expect(mobileFilter).toBeInTheDocument();
    fireEvent.click(mobileFilter);

    // Verify a Mobile + Web project renders
    expect(screen.getByText("Digital Wallet")).toBeInTheDocument();
  });

  test("filters featured projects correctly", () => {
    render(<App />);
    const featuredFilter = screen.getByRole("tab", { name: /Featured/i });
    fireEvent.click(featuredFilter);

    // Featured projects should be visible
    expect(screen.getByText("iAudix")).toBeInTheDocument();
    expect(screen.getByText("EcoDrive")).toBeInTheDocument();
  });

  test("opens and closes project details case study modal", () => {
    render(<App />);
    const detailButtons = screen.getAllByText(/Architecture & Details/i);
    expect(detailButtons.length).toBeGreaterThan(0);

    // Open modal
    fireEvent.click(detailButtons[0]);
    expect(screen.getByText(/Case Study & Technical Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Close Details/i)).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText(/Close Details/i));
    expect(screen.queryByText(/Case Study & Technical Overview/i)).not.toBeInTheDocument();
  });

  test("modal displays project details with new data fields", () => {
    render(<App />);
    const detailButtons = screen.getAllByText(/Architecture & Details/i);

    // Open modal for first project (iAudix)
    fireEvent.click(detailButtons[0]);

    // Verify modal renders new fields
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText(/Technical Challenge/i)).toBeInTheDocument();
    expect(screen.getByText(/Architectural Solution/i)).toBeInTheDocument();
    expect(screen.getByText(/Key Features & Engineering Contributions/i)).toBeInTheDocument();

    // Verify technology from the new technologies array
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();

    // Close
    fireEvent.click(screen.getByText(/Close Details/i));
  });

  test("validates required fields in contact form", () => {
    render(<App />);
    const submitBtn = screen.getByRole("button", { name: /Send Message/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your message/i)).toBeInTheDocument();
  });

  test("allows input in contact form fields", () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);

    fireEvent.change(nameInput, { target: { value: "Recruiter Name" } });
    fireEvent.change(emailInput, { target: { value: "recruiter@example.com" } });

    expect(nameInput.value).toBe("Recruiter Name");
    expect(emailInput.value).toBe("recruiter@example.com");
  });

  test("toggles theme when theme button is clicked", () => {
    render(<App />);
    const themeBtn = screen.getByRole("button", { name: /Switch to Light theme/i });
    expect(themeBtn).toBeInTheDocument();

    fireEvent.click(themeBtn);
    expect(screen.getByRole("button", { name: /Switch to Dark theme/i })).toBeInTheDocument();
  });

  test("renders 404 NotFound page correctly", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByText(/404 Error/i)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
