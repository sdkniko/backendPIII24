// src/modules/tasks/task.routes.js
const express = require('express');
const router = express.Router();
const taskService = require('./task.service');

// Crear una nueva tarea
router.post('/', async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todas las tareas (con el usuario relacionado)
router.get('/', async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener una tarea específica por ID
router.get('/:id', async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar una tarea por ID
router.put('/:id', async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.id, req.body);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar una tarea por ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await taskService.deleteTask(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
