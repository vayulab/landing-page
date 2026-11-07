import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve the output of `vite build` (outDir: dist). Same path in every
  // environment, resolved from this file's directory (server/).
  const staticPath = path.resolve(__dirname, "..", "dist");
  const indexPath = path.join(staticPath, "index.html");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    if (!fs.existsSync(indexPath)) {
      console.error(`index.html not found at ${indexPath}. Run "pnpm run build".`);
      res.status(404).send("Not found: application build is missing.");
      return;
    }
    res.sendFile(indexPath, err => {
      if (err && !res.headersSent) {
        console.error("Failed to send index.html:", err);
        res.status(500).send("Internal server error");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
