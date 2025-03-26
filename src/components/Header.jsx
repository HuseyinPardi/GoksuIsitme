import { useState } from "react"
import React from "react"

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
  Typography
} from "@mui/material"
import { Link } from "react-router"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Logo from "./Logo"
import services from "../data/services.json"
import information from "../data/information.json"

import {
  Headphones,
  Hearing,
  Build,
  CleaningServices,
  School,
  Battery0Bar,
  FilterAlt,
  VerifiedUser,
  Earbuds,
  HearingDisabled
} from "@mui/icons-material"

const iconMap = {
  HearingDisabled: (props) => <HearingDisabled {...props} />,
  Headphones: (props) => <Headphones {...props} />,
  Build: (props) => <Build {...props} />,
  CleaningServices: (props) => <CleaningServices {...props} />,
  School: (props) => <School {...props} />,
  Battery0Bar: (props) => <Battery0Bar {...props} />,
  FilterAlt: (props) => <FilterAlt {...props} />,
  VerifiedUser: (props) => <VerifiedUser {...props} />,
  Earbuds: (props) => <Earbuds {...props} />,
  Hearing: (props) => <Hearing {...props} />
}

const Header = () => {
  const [anchorElServices, setAnchorElServices] = useState(null)
  const [anchorElInfo, setAnchorElInfo] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#f0f4f8", color: "#333", px: 2 }}
      >
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Masaüstü Menüsü */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: "100%"
            }}
          >
            {[
              { label: "ANA SAYFA", path: "/" },
              { label: "İŞİTME CİHAZLARI", path: "/brands" },
              { label: "İLETİŞİM", path: "/contact" }
            ].map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  color: "#007bff",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  border: "2px solid currentColor",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  margin: "0 8px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 123, 255, 0.1)"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Hizmetler */}
            <Button
              sx={{
                color: "#007bff",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                border: "2px solid currentColor",
                borderRadius: "8px",
                padding: "8px 16px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgba(0, 123, 255, 0.1)"
                }
              }}
              onClick={(event) => setAnchorElServices(event.currentTarget)}
            >
              HİZMETLER
            </Button>
            <Popover
              open={Boolean(anchorElServices)}
              anchorEl={anchorElServices}
              onClose={() => setAnchorElServices(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              sx={{ mt: 1 }}
            >
              <List>
                {services.map((service, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={service.path}
                    onClick={() => setAnchorElServices(null)}
                  >
                    <ListItemIcon>{iconMap[service.icon]()}</ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          sx={{ fontSize: "1.25rem", fontWeight: "normal" }}
                        >
                          {service.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Popover>

            {/* Bilgi */}
            <Button
              sx={{
                color: "#007bff",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                border: "2px solid currentColor",
                borderRadius: "8px",
                padding: "8px 16px",
                margin: "0 8px",
                "&:hover": {
                  backgroundColor: "rgba(0, 123, 255, 0.1)"
                }
              }}
              onClick={(event) => setAnchorElInfo(event.currentTarget)}
            >
              BİLGİ
            </Button>
            <Popover
              open={Boolean(anchorElInfo)}
              anchorEl={anchorElInfo}
              onClose={() => setAnchorElInfo(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              sx={{ mt: 1 }}
            >
              <List>
                {information.map((info, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={`/information/${info.slug}`}
                    onClick={() => setAnchorElInfo(null)}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          sx={{ fontSize: "1.25rem", fontWeight: "normal" }}
                        >
                          {info.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Popover>
          </Box>

          {/* Mobil Menü Butonu (Sağda) */}
          <IconButton
            edge="end"
            sx={{ display: { xs: "block", md: "none" }, color: "#007bff" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Mobil Çekmece (Sağdan Açılan Drawer) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#f0f4f8",
            color: "#333",
            p: 2
          }
        }}
      >
        <IconButton onClick={() => setMobileOpen(false)} sx={{ mb: 2 }}>
          <CloseIcon />
        </IconButton>

        <List>
          <ListItem
            component={Link}
            to="/"
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText primary="ANA SAYFA" />
          </ListItem>
          <ListItem
            component={Link}
            to="/brands"
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText primary="İŞİTME CİHAZLARI" />
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText primary="İLETİŞİM" />
          </ListItem>

          {/* Hizmetler */}
          <Divider sx={{ my: 1 }} />
          <ListItem>
            <ListItemText primary="HİZMETLER" sx={{ fontWeight: "bold" }} />
          </ListItem>
          {services.map((service, index) => (
            <ListItem
              key={index}
              component={Link}
              to={service.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemIcon>{iconMap[service.icon]()}</ListItemIcon>
              <ListItemText primary={service.name} />
            </ListItem>
          ))}

          {/* Bilgi */}
          <Divider sx={{ my: 1 }} />
          <ListItem>
            <ListItemText primary="BİLGİ" sx={{ fontWeight: "bold" }} />
          </ListItem>
          {information.map((info, index) => (
            <ListItem
              key={index}
              component={Link}
              to={`/information/${info.slug}`}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={info.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Header
