import { Typography } from "@mui/material"
import Map from "../components/Map"

const Contact = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>İletişim | Mersin ve Erdemli Şubelerimiz</title>
        <meta
          name="description"
          content="Mersin ve Erdemli şubelerimizin iletişim bilgileri ve konumlarını burada bulabilirsiniz. Hemen ziyaret edin!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="İşitme Cihazları Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazları, mersin, erdemli, duyma cihazları, işitme merkezi"
        />
      </head>
      <Map />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}
      >
        Daha Fazla Bilgi İçin Bizimle İletişime Geçebilirsiniz
      </Typography>
    </>
  )
}

export default Contact
