import "./db";
import "./models/video";
import app from "./server";

const handleListening = () => {
  console.log(`✅ Server listening on Port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
