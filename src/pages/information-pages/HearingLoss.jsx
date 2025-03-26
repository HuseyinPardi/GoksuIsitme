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
const HearingLoss = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Kaybı Nedir? | Mersin Erdemli İşitme Sağlığı Bilgilendirme
        </title>
        <meta
          name="description"
          content="İşitme kaybı nedir, neden olur ve belirtileri nelerdir? Mersin Erdemli'de işitme sağlığı hakkında detaylı bilgi alın ve işitme kaybınızı değerlendirin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme kaybı nedir, işitme kaybı neden olur, işitme kaybı belirtileri, işitme sağlığı, işitme kaybı tedavisi, Mersin işitme kaybı, Erdemli işitme merkezi"
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
            İşitme Kaybı Nedir?
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
              image="/assets/isitme-kaybi-nedir.webp"
              alt="İşitme Cihazı"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  İşitme Kaybı
                </Typography>

                <Typography variant="body1">
                  İşitme kaybı, kişinin çevresindeki sesleri tam olarak
                  duyamaması veya bazı frekansları algılamakta zorlanması
                  durumudur. Bu durum doğuştan gelebileceği gibi yaşlanma,
                  yüksek sese maruz kalma, enfeksiyonlar veya genetik faktörler
                  gibi birçok farklı nedenden dolayı da ortaya çıkabilir. İşitme
                  kaybı, kişinin günlük yaşamını, iletişimini ve sosyal
                  etkileşimlerini olumsuz etkileyebilir.
                </Typography>

                <Typography variant="h6">İşitme Kaybının Türleri</Typography>
                <List>
                  {[
                    "İletim Tipi İşitme Kaybı: Ses dalgalarının dış kulaktan iç kulağa iletilmesi sırasında meydana gelen bir sorundan kaynaklanır. Genellikle kulak kiri, kulak zarı delinmesi veya orta kulak iltihabı gibi nedenlerle oluşur.",
                    "Sensörinöral İşitme Kaybı: İç kulakta veya işitme sinirlerinde oluşan hasar nedeniyle ortaya çıkar. Yaşlanma, gürültüye uzun süre maruz kalma veya bazı hastalıklar bu tür işitme kaybına yol açabilir.",
                    "Mikst (Karma) İşitme Kaybı: Hem iletim tipi hem de sensörinöral işitme kaybının bir arada görüldüğü durumdur."
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6">İşitme Kaybı Belirtileri</Typography>
                <List>
                  {[
                    "Konuşmaları ve sesleri bulanık veya boğuk duyma",
                    "Kalabalık ortamlarda insanları anlamakta güçlük çekme",
                    "Karşıdaki kişiden sık sık söylediklerini tekrar etmesini isteme",
                    "Televizyon veya müzik sesini normalden yüksek seviyede dinleme",
                    "Çınlama (tinnitus) veya uğultu duyma"
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
                  İşitme Kaybı Nasıl Önlenir?
                </Typography>
                <List>
                  {[
                    "Yüksek sesten kaçının: Gürültülü ortamlarda uzun süre kalmamak ve kulaklık kullanımında sesi kontrol altında tutmak önemlidir.",
                    "Kulak hijyenine dikkat edin: Kulak kiri veya yabancı cisimler işitme kaybına neden olabilir, kulak sağlığınızı koruyun.",
                    "Düzenli işitme testleri yaptırın: Özellikle işitme kaybına yatkın bireyler ve ileri yaş grupları düzenli olarak işitme kontrollerini yaptırmalıdır.",
                    "Kulak sağlığına zarar verebilecek ilaçlardan kaçının: Bazı ilaçlar işitme duyusunu olumsuz etkileyebilir, doktor tavsiyesi olmadan ilaç kullanmayın.",
                    "Erken teşhis önemlidir: İşitme kaybı erken fark edilirse, işitme cihazları veya tıbbi müdahaleler ile yaşam kalitesi artırılabilir."
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle size={20} color="black" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}
export default HearingLoss
