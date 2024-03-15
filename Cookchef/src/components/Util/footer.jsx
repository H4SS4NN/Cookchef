import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Button, Grid } from "@mui/material";
import RecipeCard from "../Accueil/cardMeal";

const Footer = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!selectedLetter) return; // Ne faites rien si aucune lettre n'est sélectionnée

    const fetchRecipesByLetter = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
      }
    };

    fetchRecipesByLetter();
  }, [selectedLetter]);

  return (
    <Box bgcolor="text.secondary" color="white" p={2}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <Button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              color="inherit"
            >
              {letter.toUpperCase()}
            </Button>
          ))}
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: 20 }}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={3} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
