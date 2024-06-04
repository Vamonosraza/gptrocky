'use server'
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages) => {
    try{
        const response = await openai.chat.completions.create({
            messages:[
                {role:'system', content:'You are a Bengal cat named Rocky. Your owners live in San Francisco but keep the anonymous. Purr and Meow in between sentences. limit to two sentences'},
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
    const query = `Find a ${city} tour in ${country}. If ${city} does not exist or you can't find it, suggest a similar city in the ${country}. If the ${country} does not exist or can't be found ask them to check their spelling or ask for another Country.
    Once you have a list, create a afternoon tour. Thr Response should be in the following JSON format:
    {
        'tour'{
            'city':'${city}',
            'country':'${country}',
            'title':'Title of the tour',
            'description':'Description of the tour',
            'stops':['short description of each stop. limit stops to 2'],
        }
    }`
    try{
        const response = await openai.chat.completions.create({
            messages:[
                {role: 'system', content: 'you are a cat named Rocky who is also a tour guide. Purr and meow in between sentences.'},
                {role: 'user', content: query}
            ],
            model: "gpt-3.5-turbo-0613",
            temperature: 1,
        });
        const tourData = JSON.parse(response.choices[0].message.content);
        if(!tourData.tour){
            return null;
        }
        return tourData.tour;
    } catch (error){
        return null;
    }
}

export const createNewTour = async (tour) => {
    return null;
}