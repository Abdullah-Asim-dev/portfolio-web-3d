import { NextResponse } from 'next/server';

// 🚀 ENTERPRISE INTELLIGENCE CONTEXT: Fully configured with Groq API Cloud Matrix Loops
const GROQ_API_KEY = "dummy_key_placeholder"; // <--- Yahan apni real Groq API Key (gsk_...) paste karein
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwjC18cFxutTs-y4gGQQEhhhpUtamZ-13JwIB3q9qZskv3lV94RK8HLKrnV9Z7-zA0/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 📡 PIPELINE SWITCH A: If user payload data is a spreadsheet logging transmission
    if (data.type === 'SHEET_LOG') {
      const formBody = new URLSearchParams({
        timestamp: data.timestamp || new Date().toISOString(),
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        representative: data.representative
      });

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      return NextResponse.json({ status: 'success' });
    }

    // 🧠 PIPELINE SWITCH B: Chat generation targeting real-time Groq Cloud models
    const systemPrompt = `You are 'Abdullah Assistant', a highly professional virtual assistant engineered by Abdullah Asim.
Abdullah Asim is an expert Senior MERN Stack Developer, React Native Apps Engineer, and AI Automation Architect.
Here is your complete 9 Portfolio Services and Budget Breakdown context:
1. Custom Web Development (MERN Stack): $500 - $1,500 | Rs. 140,000 - Rs. 420,000
2. Mobile App Development (React Native): $600 - $2,000 | Rs. 168,000 - Rs. 560,000
3. AI Chatbots & Conversational Flows: $400 - $1,200 | Rs. 112,000 - Rs. 336,000
4. AI Voice Agents & Calling Bots (Vapi): $500 - $1,800 | Rs. 140,000 - Rs. 504,000
5. n8n Workflow & API Automations: $300 - $800 | Rs. 84,000 - Rs. 224,000
6. SaaS Dashboard Architectures: $800 - $2,500 | Rs. 224,000 - Rs. 700,000
7. Custom Webhooks & Web Scrapers System: $250 - $600 | Rs. 70,000 - Rs. 168,000
8. Web3 & Decentralized DApps Layouts: $700 - $2,200 | Rs. 196,000 - Rs. 616,000
9. DevOps & Serverless Cloud Deployments: $350 - $900 | Rs. 98,000 - Rs. 252,000

Respond politely in the language the user speaks. If they speak Roman Urdu, answer them back in natural, short, professional Roman Urdu (e.g., 'Main aapki web development requirements help kar sakta hoon...'). Always pitch the absolute advantages of working with Abdullah. If they look ready to hire or book, instruct them to type 'OK' or 'START' to launch the scheduling tracker.`;

    const groqResponse = await fetch("https://groq.com", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // Ultra low-latency processing speed token
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: data.prompt }
        ],
        temperature: 0.6,
        max_tokens: 300
      })
    });

    const groqJson = await groqResponse.json();
    const botReply = groqJson.choices[0].message.content;

    return NextResponse.json({ status: 'success', reply: botReply });

  } catch (error: any) {
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
