import { Box, Button, Container, Stack, Typography } from "@mui/material"

import FaqSection from "../components/FaqSection"
import FeaturedProducts from "../components/FeaturedProducts"
import About from "../components/About"
import Map from "../components/Map"
import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <title>İşitme Cihazlarında Kalite ve Konfor | En İyi Ürünler</title>
      <meta
        name="description"
        content="Size en uygun işitme cihazlarını keşfedin. Mersin ve Erdemli'deki şubelerimizde hizmetinizdeyiz."
      />

      {/* Hero Bölümü */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white"
        }}
      >
        <img
          src="/assets/hero-bg-optimized.webp"
          alt="Hero Background"
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)"
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h3" gutterBottom>
            İşitme Cihazlarında Kalite ve Konfor
          </Typography>
          <Typography variant="h6" gutterBottom>
            Size en uygun işitme cihazlarını keşfedin.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            aria-label="Ürünleri İncele"
            onClick={() => navigate("/brands")}
          >
            Ürünleri İncele
          </Button>
        </Container>
      </Box>
      <About />
      <FeaturedProducts />
      {/* İletişim ve Konum */}

      <Map />

      <FaqSection limit={3} showMoreButton />
    </>
  )
}

export default Home
