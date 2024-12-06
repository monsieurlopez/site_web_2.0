import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import Reservations from "./components/pages/Reservations/Reservations";
import ConfirmedReservation from "./components/pages/Reservations/confirmedReservation";
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Reservations />} />
          <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
        </Routes>
      </Layout>
      <SpeedInsights />
    </>
  );
};

export default App;
