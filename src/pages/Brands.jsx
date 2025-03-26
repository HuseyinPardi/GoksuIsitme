import { Container, Grid2, Typography, Divider } from "@mui/material"
import brands from "../data/brands.json"
import BrandCard from "../components/BrandCard"

const Brands = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>İşitme Cihazı Markaları | En İyi Ürünleri Keşfedin</title>
        <meta
          name="description"
          content="İşitme cihazı markalarını keşfedin. Son teknoloji işitme cihazlarımız arasından size en uygun olanını bulun."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="İşitme Cihazları Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı markaları, işitme cihazı, en iyi işitme cihazı, işitme cihazı modelleri, işitme cihazı fiyatları"
        />
        {/* Open Graph (Facebook, LinkedIn) Meta Etiketleri */}
        <meta
          property="og:title"
          content="İşitme Cihazı Markaları | En İyi Ürünleri Keşfedin"
        />
        <meta
          property="og:description"
          content="İşitme cihazı markalarını keşfedin. Son teknoloji işitme cihazlarımız arasından size en uygun olanını bulun."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.siteniz.com/brands" />
        <meta
          property="og:image"
          content="https://www.siteniz.com/assets/brands-banner.jpg"
        />

        {/* Twitter (X) İçin SEO Meta Etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="İşitme Cihazı Markaları | En İyi Ürünleri Keşfedin"
        />
        <meta
          name="twitter:description"
          content="İşitme cihazı markalarını keşfedin. Son teknoloji işitme cihazlarımız arasından size en uygun olanını bulun."
        />
        <meta
          name="twitter:image"
          content="https://www.siteniz.com/assets/brands-banner.jpg"
        />
      </head>
      <Container sx={{ my: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Kendinize Uygun İşitme Cihazınızı Bulun
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Son teknoloji işitme cihazlarımızdan size uygun olanını bulmanıza
          yardımcı olmaktan memnuniyet duyarız.
        </Typography>
        <Divider
          sx={{
            width: "100%",
            margin: "0 auto",
            mb: 3,
            bgcolor: "grey.400",
            mt: 2
          }}
        />
        <Grid2 container spacing={3} justifyContent="center">
          {brands.map((brand) => (
            <Grid2 key={brand.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <BrandCard brand={brand} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  )
}

export default Brands
