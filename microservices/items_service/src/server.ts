import { createApp } from "./app";

const port = process.env.PORT || 3001;

(async () => {
  const app = await createApp();
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
})();