import { Router } from 'express';

const router = Router();


router.get("/", (req, res) => {
    res.status(200).json({
        status: "Online",
        message: "API funcionando corretamente"
    });
});

export default router;