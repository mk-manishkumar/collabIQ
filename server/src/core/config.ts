import dotenv from "dotenv";

dotenv.config();

interface Config {
  DATABASE_URL: string;
  PORT: number;
  NODE_ENV: string;
}

function getConfig(): Config {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in environment variables");
  }

  return {
    DATABASE_URL,
    PORT: parseInt(process.env.PORT || "8000", 10),
    NODE_ENV: process.env.NODE_ENV || "development",
  };
}

export const config = getConfig();
