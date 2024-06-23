// src/modules/tasks/task.service.js
const Task = require('../../models/task');

async function createTask(taskData) {
    const task = new Task(taskData);
    return await task.save();
}

async function getTasks() {
    // Usamos populate para obtener el usuario relacionado
    return await Task.find().populate('user').exec();
}

async function getTaskById(id) {
    return await Task.findById(id).populate('user').exec();
}

async function updateTask(id, taskData) {
    return await Task.findByIdAndUpdate(id, taskData, { new: true }).populate('user').exec();
}

async function deleteTask(id) {
    return await Task.findByIdAndDelete(id).exec();
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
