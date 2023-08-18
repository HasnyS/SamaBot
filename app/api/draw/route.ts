import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai";
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";

const configuration= new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You Must answer only in markdown snippets. Use Code Comments for explanations"
}

export async function POST(
    req: Request
){
    try {
        const {userId} = auth();
        const body = await req.json();
        const {prompt, amount= 1, resolution="512x512"} = body;

        if (!userId){
            return new NextResponse('Unauthorized', {status: 401});
        }

        if (!configuration.apiKey){
            return new NextResponse("OpenAi API Key not configured", {status: 500});
        }

        if (!prompt){
            return new NextResponse('Prompt is required', {status: 400});
        },
        if (!amount){
            return new NextResponse('Amount is required', {status: 400});
        },
        if (!resolution){
            return new NextResponse('resolution is required', {status: 400});
        }

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        });

        return NextResponse.json(response.data.data);

    } catch (error){
        console.log('[IMAGE_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};