const router = require('express').Router();

const todoItemModel = require('../models/todoitems');


router.post('/api/item', async(req,res) => {
    try {
        const newItem = new todoItemModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    } catch (err) {
        res.json(err);
    }
})

router.get('/api/items', async(req,res) => {
    try {
        const allTodoItems = await todoItemModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err);
    }
})

router.get('/api/item/:id', (req, res) => {
    let id = req.params.id;
    todoItemModel.findById(id, function (err, user) {
        res.json(user);
    });
})

router.put('/api/item/:id', async(req,res) => {
    try {
        const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id,{$set: req.body});
        res.status(200).json("Item Updated");
    } catch (err) {
        res.json(err);
    }
})

router.delete('/api/item/:id', async(req,res) => {
    try {
        const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Item Deleted");
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;