import "dotenv/config";
import { config } from "./src/core/config.js";
import app from "app.js";

app.listen(config.PORT, () => {
  console.log(`🚀 CollabIQ server running at http://localhost:${config.PORT}`);
});
