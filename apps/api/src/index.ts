import express from "express";
import { formatCurrency } from "@monorepo/utils";

const app = express();

const PORT =  3000;

app.get("/", (req, res) => {
    const formattedCurrency = formatCurrency(1234.56, "USD");
  return res.json({
      formattedCurrency
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
