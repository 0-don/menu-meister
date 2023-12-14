declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_HOST: string;
    MYSQL_DB: string;
    DATABASE_URL: string;

    SECRET: string;
    SALT: string;
    CORS_ORIGIN: string;
  }
}
