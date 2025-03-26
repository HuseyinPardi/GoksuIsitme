import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Stack
} from "@mui/material"

const EarExamination = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          Çınlama Testi | Kulak Çınlaması (Tinnitus) Değerlendirmesi
        </title>
        <meta
          name="description"
          content="Kulak çınlaması (tinnitus) hakkında bilgi alın. Çınlama testi ile değerlendirme yapın ve uzman önerileriyle kulak sağlığınızı koruyun."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="çınlama testi, tinnitus testi, kulak çınlaması, tinnitus tedavisi, kulak sağlığı, işitme kaybı, kulak rahatsızlıkları"
        />
      </head>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Çınlama Testi</Typography>
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
            src="/assets/cinlama-testi.webp"
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
                Kulak çınlaması (tinnitus), birçok kişinin yaşadığı ve farklı
                nedenlerle ortaya çıkabilen bir durumdur. Tinnitus yönetimi için
                işitme cihazlarında özel programlar ve çeşitli ses terapileri
                kullanılmaktadır. Göksu İşitme olarak, tinnitusun etkilerini
                hafifletmeye yardımcı olabilecek işitme cihazlarını sizlere
                sunuyoruz. Tinnitus yönetimi için özel olarak tasarlanmış işitme
                cihazlarıyla sizlere en uygun çözümleri sağlamaktayız. Daha
                fazla bilgi almak ve sizin için en uygun işitme cihazını
                keşfetmek için bizimle iletişime geçebilirsiniz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default EarExamination
