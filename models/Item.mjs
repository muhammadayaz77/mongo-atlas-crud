// models/Item.mjs
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    quantity: { type: Number, default: 0 }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
