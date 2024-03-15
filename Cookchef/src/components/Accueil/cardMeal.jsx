import {
  Dialog,
  DialogTitle,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import axios from "axios";

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  const handleAddToFavorites = () => {
    console.log(`Ajout aux favoris : ${recipe.strMeal} (ID: ${recipe.idMeal})`);
  };

  const handleLike = async () => {
    try {
      const response = await axios.post("http://localhost:3001/likes", {
        mealId: recipe.idMeal,
      });
      console.log("Like ajouté:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout du like:", error);
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.strInstructions.substring(0, 200)}...{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={recipe.strSource}
        >
          Recette
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={recipe.strYoutube}
        >
          Video yt
        </Button>

        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            handleAddToFavorites();
            handleLike();
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Votre repas a été ajouté à vos favoris!"}
        </DialogTitle>
        <Button onClick={handleClose} color="primary" autoFocus>
          Ok
        </Button>
      </Dialog>
    </Card>
  );
};

export default RecipeCard;
