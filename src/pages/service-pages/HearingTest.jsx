import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography
} from "@mui/material"

const HearingTest = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          İşitme Testi | Mersin Erdemli İşitme Değerlendirme Hizmeti
        </title>
        <meta
          name="description"
          content="Mersin Erdemli'de işitme testi yaptırın. İşitme seviyenizi değerlendirmek ve kulak sağlığınızı korumak için profesyonel işitme testi hizmetlerimizden yararlanın."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="işitme testi, işitme kaybı, kulak sağlığı, işitme değerlendirmesi, odyometri testi, işitme cihazı, Mersin işitme testi, Erdemli işitme testi, işitme merkezi"
        />
      </head>

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
        <Container sx={{ my: 5 }}>
          <Typography variant="h2">İşitme Testi</Typography>
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
            src="/assets/isitme-testi.webp"
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
                İşitme testi, bireyin işitme yetisini değerlendirmek amacıyla
                yapılan çeşitli ölçümlerden oluşan bir süreçtir. İşitme kaybı,
                yaşlanma, yüksek sese maruz kalma, genetik faktörler veya
                enfeksiyonlar gibi birçok nedenden kaynaklanabilir. Erken teşhis
                edilmediğinde, günlük iletişimde zorluklara yol açabilir ve
                yaşam kalitesini düşürebilir. İşitme testleri sayesinde, bireyin
                hangi frekansta ve hangi düzeyde işitme kaybı yaşadığı
                belirlenerek uygun tedavi veya işitme cihazı gibi çözümler
                sunulabilir. Bu testler, bebeklerden yetişkinlere kadar her yaş
                grubuna uygulanabilir ve işitme sağlığının korunması açısından
                düzenli olarak yaptırılması önerilir.
              </ListItemText>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                İşitme Testleri
              </Typography>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Saf Ses Odyometrisi:
                </span>{" "}
                Bu test, bireyin farklı frekanslardaki sesleri ne kadar iyi
                duyduğunu ölçer. Hastaya kulaklık takılır ve farklı seviyelerde
                sesler verilir. Hastanın duyduğu sesleri belirtmesi istenir. Saf
                ses odyometrisi, işitme kaybının derecesini ve hangi frekans
                aralığında kayıp yaşandığını belirlemeye yardımcı olur.
              </ListItemText>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Konuşma Odyometrisi:
                </span>{" "}
                Bu test, hastanın konuşma seslerini ne kadar iyi
                algılayabildiğini ve ayırt edebildiğini değerlendirir. Hastaya
                belirli kelimeler veya cümleler okunur ve bunları tekrar etmesi
                istenir. Konuşma odyometrisi, özellikle işitme cihazı veya
                koklear implant gibi çözümler gerekip gerekmediğini belirlemede
                önemlidir.
              </ListItemText>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Timpanometri ve Akustik Refleks Testi:
                </span>{" "}
                Orta kulak sağlığını değerlendirmek için yapılan bu testler,
                kulak zarının ve orta kulaktaki kemikçiklerin nasıl çalıştığını
                inceler. Orta kulakta sıvı birikimi, kulak zarı delinmesi veya
                östaki borusu disfonksiyonu gibi sorunların teşhisinde
                kullanılır.
              </ListItemText>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Otoakustik Emisyonlar:
                </span>{" "}
                Bu test, iç kulaktaki (koklea) tüylü hücrelerin nasıl
                çalıştığını ölçer. Kulak içine küçük bir prob yerleştirilerek
                kulaktan gelen doğal sesler kaydedilir. Yeni doğan işitme
                taramalarında yaygın olarak kullanılan bu test, iç kulak sağlığı
                hakkında bilgi verir.
              </ListItemText>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Beyinsapı İşitsel Uyarılmış Potansiyeller:
                </span>{" "}
                Bu test, işitme siniri ve beyinsapının sese verdiği tepkileri
                ölçer. Hastaya kulaklık takılır ve elektrotlar yardımıyla beyin
                dalgaları kaydedilir. Genellikle bebekler, küçük çocuklar veya
                iş birliği yapamayan hastalar için kullanılır. Ayrıca işitme
                siniriyle ilgili olası problemlerin teşhisinde de önemlidir.
              </ListItemText>
              <ListItemText>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  • Serbest Alan Testi:
                </span>{" "}
                İşitme cihazı veya koklear implant kullanan bireyler için
                yapılan bir testtir. Gerçek hayatta duyma yeteneğini
                değerlendirmek için kullanılır. Farklı yönlerden ve mesafelerden
                gelen seslere verilen tepkiler ölçülerek işitme cihazının
                ayarları optimize edilebilir.
              </ListItemText>
              <ListItemText>
                Göksu İşitme olarak, işitme sağlığınızı korumanın ve işitme
                kaybını erken tespit etmenin ne kadar önemli olduğunun
                bilincindeyiz. Bu nedenle, en son teknolojilerle donatılmış
                merkezimizde kapsamlı işitme testleri sunarak işitme duyunuzu en
                iyi şekilde değerlendiriyoruz. Uzman ekibimiz, test sonuçlarını
                titizlikle analiz ederek size en uygun çözümü sunmak için
                yanınızda. İşitme ile ilgili herhangi bir şüpheniz varsa, erken
                teşhis ve doğru yönlendirme için Göksu İşitme’ye başvurabilir,
                sağlıklı bir işitme deneyimi için ilk adımı atabilirsiniz.
              </ListItemText>
            </Stack>
          </List>
        </Container>
      </Box>
    </>
  )
}
export default HearingTest
