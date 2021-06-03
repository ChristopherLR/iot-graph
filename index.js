const express = require("express");
const { postgraphile } = require("postgraphile");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:postgres:5432/test",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors: true,
    }
  )
);

app.listen(process.env.PORT || 4000);
