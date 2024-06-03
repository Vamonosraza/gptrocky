'use server'
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages) => {
    try{
        const response = await openai.chat.completions.create({
            messages:[
                {role:'system', content:'You are a helpful assistant. limit to two sentences'},
                ...chatMessages
            ],
            model:"gpt-3.5-turbo-0613",
            temperature: 1,
        });
        
        return response.choices[0].message;
    } catch (error){
        return null;
    }
}

export const getExistingTour = async ({city, country}) => {
    return null;
}

export const generateTourResponse = async ({city, country}) => {
    return null;
}

export const createNewTour = async (tour) => {
    return null;
}