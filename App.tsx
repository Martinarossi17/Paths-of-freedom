import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import MountainsPage from "@/react-app/pages/Mountains";
import SeaBeachPage from "@/react-app/pages/SeaBeach";
import CitiesPage from "@/react-app/pages/Cities";
import LakesPage from "@/react-app/pages/Lakes";
import CVPage from "@/react-app/pages/CV";
import TripPage from "@/react-app/pages/Trip";
import MyProjectPage from "@/react-app/pages/MyProject";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mountains" element={<MountainsPage />} />
        <Route path="/sea-beach" element={<SeaBeachPage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/lakes" element={<LakesPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/trip" element={<TripPage />} />
        <Route path="/my-project" element={<MyProjectPage />} />
      </Routes>
    </Router>
  );
}
