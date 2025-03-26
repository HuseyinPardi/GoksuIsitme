import { Container, Typography, Box, Divider } from "@mui/material"

const About = () => {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Hakkımızda
      </Typography>
      <Divider
        sx={{ width: "100%", margin: "0 auto", mb: 3, bgcolor: "grey.400" }}
      />
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "800px", margin: "0 auto", mb: 5 }}
      >
        10 yılı aşkın deneyimimizle, işitme sağlığınızı en üst seviyeye taşımak
        için en son teknolojiye sahip işitme cihazlarını sizlere sunuyoruz.
        İşitme kaybı yaşayan bireylerin hayat kalitesini artırmak ve onları
        yeniden seslerle buluşturmak bizim en büyük önceliğimizdir.
      </Typography>
      {/* Değerlerimiz */}
      <Box
        sx={{
          mt: 5,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // Mobilde 1 sütun, büyük ekranlarda 2 sütun
          gap: 4,
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)", // Başlık üzerine gelince büyüme efekti
              boxShadow: 6 // Gölge efektinin artması
            }
          }}
        >
          <Typography variant="h6" gutterBottom>
            🔍 Uzman Kadro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Deneyimli işitme uzmanlarımız, size en uygun çözümleri sunmak için
            burada.
          </Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6
            }
          }}
        >
          <Typography variant="h6" gutterBottom>
            🎧 Geniş Ürün Yelpazesi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dünya çapında tanınan markaların en kaliteli işitme cihazlarını
            sunuyoruz.
          </Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6
            }
          }}
        >
          <Typography variant="h6" gutterBottom>
            💡 Yenilikçi Teknoloji
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gürültü filtreleme, Bluetooth bağlantısı ve özelleştirilmiş ses
            ayarları gibi ileri teknolojiler.
          </Typography>
        </Box>
        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6
            }
          }}
        >
          <Typography variant="h6" gutterBottom>
            😊 Müşteri Memnuniyeti
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Satış öncesi ve sonrası desteğimizle her zaman yanınızdayız.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
export default About
