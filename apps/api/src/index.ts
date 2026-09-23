import express from "express";
import { formatCurrency } from "@monorepo/utils";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const str = formatCurrency(1234.56, "USD");
  return res.json({
    
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
