import express from "express";

const PORT = 6969;
const app = express()


const consoleLogger = (PORT) => {
    console.log(`Server started on port: ${PORT}`)
}

app.listen(PORT, consoleLogger(PORT))


