import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"

const UserEducation = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Kullanıcı Eğitimi | Mersin Erdemli İşitme Cihazı
          Kullanım Rehberi
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı kullanıcı eğitimi hizmeti. İşitme cihazınızı doğru kullanmayı öğrenin, cihazınızın ömrünü uzatın ve en iyi işitme deneyimini yaşayın."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı kullanıcı eğitimi, işitme cihazı nasıl kullanılır, işitme cihazı ayarları, işitme cihazı bakımı, Mersin işitme cihazı eğitimi, Erdemli işitme cihazı kullanım rehberi, işitme merkezi eğitim hizmeti"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Kullanıcı Eğitimi</Typography>
          <Divider
            sx={{
              width: "100%",
              margin: "0 auto",
              bgcolor: "grey.400",
              my: 2
            }}
          />
          <Box
            component="img"
            src="/assets/kullanici-egitimi.webp"
            alt="Örnek Resim"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3
            }}
          />

          <List>
            <Stack spacing={2}>
              <ListItemText>
                İşitme cihazınızı en verimli şekilde kullanabilmeniz için doğru
                bilgi ve alışkanlıklara sahip olmanız büyük önem taşır. Yeni bir
                işitme cihazına uyum sağlamak, zaman ve sabır gerektiren bir
                süreçtir. Cihazın fonksiyonlarını doğru kullanmak, bakımını
                düzenli yapmak ve işitme sağlığınızı koruyacak alışkanlıklar
                edinmek, cihazdan maksimum verim almanızı sağlar.
              </ListItemText>

              <ListItemText>
                Göksu İşitme olarak, işitme cihazı kullanıcılarına kapsamlı
                eğitim hizmeti sunuyoruz. Bu eğitim kapsamında; cihazın nasıl
                takılıp çıkarılacağı, ses seviyesinin nasıl ayarlanacağı, pil
                değişimi ve şarj kullanımı gibi temel konular detaylı olarak
                anlatılmaktadır. Ayrıca, cihazın günlük bakımı, temizlik
                işlemleri ve olası sorunlarla başa çıkma yöntemleri hakkında
                bilgilendirme yapıyoruz. Kullanıcılarımızın cihazlarını güvenle
                kullanabilmeleri için her adımda yanlarında olarak, gerekli
                teknik desteği sağlıyoruz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default UserEducation
