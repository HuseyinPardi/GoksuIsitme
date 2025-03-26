import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Stack
} from "@mui/material"

const EarMold = () => {
  const content = [
    {
      image: "/assets/yumusak.webp",
      title: "Yumuşak Kalıp",
      description:
        "Silikon malzemeden üretilen bu kalıplar esnek ve yumuşaktır. Özellikle çocuklar ve hassas kulak yapısına sahip kişiler için tercih edilir. Yumuşak yapıları sayesinde uzun süreli kullanımlarda konfor sağlar ve kulakta tahrişe neden olmaz. Ayrıca, yüksek frekanslı işitme kaybı yaşayan bireyler için de uygundur.",
      imageRight: true
    },
    {
      image: "/assets/sert.webp",
      title: "Sert Kalıp",
      description:
        "Akrilik malzemeden yapılan bu kalıplar daha dayanıklıdır ve uzun ömürlüdür. Sert yapıları sayesinde kolay temizlenebilirler ve hijyenik bir kullanım sunarlar. Genellikle yetişkinler ve kulak yapısı oturmuş bireyler için uygundur. Ses iletiminde netlik sağlar ve işitme cihazının verimliliğini artırır.",
      imageRight: false
    },
    {
      image: "/assets/kanalici.webp",
      title: "Kanal İçi Kalıp",
      description:
        "Bu kalıplar, kulak kanalının içine yerleştirilmek üzere tasarlanmıştır ve dışarıdan bakıldığında neredeyse görünmezler. Kozmetik açıdan daha estetik bir seçenek sunar. Ancak, kulak kanalının yapısına bağlı olarak herkes için uygun olmayabilir ve kullanımı sırasında dikkatli olunması gerekir.",
      imageRight: true
    }
  ]
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Cihazı Kulak Kalıbı | Mersin Erdemli Özel Kulak Kalıpları
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme cihazı için özel kulak kalıbı hizmeti. Konforlu ve kişiye özel kulak kalıpları ile işitme cihazınızın performansını artırın."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="kulak kalıbı, işitme cihazı kulak kalıbı, özel kulak kalıbı, kişiye özel kulak kalıbı, işitme cihazı aksesuarları, Mersin kulak kalıbı, Erdemli işitme merkezi, işitme cihazı konforu"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">Kulak Kalıbı Hizmeti</Typography>
          <Divider
            sx={{ width: "100%", margin: "0 auto", bgcolor: "grey.400", mt: 2 }}
          />

          <Box
            component="img"
            src="/assets/kulak-kalibi.webp"
            alt="Kulak Kalıbı Hizmeti"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              mt: 3
            }}
          />

          <Paper sx={{ p: 3, mt: 3, backgroundColor: "#fff" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Kulak Kalıbı Nedir?
            </Typography>
            <Typography paragraph>
              Kulak kalıbı, işitme cihazlarının kulak içine tam uyum sağlaması
              ve en iyi ses performansını vermesi için özel olarak üretilen bir
              parçadır. İşitme kaybı yaşayan bireyler için konforlu bir kullanım
              sunarak sesin daha net iletilmesini sağlar. Aynı zamanda gürültülü
              ortamlarda daha iyi ses izolasyonu sağlayarak işitme cihazlarının
              verimliliğini artırır.
            </Typography>

            <Typography variant="h5" sx={{ mb: 2 }}>
              Kulak Kalıbı Türleri
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Yumuşak Silikon Kalıplar"
                  secondary="Esnek ve rahat yapısı sayesinde uzun süre kullanımda konfor sağlar. Özellikle çocuklar ve hassas kulak yapısına sahip kişiler için uygundur."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Akrilik (Sert) Kalıplar"
                  secondary="Daha dayanıklı bir malzemeden üretilmiş olup, uzun ömürlüdür. İşitme cihazının çıkardığı sesleri daha iyi yönlendirir ve netlik sağlar."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Özel Üretim Kulak Kalıpları"
                  secondary="Kullanıcının kulak yapısına ve ihtiyaçlarına göre kişiselleştirilmiş özel kalıplardır. İşitme cihazı türüne ve kullanım amacına bağlı olarak farklı malzemelerden üretilebilir."
                />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
              Kulak Kalıbı Kullanım Avantajları
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Daha Net ve Kaliteli Ses"
                  secondary="Kulak kalıbı, işitme cihazının çıkardığı sesin kulak kanalına doğrudan ulaşmasını sağlar. Bu sayede işitme cihazının performansı artar."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Konforlu Kullanım"
                  secondary="Özel olarak kulağa uygun üretildiği için rahat bir kullanım sunar. Kulakta tahrişe veya rahatsızlığa neden olmaz."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Ses Kaçaklarını Önler"
                  secondary="İşitme cihazlarının çevreye ses yaymasını engelleyerek daha iyi bir ses izolasyonu sağlar. Bu, özellikle yüksek frekanslı işitme kaybı yaşayan bireyler için büyük bir avantajdır."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Dayanıklı ve Hijyenik"
                  secondary="Kaliteli malzemelerden üretildiği için uzun ömürlüdür ve düzenli temizlikle hijyenik bir kullanım sunar."
                />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
              Kulak Kalıbı Nasıl Alınır?
            </Typography>
            <Typography variant="body1">
              Kulak kalıbı almak için öncelikle bir işitme uzmanına başvurmanız
              gerekir. İşitme merkezimizde, kulağınızdan hassas bir ölçü
              alınarak size en uygun kalıp üretilir. Üretim süreci
              tamamlandıktan sonra kalıbınız işitme cihazınıza uyumlu hale
              getirilerek size teslim edilir.
            </Typography>
            <Divider sx={{ my: 3 }}></Divider>
            <Typography variant="h3" gutterBottom>
              Kalıplarımız
            </Typography>
            {content.map((item, index) => (
              <Stack
                key={index}
                direction={{
                  xs: "column",
                  md: item.imageRight ? "row" : "row-reverse"
                }}
                spacing={3}
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "50%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </Box>
              </Stack>
            ))}
            <Typography variant="body1">
              Her bir kalıp türü, kullanıcının ihtiyaçlarına, kulak yapısına ve
              işitme kaybının derecesine göre seçilmelidir. Doğru kalıp seçimi,
              işitme cihazının performansını doğrudan etkiler ve kullanıcının
              konforunu artırır.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default EarMold
