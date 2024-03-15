import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import Navbar from "../Util/navbar";
import RecipesList from "./Lesmeals";
import Footer from "../Util/footer";

function Accueil() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box my={4} display="flex" alignItems="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Cookchef
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", marginLeft: "auto" }}
          >
            <InputBase
              placeholder="Rechercher…"
              onChange={handleSearchChange}
              value={searchQuery}
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: "#fff",
                borderRadius: 4,
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </form>
          <IconButton
            onClick={scrollToBottom}
            aria-label="scroll down"
            sx={{ ml: 2 }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
        <RecipesList searchQuery={searchQuery} />
      </Container>

      <Footer />
      <IconButton
        onClick={scrollToTop}
        aria-label="scroll up"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </>
  );
}

export default Accueil;
