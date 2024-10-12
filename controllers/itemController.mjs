// controllers/itemController.mjs
import Item from '../models/Item.mjs';

export const getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

export const createItem = async (req, res) => {
    const { name, description, quantity } = req.body;
    const newItem = new Item({ name, description, quantity });
    await newItem.save();
    res.status(201).json(newItem);
};

export const updateItem = async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).end();
};
