import { Box, Button, Grid2, Typography, Stack, Container } from "@mui/material"

const branchLocations = [
  {
    name: "Mersin Şubesi",
    mapsEmbedLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.5175930849377!2d34.58984937534912!3d36.78213866871832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4af2860ab65%3A0x745feed68104c7d1!2zR8O2a3N1IMSwxZ9pdG1lIENpaGF6bGFyxLEgTWVya2V6aSAvIE1lcnNpbiAtIFBvemN1!5e0!3m2!1str!2str!4v1741774736498!5m2!1str!2str",
    mapsLink: "https://maps.app.goo.gl/hTx45Uo3RfGS9rNV6"
  },
  {
    name: "Erdemli Şubesi",
    mapsEmbedLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.6268089414525!2d34.29968347534122!3d36.611296178326135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8630c9104b7bd%3A0x591c83b6ffeadf76!2zRFVSU0VTIMSwxZ7EsFRNRSBDxLBIQVpMQVJJ!5e0!3m2!1str!2str!4v1741775004372!5m2!1str!2str",
    mapsLink: "https://maps.app.goo.gl/kciQSNDrosTE5Eux9"
  }
]

export default function MapSection() {
  return (
    <Container sx={{ mb: 5, py: 6, textAlign: "center" }}>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 item xs={12} md={10}>
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                p: 2,
                boxShadow: 1,
                textAlign: "center",
                width: "100%" // Kutu genişliğini artır
              }}
            >
              <Stack spacing={1.5} sx={{ mx: { xs: 0, md: 20.3 } }}>
                <Typography variant="h4" gutterBottom>
                  İletişim & Konum
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  Mersin Adres: İnönü, Gazi Mustafa Kemal Blv. no:399/1, 33140
                  Yenişehir/Mersin
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Erdemli Adres: Merkez Mahallesi Kazım Karabekir Caddesi
                  No:86/D Erdemli/Mersin
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Telefon: <a href="tel:+905318415227">0531 841 52 27</a>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Erdemli Şubesi Telefon:{" "}
                  <a href="tel:+905403451556">0540 345 15 56</a>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Mersin Şubesi Telefon:{" "}
                  <a href="tel:+905063451556">0506 345 15 56</a>
                </Typography>
              </Stack>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Şubelerimiz
        </Typography>

        <Grid2 container spacing={4} justifyContent="center">
          {branchLocations.map((branch, index) => (
            <Grid2 item xs={12} md={5} key={index}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  p: 2,
                  boxShadow: 1,
                  textAlign: "center"
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {branch.name}
                </Typography>
                <iframe
                  title={`${branch.name} Haritası`}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={branch.mapsEmbedLink}
                ></iframe>
                <Button
                  variant="contained"
                  color="primary"
                  href={branch.mapsLink}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  Yol Tarifi Al
                </Button>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  )
}
