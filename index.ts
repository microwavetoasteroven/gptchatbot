import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv';
dotenv.config();

const backend_port = Number(process.env.BACKEND_PORT);
const apiKey = process.env.API_KEY;

const app: Application = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({ apiKey: apiKey });

const openai = new OpenAIApi(configuration);

app.post("/completions", async (req: Request, res: Response) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                {
                    role: "user", 
                    content: "Create a SQL request to " + req.body.message,
                }
                ]
        });
        res.send(completion.data.choices[0].message);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

});

app.listen(backend_port, () => { console.log(`Server running on port ${backend_port}`) });