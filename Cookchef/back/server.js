const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Pour permettre les requêtes cross-origin
app.use(express.json()); // Pour analyser le corps des requêtes JSON

const likes = {}; // Stocker les likes en mémoire pour simplifier

// Route pour ajouter ou mettre à jour un like
app.post("/likes", (req, res) => {
  const { mealId } = req.body;
  if (!mealId) {
    return res.status(400).send("Meal ID is required");
  }

  likes[mealId] = (likes[mealId] || 0) + 1; // Ajouter ou incrémenter le like
  res.json({ mealId, likes: likes[mealId] });
});

// Route pour récupérer les likes d'un plat
app.get("/likes/:mealId", (req, res) => {
  const { mealId } = req.params;
  res.json({ mealId, likes: likes[mealId] || 0 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
