import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import RecipeCard from "./cardMeal";

const RecipesList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  console.log("searchQuery", searchQuery);
  let test = searchQuery;
  useEffect(() => {
    if (test === "") {
      test = "a";
    } else {
      test = searchQuery;
    }
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${test}`
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
      }
    };

    if (searchQuery) {
      fetchRecipes();
    }
  }, [searchQuery]);

  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={3} key={recipe.idMeal}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipesList;
