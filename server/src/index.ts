import express from 'express';
import { schema } from './Schema/index';
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm"
import { Users } from "./Entities/Users";

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "GraphqlCRUDD",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Users],
        port: 3307,
    })
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.listen(3001, () => {
        console.log("Server Running  on Port 3001")
    })
};
main().catch((err) => {
    console.log(err)
})