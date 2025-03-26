import {
  Box,
  Container,
  Divider,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material"

import { CheckCircle } from "lucide-react"

const HearingAid = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Nedir? | Mersin Erdemli İşitme Cihazı Bilgilendirme
        </title>
        <meta
          name="description"
          content="İşitme cihazı nedir, nasıl çalışır ve kimler kullanmalıdır? Mersin Erdemli'de işitme cihazları hakkında detaylı bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı nedir, işitme cihazı nasıl çalışır, işitme kaybı, işitme cihazı kullanımı, işitme cihazı çeşitleri, Mersin işitme cihazı, Erdemli işitme merkezi"
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
            px: 2 // Mobilde içerik kenarlara yapışmasın
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }} // Mobil için küçült
          >
            İşitme Cihazı Nedir?
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
              image="/assets/isitme-cihazi-nedir.webp"
              alt="İşitme Cihazı"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  İşitme Cihazı Nedir?
                </Typography>
                <Typography variant="body1">
                  İşitme cihazı, işitme kaybı yaşayan bireylerin çevrelerindeki
                  sesleri daha net duymalarına yardımcı olan elektronik bir
                  cihazdır. Bu cihazlar, mikrofonları aracılığıyla sesi alır,
                  işleyerek güçlendirir ve kulak içine iletir. Günümüzde işitme
                  cihazları, gelişmiş dijital teknolojiler sayesinde
                  kullanıcının ihtiyacına göre ses seviyelerini ayarlayabilir ve
                  gürültü engelleme gibi özellikler sunabilir.
                </Typography>
                <Typography variant="body1">
                  İşitme kaybı farklı seviyelerde olabilir ve işitme cihazları
                  da bu ihtiyaca uygun şekilde tasarlanır. Kulak içi (ITE),
                  kulak arkası (BTE) ve kanal içi (CIC) gibi farklı modeller
                  mevcuttur. İşitme cihazları, sadece sesi yükseltmekle kalmaz,
                  aynı zamanda konuşmaları daha anlaşılır hale getirerek yaşam
                  kalitesini artırır.
                </Typography>
                <Typography variant="body1">
                  Erken teşhis ve doğru işitme cihazı seçimi, kişinin sosyal
                  yaşamını ve iletişimini olumlu yönde etkiler. Eğer işitme
                  kaybı yaşadığınızı düşünüyorsanız, bir uzmana danışarak en
                  uygun işitme cihazı modelini belirlemeniz önemlidir.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  İşitme Cihazının Avantajları Nelerdir?
                </Typography>
                <List>
                  {[
                    "İletişimi Güçlendirir: İşitme kaybı yaşayan bireylerin, aileleri ve arkadaşlarıyla daha rahat iletişim kurmasını sağlar.",
                    "Sesleri Daha Net Hale Getirir: Özellikle dijital işitme cihazları, arka plan gürültüsünü filtreleyerek konuşmaları daha net hale getirir.",
                    "Sosyal Hayata Katılımı Artırır: İşitme kaybı nedeniyle oluşabilecek izolasyonu önleyerek, sosyal etkinliklere ve iş hayatına katılımı kolaylaştırır.",
                    "Beyin Fonksiyonlarını Destekler: İşitme kaybı zamanla zihinsel işlevleri etkileyebilir. İşitme cihazları, beyne giden ses sinyallerini düzenleyerek bilişsel sağlığı korumaya yardımcı olur.",
                    "Kişiye Özel Ayarlamalar Sunar: Günümüzdeki modern işitme cihazları, kullanıcının ihtiyacına göre ses seviyelerini otomatik olarak ayarlayabilir."
                  ].map((text, index) => (
                    <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                      <ListItemIcon>
                        <CheckCircle color="black" size={24} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body1">
                  İşitme cihazları, modern teknolojiler sayesinde işitme kaybı
                  yaşayan bireylerin hayatını kolaylaştıran önemli araçlardır.
                  Doğru cihaz seçimi ve düzenli kullanım, kişinin günlük yaşam
                  kalitesini büyük ölçüde artırabilir. Eğer işitme kaybıyla
                  ilgili belirtiler yaşıyorsanız, bize danışarak en uygun işitme
                  cihazını seçmeniz sağlığınız için en iyi adım olacaktır.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}

export default HearingAid
