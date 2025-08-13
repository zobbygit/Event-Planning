import app from "./app.js";

app.listen(process.env.PORT , () => {
    console.log(`Server Listing on Port ${process.env.PORT}`);
})