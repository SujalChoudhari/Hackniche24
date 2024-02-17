import { NextResponse } from "next/server";
//@ts-ignore
import piston from "piston-client";


async function run(lang: string, code: string) {
    // https://emkc.org/api/v2/piston/runtimes  
    const client = piston({ server: "https://emkc.org" });
    const result = await client.execute(lang, code);
    return result;
}

export async function GET(request: any) {
    try {
        // Extract text from the query parameter
        const code = request.nextUrl.searchParams.get("code");
        const language = request.nextUrl.searchParams.get("language");

        if (!code && !language) {
            // Handle the case where 'query' parameter is missing
            return NextResponse.json({ error: "Query parameter is missing" }, { status: 400 });
        }

        const output = await run(language, code);
        return NextResponse.json(output, { status: 200 });
    } catch (error: any) {
        console.error("Error:", error.message);
        // Return an error response if there's an issue
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}