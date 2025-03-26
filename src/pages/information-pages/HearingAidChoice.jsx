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
const HearingAidChoice = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Nasıl Seçilir? | Mersin Erdemli İşitme Cihazı Rehberi
        </title>
        <meta
          name="description"
          content="İşitme cihazı seçerken nelere dikkat etmelisiniz? Mersin Erdemli'de işitme kaybınıza uygun en iyi işitme cihazını seçmek için rehberimizi inceleyin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı nasıl seçilir, en iyi işitme cihazı, işitme cihazı seçimi, işitme kaybı çözümleri, işitme cihazı modelleri, Mersin işitme cihazı, Erdemli işitme merkezi"
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
            İşitme Cihazı Nasıl Seçilir?
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
              image="/assets/isitme-cihazi-nasil-secilir.webp"
              alt="İşitme Cihazı"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  İşitme Cihazı Seçiminde Dikkat Edilmesi Gerekenler
                </Typography>

                {/* 1. İşitme Kaybı Seviyenizi Belirleyin */}
                <Typography variant="h6">
                  1. İşitme Kaybı Seviyenizi Belirleyin
                </Typography>
                <Typography variant="body1">
                  İşitme cihazı seçerken öncelikle işitme kaybınızın seviyesini
                  belirlemelisiniz. Hafif, orta veya ileri derece işitme kaybına
                  göre farklı cihazlar önerilmektedir. Bir uzman tarafından
                  işitme testi yaptırmak, en doğru seçimi yapmanıza yardımcı
                  olur.
                </Typography>

                {/* 2. Cihaz Türünü Seçin */}
                <Typography variant="h6">2. Cihaz Türünü Seçin</Typography>
                <List>
                  {[
                    "Kulak Arkası (BTE) - Güçlü amplifikasyon, ileri derecede işitme kaybı için uygundur.",
                    "Kulak İçi (ITE) - Şık tasarım, hafif ve orta derecede işitme kaybı için uygundur.",
                    "Kanal İçi (CIC) - Tamamen kulak kanalına yerleşir, en az görünen modeldir."
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                {/* 3. Teknolojik Özellikleri İnceleyin */}
                <Typography variant="h6">
                  3. Teknolojik Özellikleri İnceleyin
                </Typography>
                <List>
                  {[
                    "Gürültü Engelleme - Arka plan seslerini azaltarak konuşmaları daha net hale getirir.",
                    "Bluetooth Bağlantısı - Telefon ve diğer cihazlarla kablosuz bağlantı sağlar.",
                    "Otomatik Ses Ayarı - Ortama göre sesi otomatik olarak optimize eder.",
                    "Çoklu Program Seçenekleri - Farklı ortamlar için özel ses ayarları yapabilirsiniz."
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                {/* 4. Pil ve Şarj Seçenekleri */}
                <Typography variant="h6">4. Pil ve Şarj Seçenekleri</Typography>
                <Typography variant="body1">
                  İşitme cihazlarının bazı modelleri değiştirilebilir piller ile
                  çalışırken, bazıları şarj edilebilir bataryalara sahiptir.
                  Günlük kullanımınıza uygun olanı seçmelisiniz.
                </Typography>

                {/* 5. Uzman Görüşü Alın */}
                <Typography variant="h6">5. Uzman Görüşü Alın</Typography>
                <Typography variant="body1">
                  İşitme cihazı satın almadan önce bir işitme uzmanına danışarak
                  en uygun modeli seçmek önemlidir. Bazı cihazlar deneme süresi
                  sunar, bu da cihazın sizin için uygun olup olmadığını
                  anlamanıza yardımcı olur.
                </Typography>

                {/* 6. Garanti ve Satış Sonrası Hizmetler */}
                <Typography variant="h6">
                  6. Garanti ve Satış Sonrası Hizmetler
                </Typography>
                <Typography variant="body1">
                  Satın aldığınız cihazın garanti süresini, teknik servis
                  hizmetlerini ve yedek parça temin edilebilirliğini kontrol
                  etmek uzun vadede avantaj sağlar.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}
export default HearingAidChoice
