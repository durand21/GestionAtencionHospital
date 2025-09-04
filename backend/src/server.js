require("dotenv").config();
const express = require("express");
const conectarBD = require("./config/db");

const app = express();

// Middlewares
app.use(express.json());

// Conectar a BD
conectarBD();

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando con MongoDB Atlas y Express");
});

// Iniciar servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
