import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Ola NLW!");
});

app.post("/test-post", (request, response) => {
    return response.send("Ola metodo post");
});

app.post("/test-esqueci", (request, response) => {
    return response.send("como euh seu nome?");
});

app.listen(3000, () => console.log("Server is Running NLW"));