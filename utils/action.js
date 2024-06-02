'use server'
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (message) => {
    const response = await openai.chat.completions.create({
        messages:[
            {role:'system', content:'You are a helpful assistant. limit to two sentences'},
            {role:'user', content:message}
        ],
        model:"gpt-3.5-turbo-0613",
        temperature: 1,
    });
    console.log(response.choices[0].message);
    console.log(response)
    return 'awesome message'
}