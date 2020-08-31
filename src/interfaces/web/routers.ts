import { Router } from "express";

const router = Router();

router.get("/", function(req, res){
  return res.send("<h1>Benkay as a Service</h1>")
});

export default router;
