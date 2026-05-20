import app from "./app.js";
import { config } from "./src/core/config.js";

app.listen(config.PORT, () => {
  console.log(`CollabIQ running on http://localhost:${config.PORT}`);
});
