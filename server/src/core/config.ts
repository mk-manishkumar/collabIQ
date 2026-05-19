import "dotenv/config";

export const config = {
  DATABASE_URL:
    process.env.DATABASE_URL ??
    (() => {
      throw new Error("DATABASE_URL missing");
    })(),

  PORT: Number(process.env.PORT) || 8000,

  NODE_ENV: process.env.NODE_ENV || "development",
};
