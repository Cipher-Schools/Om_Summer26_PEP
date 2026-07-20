// const express = require('express');
import express from 'express';
import fs from 'fs/promises';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: 'All informations are required for signup!'});
            return;
        }

        const userList = JSON.parse(await fs.readFile('data/user.json', 'utf-8'));
        // console.log('UserData, ', userList);

        const existingUser = userList.find(u => u.email === email);

        if (existingUser) {
            res.json({ message: 'User with this email already exist.'});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            "id": userList.length + 1,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student"
        }

       const { password: _, ...userData } = newUser;

        userList.push(newUser);

        await fs.writeFile('data/user.json', JSON.stringify(userList, null, 2));

        

        res.json({
            message: "New user created successfully",
            data: userData
        });
        return;

        } catch (err) {
            console.log(err);
        }

});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ message: 'Email and Password both are required for Login'});
        return;
    }

    const users = JSON.parse(await fs.readFile('data/user.json', 'utf-8'));

    const user = users.find(u => u.email === email);

    if (!user) {
        res.json({ message: "User not found" });
        return;
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
        res.json({ message: "Invalid credentials" });
        return;
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )

    res.json({
        message: 'User logged in successfully',
        token
    });
    return;
});


app.get('/courses', (req, res) => {
    // complete this
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})