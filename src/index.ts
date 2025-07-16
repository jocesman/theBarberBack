import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT || 3000;

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// Conecta a la base de datos
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Conexión a la Base de datos establecida");
  })
  .catch(err => {
    console.error("❌ Error al inicializar la base de datos", err);
  });

export default server;