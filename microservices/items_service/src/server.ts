import './module-alias';
import { createApp } from "./app";


(async () => {
  const port = process.env.PORT || 3001;
  const app = await createApp();
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
})();