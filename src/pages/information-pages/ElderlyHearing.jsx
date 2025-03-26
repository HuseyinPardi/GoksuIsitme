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
const ElderlyHearing = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>Yaşlılarda İşitme Kaybı | Mersin Erdemli İşitme Sağlığı</title>
        <meta
          name="description"
          content="Yaşlılarda işitme kaybı neden olur, belirtileri nelerdir ve nasıl tedavi edilir? Mersin Erdemli'de yaşlılarda işitme kaybı hakkında detaylı bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="yaşlılarda işitme kaybı, ileri yaş işitme kaybı, yaşlılarda duyma sorunu, işitme kaybı nedenleri, işitme cihazı, Mersin işitme kaybı, Erdemli işitme merkezi"
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
            Yaşlılarda İşitme Kaybı
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
              image="/assets/yaslilarda-isitme-kaybi.webp"
              alt="İşitme Cihazı"
            />
            <CardContent>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                >
                  Yaşlılarda İşitme Kaybı
                </Typography>

                <Typography variant="body1">
                  Yaşlılık, vücudun birçok fonksiyonunda olduğu gibi işitme
                  duyusunda da değişikliklere neden olabilir.{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    Presbikuzi
                  </span>{" "}
                  olarak adlandırılan yaşa bağlı işitme kaybı, genellikle
                  ilerleyici bir süreçtir ve yüksek frekanstaki sesleri duymakta
                  zorlanmayla başlar. Yaşlı bireyler, özellikle kalabalık
                  ortamlarda konuşmaları anlamakta güçlük çekebilir ve zamanla
                  sosyal izolasyona girebilirler.
                </Typography>

                <Typography variant="h6">
                  Yaşlılarda İşitme Kaybının Nedenleri
                </Typography>

                <List>
                  {[
                    "İç kulaktaki yaşlanmaya bağlı değişimler – Tüy hücreleri zamanla hasar görerek sesleri algılama yetisini kaybedebilir.",
                    "Gürültüye uzun süre maruz kalma – Yıllar boyunca yüksek sese maruz kalan bireylerde işitme kaybı daha belirgin olabilir.",
                    "Genetik faktörler – Aile geçmişinde işitme kaybı olan bireylerde yaşlandıkça işitme kaybı görülme olasılığı daha yüksektir.",
                    "Kronik hastalıklar – Diyabet, hipertansiyon gibi hastalıklar, kulaktaki kan akışını etkileyerek işitme kaybına neden olabilir.",
                    "Ototoksik ilaçlar – Bazı antibiyotikler ve ağrı kesiciler işitme duyusunu olumsuz etkileyebilir."
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
                  Yaşlılarda İşitme Kaybının Belirtileri
                </Typography>
                <List>
                  {[
                    "Konuşmaları ve sesleri boğuk veya düşük algılama",
                    "Telefon görüşmelerinde zorlanma",
                    "Birden fazla kişinin konuştuğu ortamlarda iletişim kurmada güçlük",
                    "İnsanlardan sık sık söylediklerini tekrar etmelerini isteme",
                    "Televizyon veya radyoyu normalden yüksek sesle dinleme",
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
                  İşitme Kaybı Yaşlıları Nasıl Etkiler
                </Typography>
                <List>
                  {[
                    "Sosyal İzolasyon: İşitme kaybı yaşayan bireyler, sosyal etkinliklere katılmak istemeyebilir ve zamanla yalnızlaşabilir.",
                    "Bilişsel Gerileme Riski: Araştırmalar, işitme kaybının demans (bunama) ve Alzheimer gibi hastalıklarla bağlantılı olabileceğini göstermektedir. İşitme kaybı yaşayan bireyler, beyinlerini daha az sesli uyarana maruz bıraktıkları için bilişsel fonksiyonları zamanla zayıflayabilir.",
                    "Güvenlik Tehlikeleri: İşitme kaybı olan yaşlılar, çevresel sesleri (örneğin, araba kornası, yangın alarmı) duymakta zorlanabilir ve bu da güvenlik açısından risk oluşturabilir."
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
                  Yaşlılarda İşitme Kaybı Nasıl Yönetilir
                </Typography>
                <List>
                  {[
                    "İşitme Testleri Yaptırın: İşitme kaybı belirtileri fark edildiğinde bir uzmana başvurularak düzenli işitme testleri yaptırılmalıdır.",
                    "İşitme Cihazı Kullanımı: Yaşlı bireyler için uygun işitme cihazı seçimi, onların sosyal yaşamlarını ve iletişimlerini önemli ölçüde iyileştirebilir.",
                    "İşitme Alışkanlıklarını Düzenleyin: Gürültülü ortamlarda dikkatli olunmalı, yüksek sesli müzik veya televizyon gibi alışkanlıklara sınır getirilmelidir.",
                    "Aile ve Sosyal Destek Sağlayın: Yaşlı bireylerin işitme kaybı nedeniyle yalnızlaşmaması için aile üyeleri ve arkadaşları onlarla iletişim kurarken daha sabırlı ve destekleyici olmalıdır.",
                    "İletişim Teknolojilerinden Faydalanın: Telefonlar, ses yükseltici cihazlar veya alt yazılı televizyonlar gibi teknolojik çözümler, yaşlı bireylerin iletişim kurmasını kolaylaştırabilir."
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
                  Sonuç olarak, yaşlılarda işitme kaybı doğal bir süreçtir ancak
                  yönetilebilir bir durumdur. Doğru destek ve çözümlerle yaşlı
                  bireyler işitme kaybına rağmen kaliteli bir yaşam
                  sürebilirler. Eğer işitme kaybı belirtileri fark ediliyorsa,
                  erken müdahale edilerek uygun işitme cihazları ve tedavi
                  yöntemleriyle yaşam kalitesi artırılabilir.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}
export default ElderlyHearing
