// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// api info: https://github.com/D3vd/Meme_Api

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://meme-api.com/gimme";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      title: result.data.title,
      memes: result.data.url,
      author: result.data.author,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});