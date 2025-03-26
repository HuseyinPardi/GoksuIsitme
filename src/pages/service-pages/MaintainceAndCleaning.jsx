import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"

const MaintainceAndCleaning = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Bakım ve Temizlik | Mersin Erdemli İşitme Cihazı Hijyen
          Hizmeti
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı bakım ve temizlik hizmeti. İşitme cihazınızın performansını artırmak ve uzun ömürlü kullanımı için profesyonel bakım ve hijyen çözümleri sunuyoruz."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı bakımı, işitme cihazı temizliği, işitme cihazı hijyeni, işitme cihazı bakım hizmeti, Mersin işitme cihazı bakımı, Erdemli işitme cihazı temizliği, işitme merkezi bakım ve temizlik"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Bakım ve Temizlik</Typography>
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
            src="/assets/bakim-ve-temizlik.webp"
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
                İşitme cihazlarının düzenli bakımı ve temizliği, cihazın
                performansını koruması ve uzun ömürlü olması için büyük önem
                taşır. Günlük kullanıma bağlı olarak cihazlar; kulak kiri, toz,
                nem ve diğer dış etkenlerden etkilenebilir. Zamanla bu
                birikintiler, cihazın ses kalitesini düşürebilir veya
                işlevselliğini azaltabilir. Bu nedenle, işitme cihazınızın
                düzenli olarak temizlenmesi ve bakımının yapılması gerekir.
              </ListItemText>

              <ListItemText>
                Göksu İşitme olarak, işitme cihazınızın en iyi şekilde
                çalışmasını sağlamak için profesyonel bakım ve temizlik
                hizmetleri sunuyoruz. Cihazınızın mikrofon, hoparlör ve hava
                kanallarını detaylı bir şekilde temizleyerek, olası
                tıkanıklıkları gideriyor ve performans kaybını önlüyoruz.
                Ayrıca, cihazınızın genel durumunu kontrol ederek gerekli
                ayarlamaları yapıyor, pil yuvası ve bağlantı noktalarını
                temizleyerek cihazınızın daha uzun süre verimli çalışmasını
                sağlıyoruz. İşitme cihazınızın bakım ve temizlik hizmetlerinden
                yararlanmak için merkezimize uğrayabilir, uzman ekibimizden
                destek alabilirsiniz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default MaintainceAndCleaning
