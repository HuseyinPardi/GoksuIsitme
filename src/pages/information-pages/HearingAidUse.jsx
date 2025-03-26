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

const HearingAidUse = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Nasıl Kullanılır? | Mersin Erdemli İşitme Cihazı Rehberi
        </title>
        <meta
          name="description"
          content="İşitme cihazı nasıl kullanılır, bakımı nasıl yapılır ve en iyi verimi nasıl alabilirsiniz? Mersin Erdemli'de işitme cihazı kullanımı hakkında detaylı bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme cihazı nasıl kullanılır, işitme cihazı kullanımı, işitme cihazı ayarları, işitme cihazı bakımı, işitme cihazı verimi, Mersin işitme cihazı, Erdemli işitme merkezi"
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
            İşitme Cihazı Nasıl Kullanılır?
          </Typography>
          <Divider
            sx={{ width: "100%", maxWidth: 1000, my: 2, bgcolor: "grey.400" }}
          />

          <Card sx={{ width: "100%", maxWidth: 1000 }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: { xs: 250, sm: 350, md: 400 }
              }}
              image="/assets/isitme-cihazi-nasil-kullanilir.webp"
              alt="İşitme Cihazı"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  İşitme Cihazı Kullanımı
                </Typography>

                <Typography variant="body1">
                  İşitme cihazları, işitme kaybı yaşayan bireylerin çevresindeki
                  sesleri daha net duymasını sağlayan elektronik cihazlardır.
                  Ancak maksimum verim alabilmek için doğru şekilde
                  kullanılmaları gerekmektedir.
                </Typography>

                <Typography variant="h6">İşitme Cihazı Modelleri</Typography>
                <Typography variant="body1">
                  İşitme cihazları farklı modellere sahiptir:
                </Typography>
                <List>
                  {[
                    "Kulak Arkası (BTE): Kulağın arkasına takılan model.",
                    "Kulak İçi (ITE) ve Kanal İçi (CIC): Kulak kanalına yerleştirilen küçük modeller.",
                    "Alıcı Kanalda (RIC): Hafif, güçlü ve şık bir seçenek.",
                    "Görünmez Kanal İçi (IIC): Neredeyse tamamen görünmez model."
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
                  İlk Kez Kullananlar İçin Alışma Süreci
                </Typography>
                <List>
                  {[
                    "İlk hafta: Ev ortamında birkaç saat kullanın.",
                    "İkinci hafta: Kalabalık ortamlarda deneyin.",
                    "Üçüncü hafta: Farklı ses ortamlarında test edin.",
                    "Bir ay sonra: Cihaza tam adaptasyon sağlanır."
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
                  Modern İşitme Cihazlarının Özellikleri
                </Typography>
                <List>
                  {[
                    "Bluetooth bağlantısı ile telefona entegre edilebilir.",
                    "Gürültü bastırma teknolojisi ile net ses sunar.",
                    "Mobil uygulamalarla kişisel ayarlamalar yapılabilir."
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
                  Cihazınızı Temiz ve Bakımlı Tutun
                </Typography>
                <List>
                  {[
                    "Günlük olarak nem ve kirlerden arındırın.",
                    "Kulak kiri birikimini önlemek için temizleme kitleri kullanın.",
                    "Pilleri düzenli kontrol edin ve değiştirin."
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6">Kaynaklar</Typography>
                <Typography variant="body2">
                  - World Health Organization (WHO) - İşitme Sağlığı Raporları
                </Typography>
                <Typography variant="body2">
                  - Philips, Oticon ve Widex Resmi Web Siteleri
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}

export default HearingAidUse
