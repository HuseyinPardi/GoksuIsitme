import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"

const FilterReplacement = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>İşitme Cihazı Filtre Satışı ve Değişimi | Mersin Erdemli</title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı filtre satışı ve değişimi. İşitme cihazınızın performansını korumak için kaliteli filtreler satın alın ve düzenli filtre değişimi yaptırın."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı filtre satışı, işitme cihazı filtre değişimi, işitme cihazı filtreleri, işitme cihazı bakımı, Mersin işitme cihazı filtresi, Erdemli işitme cihazı filtre değişimi, işitme cihazı aksesuarları"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Filtre Satışı ve Değişimi</Typography>
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
            src="/assets/filtre-satisi-ve-degisimi.webp"
            alt="Örnek Resim"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3
            }}
          />

          <List>
            <Stack spacing={3}>
              <ListItemText>
                İşitme cihazlarının uzun ömürlü ve verimli çalışabilmesi için
                düzenli bakım şarttır. Özellikle RIC (Kulak İçi Hoparlörlü)
                cihazlar ve kulak içi işitme cihazları, ses çıkışını korumak ve
                yabancı maddelerin hoparlöre zarar vermesini önlemek amacıyla
                özel filtreler kullanır. Kulak arkası (BTE) işitme cihazlarında
                ise bu filtreler ses kanalına entegre edilmiştir.
              </ListItemText>

              <ListItemText>
                Zamanla, bu filtreler kulak kiri ve toz gibi etkenlerden dolayı
                tıkanabilir. Bu durumda kullanıcılar sesi daha az duyduklarını
                ya da tamamen kaybettiklerini fark edebilirler. Ancak
                endişelenmeye gerek yok! Filtrenizi düzenli aralıklarla
                değiştirerek cihazınızın performansını ilk günkü gibi
                koruyabilirsiniz.
              </ListItemText>
              <ListItemText>
                Merkezimizden satın aldığınız filtreler orijinal ve cihazınıza
                uygun olup, değişim sürecinde sizlere adım adım rehberlik
                ediyoruz. Ayrıca, ilk defa filtre değişimi yapacak
                kullanıcılarımız için detaylı bir kullanım kılavuzu ve pratik
                öneriler sunuyoruz. Böylece filtre değişimi konusunda kendinizi
                güvende hissedebilir ve ihtiyaç duyduğunuzda kolaylıkla işlemi
                gerçekleştirebilirsiniz.
              </ListItemText>
              <ListItemText>
                İşitme konforunuzdan ödün vermeyin! Size en uygun filtre
                seçenekleri ve uzman desteğimiz için bizimle iletişime geçin.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default FilterReplacement
