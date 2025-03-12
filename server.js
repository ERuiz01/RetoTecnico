const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Probar que llege correctamente los 10 resultados
app.get("/users/generate", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    res.json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuarios", error: error.message });
  }
});

// Ruta para servir el HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
