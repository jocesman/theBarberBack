import server from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";
import { preLoadData } from "./helpers/preLoaderData"
import { log } from "console";

const PORT = process.env.PORT || 3000; 

AppDataSource.initialize()
    .then(res => {
        console.log("✅Conexión a la Base de datos establecida");
        // preLoadData()
        // .then(res => {
            server.listen(PORT, () => {
                console.log(`🚀 Server is running on port ${PORT}`); 
            // })
        })
        // .catch(err => {
                // console.log("Error al precargar los datos de prueba");
                // console.log(err);
            // });
    })
    .catch(err => {
        console.log("❌ Error al inicializar la base de datos");
        console.log(err)
    });

    // AppDataSource.initialize()
    // .then(res => {
    //     console.log("Conexión a la Base de datos establecida");
    //     preLoadData()
    //     .then(res => {
    //         server.listen(PORT, () => {
    //             console.log(`Server is running on port ${PORT}`);
    //         })
    //     })
    //     .catch(err => {
    //             console.log("Error al precargar los datos de prueba");
    //             console.log(err);
    //         });
    // })
    // .catch(err => {
    //     console.log("Error al inicializar la base de datos");
    //     console.log(err)
    // });