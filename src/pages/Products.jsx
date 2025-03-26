import { useParams, useNavigate } from "react-router"
import {
  Container,
  Grid2,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider
} from "@mui/material"
import productsData from "../data/products.json"
import brandsData from "../data/brands.json"

const Products = () => {
  const { brandId } = useParams()
  const navigate = useNavigate()
  const brandProducts = productsData.find(
    (b) => b.brandId === parseInt(brandId)
  )

  const brand = brandsData.find((b) => b.id === parseInt(brandId))
  const handleClick = (productId) => {
    navigate(`/brands/${brandId}/products/${productId}`)
  }
  return (
    <>
      <title>
        {brand ? `${brand.name} Ürünleri - En İyi Seçenekler` : "Ürünler"}
      </title>
      <meta
        name="description"
        content={
          brand
            ? `${brand.name} markasına ait en iyi ürünleri keşfedin.`
            : "Tüm ürünlerimizi inceleyin."
        }
      />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4
        }}
      >
        <Container sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 7 }}>
            {brand ? `${brand.name} Ürünleri` : "Ürünler"}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              margin: "0 auto",
              mb: 3,
              bgcolor: "grey.400"
            }}
          />
          <Grid2
            container
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
          >
            {brandProducts.products.map((product) => (
              <Grid2
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6
                    }
                  }}
                  onClick={() => handleClick(product.id)} // Ürüne tıklanınca ID ile yönlendir
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                      objectFit: "cover"
                    }}
                    image={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" textAlign="center">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
          <Divider
            sx={{
              width: "100%",
              margin: "0 auto",
              mt: 3,
              bgcolor: "grey.400"
            }}
          />
        </Container>
      </Box>
    </>
  )
}

export default Products
