import { Router } from "express";

const router = Router();

router.get("/hello", function(req, res){
  return res.send({name: 'Benkay as a Service'})
});

export default router;
