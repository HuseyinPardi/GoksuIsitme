import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box
} from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const featuredProducts = [
  {
    id: 1,
    name: "Philips İşitme Cihazları",
    description: "Gelişmiş ses işleme teknolojisi.",
    image: "/assets/hearing-aid1.webp"
  },
  {
    id: 2,
    name: "Vista İşitme Cihazları",
    description: "Konforlu tasarım ve uzun pil ömrü.",
    image: "/assets/Vista-V-R.webp"
  },
  {
    id: 3,
    name: "A&M İşitme Cihazları",
    description: "Yüksek kaliteli ses deneyimi.",
    image: "/assets/RIC.webp"
  },
  {
    id: 4,
    name: "Oticon İşitme Cihazları",
    description: "Akıllı bağlantı özellikleri.",
    image: "/assets/Oticon-Play-PX-miniRITE-T.webp"
  }
]

const FeaturedProducts = () => {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 6 }}>
      {" "}
      {/* Arka plan rengi eklendi */}
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Öne Çıkan Ürünler
        </Typography>

        <Box sx={{ position: "relative", px: 4 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            style={{ paddingBottom: "40px" }}
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Card sx={{ maxWidth: 345, m: "auto", boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturedProducts
