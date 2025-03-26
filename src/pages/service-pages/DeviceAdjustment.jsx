import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"

const DeviceAdjustment = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Teknik Servis | Mersin Erdemli İşitme Cihazı Bakım ve
          Onarım
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı teknik servis hizmeti. İşitme cihazı tamiri, bakımı ve onarımı için güvenilir ve profesyonel çözümler sunuyoruz."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı teknik servis, işitme cihazı tamiri, işitme cihazı bakımı, işitme cihazı onarımı, Mersin işitme cihazı servisi, Erdemli işitme cihazı tamiri, işitme merkezi teknik servis"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Teknik Servis</Typography>
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
            src="/assets/teknik-servis.webp"
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
                İşitme cihazları, günlük kullanıma bağlı olarak zamanla bakım ve
                onarıma ihtiyaç duyabilir. Dış etkenler, nem, toz veya yanlış
                kullanım nedeniyle cihazlarda performans düşüşü, ses kesilmeleri
                veya parça hasarları meydana gelebilir. Bu tür durumlarda,
                profesyonel teknik servis desteği almak cihazınızın ömrünü
                uzatır ve işitme deneyiminizi kesintisiz hale getirir.
              </ListItemText>

              <ListItemText>
                Göksu İşitme olarak, işitme cihazlarınız için güvenilir ve hızlı
                teknik servis hizmeti sunuyoruz. Cihazlarınızdaki arızaları
                tespit ediyor, gerekli onarımları yapıyor ve yazılım
                güncellemeleri ile cihazınızın en iyi performansta çalışmasını
                sağlıyoruz. Ayrıca, pil yuvası, hoparlör ve mikrofon gibi hassas
                bileşenlerin temizliğini ve bakımını gerçekleştiriyoruz. Teknik
                servisimizde, tüm işlemler uzman ekibimiz tarafından titizlikle
                yapılmakta olup, ihtiyaca göre yedek parça değişimi ve garanti
                kapsamında destek hizmetleri sunulmaktadır. İşitme cihazınızla
                ilgili herhangi bir teknik sorun yaşarsanız, merkezimize
                uğrayarak profesyonel çözümlerimizden yararlanabilirsiniz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default DeviceAdjustment
