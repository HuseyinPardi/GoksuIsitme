import { Box } from "@mui/material"

const Logo = () => {
  return (
    <Box
      component="img"
      src="/assets/son-tasarım-logo.webp" // Logonu proje dizinine koymalısın
      alt="Göksu İşitme Logosu"
      sx={{ width: 80, height: "auto" }} // Genişliği ayarladım, gerektiğinde değiştir
    />
  )
}

export default Logo
