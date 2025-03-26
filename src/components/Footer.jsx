import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  IconButton
} from "@mui/material"
import { Facebook, Instagram, Twitter, Phone } from "@mui/icons-material"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
      <Container>
        <Grid2 container spacing={4} justifyContent="center">
          {/* Hakkımızda */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              Hakkımızda
            </Typography>
            <Typography variant="body2" color="grey.400">
              10 yılı aşkın deneyimimizle, işitme sağlığınızı en üst seviyeye
              taşımak için en son teknolojiye sahip işitme cihazlarını sizlere
              sunuyoruz. İşitme kaybı yaşayan bireylerin hayat kalitesini
              artırmak ve onları yeniden seslerle buluşturmak bizim en büyük
              önceliğimizdir.
            </Typography>
          </Grid2>

          {/* Bağlantılar */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Bağlantılar
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="/" color="grey.400" underline="hover">
                Ana Sayfa
              </Link>
              <Link href="/brands" color="grey.400" underline="hover">
                Markalar
              </Link>
              <Link href="/contact" color="grey.400" underline="hover">
                İletişim
              </Link>
            </Box>
          </Grid2>

          {/* Şubeler */}
          <Grid2 item xs={12} sm={3}>
            <Box display="flex" flexWrap="wrap" gap={4}>
              <Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">Mersin Şubemiz</Typography>
                  <Typography variant="body2" color="grey.400">
                    İnönü Mahallesi
                    <br /> Gmk Bulvarı <br />
                    Kardeşler Apt. <br />
                    No:399/1 <br />
                    Yenişehir / Mersin
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box display="flex">
                    <Phone fontSize="small" sx={{ mr: 1, color: "grey.400" }} />
                    <Typography variant="body2" color="grey.400">
                      +90 531 841 52 27
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Phone fontSize="small" sx={{ mr: 1, color: "grey.400" }} />
                    <Typography variant="body2" color="grey.400">
                      +90 506 345 15 56
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">Erdemli Şubemiz</Typography>
                  <Typography variant="body2" color="grey.400">
                    Merkez Mahallesi <br />
                    Kazım Karabekir Caddesi
                    <br />
                    Mustafa Aksay apt.
                    <br />
                    No:86/D
                    <br />
                    Erdemli Mersin
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box display="flex">
                    <Phone fontSize="small" sx={{ mr: 1, color: "grey.400" }} />
                    <Typography variant="body2" color="grey.400">
                      +90 531 841 52 27
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Phone fontSize="small" sx={{ mr: 1, color: "grey.400" }} />
                    <Typography variant="body2" color="grey.400">
                      +90 540 345 15 56
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>

          {/* Sosyal Medya */}
          <Grid2 item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Bizi Takip Edin
            </Typography>
            <Box>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>

        {/* Alt Kısım - Telif Hakkı */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="grey.500">
            © 2025 Göksu İşitme | Tüm Hakları Saklıdır
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
