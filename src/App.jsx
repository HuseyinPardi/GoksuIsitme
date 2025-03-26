import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router"
import { Box, CssBaseline } from "@mui/material"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Brands from "./pages/Brands"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import EarExamination from "./pages/service-pages/EarExamination"
import HearingTest from "./pages/service-pages/HearingTest"
import DeviceAdjustment from "./pages/service-pages/DeviceAdjustment"
import MaintainceAndCleaning from "./pages/service-pages/MaintainceAndCleaning"
import UserEducation from "./pages/service-pages/UserEducation"
import BatterySales from "./pages/service-pages/BatterySales"
import HearingAid from "./pages/information-pages/HearingAid"
import HearingAidChoice from "./pages/information-pages/HearingAidChoice"
import HearingLoss from "./pages/information-pages/HearingLoss"
import HearingAidUse from "./pages/information-pages/HearingAidUse"
import ElderlyHearing from "./pages/information-pages/ElderlyHearing"
import ChildHearing from "./pages/information-pages/ChildHearing"
import Faq from "./pages/Faq"
import WhatsAppButton from "./components/WhatsAppButton"
import ProductDetails from "./pages/ProductDetails"
import FilterReplacement from "./pages/service-pages/FilterReplacement"
import SgkAgreement from "./pages/service-pages/SgkAgreement"
import TubingReplacement from "./pages/service-pages/TubingReplacement"
import EarMold from "./pages/service-pages/EarMold"

function App() {
  return (
    <Router>
      <CssBaseline />
      <ScrollToTop />
      <MainLayout />
    </Router>
  )
}

function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands/:brandId" element={<Products />} />
        <Route
          path="/brands/:brandId/products/:id"
          element={<ProductDetails />}
        />

        {/* Hizmet Sayfaları Yönlendirmeleri */}
        <Route path="/services/cinlama-testi" element={<EarExamination />} />
        <Route path="/services/isitme-testi" element={<HearingTest />} />
        <Route path="/services/teknik-servis" element={<DeviceAdjustment />} />
        <Route
          path="/services/bakim-ve-temizlik"
          element={<MaintainceAndCleaning />}
        />

        <Route path="/services/kullanici-egitimi" element={<UserEducation />} />
        <Route path="/services/pil-satisi" element={<BatterySales />} />
        <Route
          path="/services/filtre-satisi-ve-degisimi"
          element={<FilterReplacement />}
        />
        <Route path="/services/sgk-anlasmasi" element={<SgkAgreement />} />
        <Route
          path="/services/hortum-degisimi"
          element={<TubingReplacement />}
        />
        <Route path="/services/kulak-kalibi" element={<EarMold />} />

        {/* Bilgi Sayfaları Yönlendirmeleri */}
        <Route
          path="/information/isitme-cihazi-nedir"
          element={<HearingAid />}
        />
        <Route
          path="/information/isitme-cihazi-nasil-secilir"
          element={<HearingAidChoice />}
        />
        <Route
          path="/information/isitme-kaybi-nedir"
          element={<HearingLoss />}
        />
        <Route
          path="/information/isitme-cihazi-nasil-kullanilir"
          element={<HearingAidUse />}
        />
        <Route
          path="/information/yaslilarda-isitme-kaybi"
          element={<ElderlyHearing />}
        />
        <Route
          path="/information/cocuklarda-isitme-kaybi"
          element={<ChildHearing />}
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Box>
  )
}

export default App
