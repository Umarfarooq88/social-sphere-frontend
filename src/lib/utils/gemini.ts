import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

async function generateText(prompt: string) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const fullPrompt = `Consider me as a Content writer and based on what I as now, generate content or ideas for me. Here you go - ${prompt}`
        const result = await model.generateContent(fullPrompt)
        const response =  result.response;
        const text = response.text()
        console.log(response)
        console.log(text)
        return text.replaceAll("*",""); 
    } catch (error) {
        console.log(error);
    }
}

export default generateText;


