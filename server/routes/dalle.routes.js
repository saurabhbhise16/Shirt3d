import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAIApi, Configuration } from 'openai'; // Import classes using destructuring

dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.completions.create({ // Use .completions.create method
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'url',
        });

        const imageUrl = response.choices[0].url; // Access the URL field in choices

        res.status(200).json({ photo: imageUrl });
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

export default router;
