const mongoose = require("mongoose");

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error.message);
    process.exit(1); // Detiene el servidor si no conecta
  }
};

module.exports = conectarBD;
