import React from "react"
import { Fab } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const WhatsAppButton = () => {
  const phoneNumber = "905318415227"

  return (
    <Fab
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      size="large"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#66bb6a",
        color: "white",
        width: 70,
        height: 70,
        "&:hover": { backgroundColor: "#81c784" }
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 35 }} />
    </Fab>
  )
}

export default WhatsAppButton
