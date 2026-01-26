import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./components/pages/Home/Home"));
const ContactInfos = lazy(() => import("./components/pages/Reservations/ContactInfos"));
const ConfirmedContact = lazy(() => import("./components/pages/Reservations/ConfirmedContact"));
const Conditions = lazy(() => import("./components/pages/Conditions/Conditions").then(m => ({ default: m.Conditions })));
const AionHome = lazy(() => import("./components/pages/Aion/AionHome"));

const App = () => {
return (
<>
<Layout>
<Suspense fallback={null}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<ContactInfos />} />
    <Route path="/ConfirmedContact" element={<ConfirmedContact />} />
    <Route path="/conditions" element={<Conditions />} />
    <Route path="/aion" element={<AionHome />} />
    </Routes>
  </Suspense>
</Layout>
  <SpeedInsights />
    <Analytics />
    </>
  );
};

export default App;
