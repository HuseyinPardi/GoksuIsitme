import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material"
import { useNavigate } from "react-router"

const BrandCard = ({ brand }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/brands/${brand.id}`)
  }
  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 500,
        m: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "auto", maxHeight: 200, objectFit: "contain" }}
        image={brand.image}
        alt={brand.name}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6">{brand.name}</Typography>
        <Box sx={{ flexGrow: 1 }} /> {/* Boşluğu minimize etmek için eklendi */}
        <Typography variant="body2" color="text.secondary">
          {brand.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BrandCard
