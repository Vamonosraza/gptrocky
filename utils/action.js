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
    const query = `Find a exact ${city} in this exact ${country}.
    If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
    Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
    {
      "tour": {
        "city": "${city}",
        "country": "${country}",
        "title": "title of the tour",
        "description": "short description of the city and tour",
        "stops": [" stop description", "stop description","stop description"]
      }
    }
    "stops" property should include only three stops with short 2 sentence description of each. describe each stop as if you were a cat.
    If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
    try{
        const response = await openai.chat.completions.create({
            messages:[
                {role: 'system', content: 'you are a tour guide'},
                {role: 'user', content: query},
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
        console.log(error);
        return null;
    }
}

export const createNewTour = async (tour) => {
    return null;
}