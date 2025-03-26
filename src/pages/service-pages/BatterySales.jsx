import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"
const BatterySales = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Pil Satışı | Mersin Erdemli İşitme Cihazı Pilleri
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı pil satışı. İşitme cihazınız için uzun ömürlü ve kaliteli piller satın alın. Uygun fiyatlarla güvenilir işitme cihazı pilleri burada!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı pil satışı, işitme cihazı pilleri, işitme cihazı pili nereden alınır, uzun ömürlü işitme cihazı pili, Mersin işitme cihazı pili, Erdemli işitme cihazı pil satışı, işitme cihazı pil fiyatları"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Pil Satışı</Typography>
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
            src="/assets/pil-satisi.webp"
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
                İşitme cihazlarının kesintisiz ve verimli çalışabilmesi için
                doğru pil seçimi büyük önem taşır. İşitme cihazı pilleri,
                cihazın modeline ve kullanım süresine bağlı olarak farklı boyut
                ve kapasitelerde üretilir. Genellikle çinko-hava teknolojisiyle
                çalışan bu piller, uzun ömürlü olup yüksek performans sağlar.
                İşitme cihazı kullanıcıları için en uygun pil seçimini yapmak,
                cihazın verimli çalışmasını ve net bir ses kalitesi sunmasını
                sağlar.
              </ListItemText>

              <ListItemText>
                Göksu İşitme olarak, işitme cihazınızın ihtiyaç duyduğu tüm pil
                çeşitlerini sizlere sunuyoruz. Stoklarımızda dünya çapında
                güvenilirliği kanıtlanmış markaların yüksek performanslı pilleri
                bulunmaktadır. Pil seçimi ve kullanımıyla ilgili uzman
                ekibimizden destek alabilir, ihtiyacınıza uygun en iyi çözümü
                bulabilirsiniz. Uzun ömürlü, güvenilir ve uygun fiyatlı işitme
                cihazı pilleri için bizimle iletişime geçebilirsiniz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default BatterySales
