import express from "express";
import db from "../mockdb";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            const data = await db.getOne(id);
            res.json(data);
        } else {
            const data = await db.getAll();
            res.json(data);
        }
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newUser = req.body;
        const data = await db.add(newUser);
        res.status(201).json(data); 
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        const data = await db.update(id, updatedUser);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await db.remove(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

export default router;

