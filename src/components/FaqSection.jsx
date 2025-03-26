import { useState } from "react"
import { Link } from "react-router"
import faqsData from "../data/faqs.json"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Button,
  Box
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FaqSection = ({ limit = null, showMoreButton = false }) => {
  const faqs = limit ? faqsData.slice(0, limit) : faqsData
  const [expanded, setExpanded] = useState(null)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
  }

  return (
    <Container
      sx={{
        mb: 5,
        py: 5,
        backgroundColor: "#f5f5f5",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        "&:before": { display: "none" }
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Sık Sorulan Sorular
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            my: 2,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            "&:before": { display: "none" }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor:
                expanded === index ? "primary.main" : "transparent",
              color: expanded === index ? "white" : "inherit",
              transition: "background-color 0.3s, color 0.3s"
            }}
          >
            <Typography variant="h5">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {showMoreButton && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            component={Link}
            to="/faq"
            variant="contained"
            color="primary"
            sx={{
              px: 3,
              py: 1,
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: 8,
              boxShadow: 3,
              transition: "all 0.3s ease",
              minWidth: "200px",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "scale(1.05)"
              }
            }}
          >
            Daha Fazla →
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default FaqSection
