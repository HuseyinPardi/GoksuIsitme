import {
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  ListItem,
  ListItemIcon
} from "@mui/material"
import { CheckCircle } from "lucide-react"

const ChildHearing = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>Çocuklarda İşitme Kaybı | Mersin Erdemli İşitme Sağlığı</title>
        <meta
          name="description"
          content="Çocuklarda işitme kaybı neden olur, belirtileri nelerdir ve nasıl tedavi edilir? Mersin Erdemli'de çocuklarda işitme sağlığı hakkında detaylı bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="çocuklarda işitme kaybı, bebeklerde işitme kaybı, çocuk işitme testi, işitme kaybı belirtileri, çocuklarda duyma sorunu, Mersin işitme kaybı, Erdemli işitme merkezi"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container
          sx={{
            my: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 2
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            Çocuklarda İşitme Kaybı
          </Typography>
          <Divider
            sx={{
              width: "100%",
              maxWidth: "1000px",
              margin: "0 auto",
              bgcolor: "grey.400",
              my: 2
            }}
          />

          <Card
            sx={{
              width: "100%",
              maxWidth: 1000
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: 250, sm: 350, md: 500 }
              }}
              image="/assets/cocuklarda-isitme-kaybi.webp"
              alt="Çocuklarda İşitme Kaybı"
              loading="lazy"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  Çocuklarda İşitme Kaybı
                </Typography>

                <Typography variant="body1">
                  İşitme kaybı, çocukların konuşma ve dil gelişimini doğrudan
                  etkileyen önemli bir durumdur. Bebeklik döneminde işitme
                  kaybının erken teşhis edilmesi, ilerleyen yaşlarda iletişim ve
                  öğrenme yeteneklerinin sağlıklı gelişimi açısından kritik
                  öneme sahiptir. İşitme kaybı doğuştan olabileceği gibi,
                  çevresel faktörler veya enfeksiyonlar nedeniyle sonradan da
                  gelişebilir.
                </Typography>
                <Typography variant="h6">
                  Çocuklarda İşitme Kaybının Nedenleri
                </Typography>
                <List>
                  {[
                    "Genetik faktörler ve doğuştan gelen işitme kayıpları",
                    "Hamilelik sırasında geçirilen enfeksiyonlar",
                    "Orta kulak enfeksiyonları (Otitis Media)",
                    "Gürültüye uzun süre maruz kalma",
                    "Ototoksik ilaçların kullanımı"
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6">
                  Çocuklarda İşitme Kaybının Belirtileri
                </Typography>
                <List>
                  {[
                    "Bebeklerde seslere tepki vermeme",
                    "Konuşma gelişiminde gecikme",
                    "Televizyonu çok yüksek sesle dinleme",
                    "İnsanların söylediklerini sık sık tekrar ettirme",
                    "Derslerde dikkat eksikliği ve akademik başarısızlık"
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6">
                  Çocuklarda İşitme Kaybı Nasıl Yönetilir?
                </Typography>
                <List>
                  {[
                    "Erken teşhis için işitme testleri yaptırılmalı",
                    "İşitme cihazları veya koklear implantlar kullanılabilir",
                    "Konuşma ve dil terapisi ile destek sağlanmalı",
                    "Eğitim desteği ve özel öğretim yöntemleri uygulanmalı",
                    "İletişim teknolojileriyle çocuk desteklenmeli"
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="body1">
                  Çocuklarda işitme kaybı erken teşhis edildiğinde, doğru
                  müdahalelerle sağlıklı bir iletişim gelişimi sağlanabilir.
                  Eğer işitme kaybı şüphesi varsa, bir uzmana danışarak gerekli
                  testlerin yapılması önemlidir.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}

export default ChildHearing
