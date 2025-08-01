import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import ContactInfos from "./components/pages/Reservations/ContactInfos";
import ConfirmedContact from "./components/pages/Reservations/ConfirmedContact";
import { Conditions } from "./components/pages/Conditions/Conditions";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactInfos />} />
          <Route path="/ConfirmedContact" element={<ConfirmedContact />} />
          <Route path="/conditions" element={<Conditions />} />
        </Routes>
      </Layout>
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
