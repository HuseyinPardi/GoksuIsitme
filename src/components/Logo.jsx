import { Box } from "@mui/material"

const Logo = () => {
  return (
    <Box
      component="img"
      src="/assets/göksuişitmecihazları.webp" // Logonu proje dizinine koymalısın
      alt="Göksu İşitme Logosu"
      sx={{ width: 100, height: 75 }} // Genişliği ayarladım, gerektiğinde değiştir
    />
  )
}

export default Logo
