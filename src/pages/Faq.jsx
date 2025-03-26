import FaqSection from "../components/FaqSection"

const Faq = () => {
  return (
    <>
      <head>
        {/* SEO İçin Meta Etiketleri */}
        <title>
          Sık Sorulan Sorular | Mersin Erdemli İşitme Cihazı ve Sağlığı
        </title>
        <meta
          name="description"
          content="İşitme cihazları, işitme kaybı ve hizmetlerimiz hakkında sık sorulan soruların cevaplarını öğrenin. Mersin Erdemli'de işitme sağlığı hakkında detaylı bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Göksu İşitme Merkezi" />
        <meta
          name="keywords"
          content="sık sorulan sorular, işitme cihazı soruları, işitme kaybı hakkında merak edilenler, işitme cihazı kullanımı, Mersin işitme cihazı, Erdemli işitme merkezi"
        />
      </head>

      <div style={{ marginTop: "45px" }}>
        <FaqSection />
      </div>
    </>
  )
}

export default Faq
