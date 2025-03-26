import { useParams } from "react-router"
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Box
} from "@mui/material"
import ProductsData from "../data/products.json"

const ProductDetails = () => {
  const { brandId, id } = useParams()

  // Markanın ürünlerini bul
  const brandProducts = ProductsData.find(
    (b) => b.brandId === parseInt(brandId)
  )

  if (!brandProducts) {
    return (
      <Typography variant="h5" align="center">
        Bu markaya ait ürün bulunamadı
      </Typography>
    )
  }

  // Seçilen ürünü bul
  const product = brandProducts.products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <Typography variant="h5" align="center">
        Ürün bulunamadı
      </Typography>
    )
  }

  return (
    <>
      {/* React 19 ile gelen metadata yönetimi */}
      <title>{`${product.name} - ${brandProducts.brandName}`}</title>
      <meta
        name="description"
        content={`${
          product.features?.[0]?.description ||
          "Detaylar için hemen ziyaret edin."
        }`}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 5
        }}
      >
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt={product.name || "Ürün görseli"}
            loading="lazy" // Lazy load ekledik
          />
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              {product.name}
            </Typography>
          </CardContent>
        </Card>

        {product.features && product.features.length > 0 ? (
          <Box sx={{ mt: 4, width: "100%", maxWidth: 600 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Ürün Özellikleri
            </Typography>
            <List>
              {product.features.map((feature, index) => (
                <ListItem
                  key={index}
                  divider
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start"
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Typography variant="body1" align="center" sx={{ mt: 3 }}>
            Bu ürün için özellik bilgisi mevcut değil.
          </Typography>
        )}
      </Container>
    </>
  )
}

export default ProductDetails
