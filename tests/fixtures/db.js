const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')
const userOneID = new mongoose.Types.ObjectId()
const userTwoID = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneID,
    name: 'Amir Yogev',
    email: 'amir@walla.com',
    password: 'amir1234567!',
    tokens: [{
        token: jwt.sign({ _id: userOneID }, process.env.JWT_SECRET)
    }]
}

const userTwo = {
    _id: userTwoID,
    name: 'David Ron',
    email: 'davidr2@gmail.com',
    password: 'david888',
    tokens: [{
        token: jwt.sign({ _id: userTwoID }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'clean the house',
    completed: false,
    owner: userOneID
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Do homework',
    completed: true,
    owner: userOneID
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Make a cake',
    completed: true,
    owner: userTwoID
}

const setupDataBase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = { userOneID, userOne, setupDataBase, taskOne, userTwo }