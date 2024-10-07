import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Container, List } from "@mui/material";
import EmailTab from "../components/EmailTab";
import EmailIcon from "@mui/icons-material/Email";
import EmailBody from "../components/EmailBody";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3000/messages";
const drawerWidth = 400;

function MyDrawer() {
  const newEmails = useLoaderData() == "Error" ? [] : useLoaderData();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [currentSelected, setCurrentSelected] = useState(-1);
  const [numUnread, setNumUnread] = useState(newEmails.filter((email) => email.read == false).length);
  const [emails, setEmails] = useState(newEmails);

  useEffect(() => {
    if (emails[currentSelected]) {
      emails[currentSelected].read = true;
    }
    setNumUnread(emails.filter((email) => email.read == false).length);
  }, [currentSelected, emails]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const clickHandler = async (index, email) => {
    if (index != currentSelected) {
      await axios.put(`${url}?search=${email._id}`, { read: true });
      setCurrentSelected(index);
    } else {
      setCurrentSelected(-1);
    }
  };

  const deleteHandler = (selectedId, email) => {
    axios.delete(`${url}?search=${email._id}`);
    setEmails(emails.filter((email) => email._id != selectedId));
  };

  const drawer = (
    <Container sx={{ marginTop: { md: 8 }, overflow: "auto" }}>
      <List sx={{ paddingY: 3 }}>
        {emails.map((email, index) => (
          <EmailTab
            key={index}
            onSelect={() => clickHandler(index, email)}
            onDelete={() => deleteHandler(email._id, email)}
            selected={index === currentSelected}
            email={email}
          />
        ))}
      </List>
    </Container>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: { md: 1201 },
        }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}>
            <Badge badgeContent={numUnread} color="warning">
              <MenuIcon />
            </Badge>
          </IconButton>
          <Badge badgeContent={numUnread} color="warning" sx={{ display: { xs: "none", md: "flex" } }}>
            <EmailIcon />
          </Badge>
          <Typography variant="h6" noWrap component="div">
            Gavin's Email
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          mx: 3,
          my: 7,
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          height: "100%",
        }}>
        <EmailBody email={emails[currentSelected]} />
      </Box>
    </Box>
  );
}

export default MyDrawer;
