import express, { Request, Response, NextFunction } from 'express';
import { ValidateError } from "tsoa";
import { RegisterRoutes } from "./routes";

export async function createApp() {
  const app = express();

  // Use body parser to read sent json payloads
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  RegisterRoutes(app);
  app.use(function errorHandler(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
    ): Response | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: "Validation Failed",
        errors: err?.fields,
      });
    }
    if (err instanceof Error) {
      return res.status(500).json({
      message: "Internal Server Error",
      });
    }
    
    next();
  });
  
  app.use(function notFoundHandler(req: Request, res: Response) {
    res.status(404).send({
      message: "Not Found",
    });
  });
  
  return app;
}
