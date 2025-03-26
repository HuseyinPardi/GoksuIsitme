import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"

const SgkAgreement = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>SGK Anlaşmalı İşitme Cihazı Hizmetleri | Mersin Erdemli</title>
        <meta
          name="description"
          content="Mersin Erdemli'de SGK anlaşmalı işitme cihazı hizmetleri. SGK destekli işitme cihazı alımı, geri ödeme ve işlemler hakkında detaylı bilgi alın."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="SGK işitme cihazı, SGK anlaşmalı işitme cihazı, işitme cihazı SGK desteği, işitme cihazı geri ödeme, Mersin SGK işitme cihazı, Erdemli SGK işitme merkezi, SGK işitme cihazı fiyatları"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">SGK ile İşitme Cihazı Temini</Typography>
          <Divider
            sx={{ width: "100%", margin: "0 auto", bgcolor: "grey.400", mt: 2 }}
          />

          <Box
            component="img"
            src="/assets/sgk-anlasmasi.webp"
            alt="SGK İşitme Cihazı Desteği"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              mt: 3
            }}
          />

          <Typography variant="h5" sx={{ mt: 4 }}>
            Gerekli Adımlar:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="1. Kulak Burun Boğaz (KBB) Uzmanına Başvuru"
                secondary="SGK ile anlaşmalı bir sağlık kuruluşunda KBB uzmanına muayene olarak işitme testinizi yaptırmanız gerekmektedir."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="2. Sağlık Kurulu Raporu ve Reçete"
                secondary="İşitme kaybınız tespit edildikten sonra, bir sağlık kurulu raporu düzenlenir. Rapor, hastane adı, hasta bilgileri ve teşhis gibi gerekli bilgileri içermelidir."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="3. İşitme Cihazı Temini"
                secondary="Gerekli rapor ve reçete ile SGK anlaşmalı işitme merkezimize başvurarak işitme cihazınızı temin edebilirsiniz. SGK katkı payı uygulanacaktır."
              />
            </ListItem>
          </List>

          <Typography variant="h5" sx={{ mt: 4 }}>
            SGK Katkı Payı Tutarları (2024):
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="0-4 Yaş"
                secondary="Çalışan veli için: 6.104,44 TL | Emekli veli için: 7.630,56 TL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="5-12 Yaş"
                secondary="Çalışan veli için: 5.426,17 TL | Emekli veli için: 6.782,72 TL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="13-18 Yaş"
                secondary="Çalışan veli için: 5.087,04 TL | Emekli veli için: 6.358,80 TL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="18 Yaş Üzeri"
                secondary="Çalışan kişi için: 3.391,36 TL | Emekli kişi için: 4.239,20 TL"
              />
            </ListItem>
          </List>

          <Typography variant="h5" sx={{ mt: 4 }}>
            Gerekli Belgeler:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Sağlık Kurulu Raporu" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reçete" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Odyometri testi sonuçları" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Varsa E-Reçete No" />
            </ListItem>
          </List>

          <Typography variant="h5" sx={{ mt: 4 }}>
            İletişim:
          </Typography>
          <Typography variant="body1">
            İnönü, Gazi Mustafa Kemal Blv. no:399/1, 33140 Yenişehir/Mersin
          </Typography>
          <Typography variant="body1">Telefon: 0531 841 52 27</Typography>
          <Divider sx={{ my: 2 }}></Divider>
          <Typography variant="body1">
            Mustafa Aksay apt, Merkez, Kazım Karabekir Cd. no:86/D, 33730
            Erdemli/Mersin
          </Typography>
          <Typography variant="body1">Telefon: 0531 841 52 27</Typography>
        </Container>
      </Box>
    </>
  )
}

export default SgkAgreement
