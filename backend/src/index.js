// const express = require('express');
import express from 'express';
import fs from 'fs/promises';
import 'dotenv/config';

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Response from server' });
})


app.post('/signup', async (req, res) => {
    // const body = req.body;
    try {
        const { firstName, lastName, email, password }= req.body;

        const userList = JSON.parse(await fs.readFile('data/user.json', 'utf-8'));
        // console.log('UserData, ', userList);

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: 'All informations are required for signup!'});
            return;
        }

        const existingUser = userList.find(u => u.email === email);

        if (existingUser) {
            res.json({ message: 'User with this email already exist.'});
            return;
        }

        const newUser = {
            "id": userList.length + 1,
            firstName,
            lastName,
            email,
            password,
            role: "student"
        }

        userList.push(newUser);

        await fs.writeFile('data/user.json', JSON.stringify(userList, null, 2));

        res.json({
            message: "New user created successfully",
            data: newUser
        });
        return;

        } catch (err) {
            console.log(err);
        }

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})