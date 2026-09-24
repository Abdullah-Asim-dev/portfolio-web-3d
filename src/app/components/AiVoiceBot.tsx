'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

type Lang = 'EN' | 'URDU';
type CallState = 'IDLE' | 'RINGING' | 'ACTIVE';
type Step = 'NONE' | 'ASK_NAME' | 'ASK_EMAIL' | 'ASK_PHONE';

const KEY = '32166fc9-c8cf-4572-b797-eac70de90839';
const AID = 'd2c79b07-b0b5-4205-98f9-40a62706a38f';

const services = [
  '1. Web Dev (MERN): $500-$1500 / Rs.140k-420k',
  '2. Mobile App (React Native): $600-$2000 / Rs.168k-560k',
  '3. AI Chatbots: $400-$1200 / Rs.112k-336k',
  '4. AI Voice (Vapi): $500-$1800 / Rs.140k-504k',
  '5. n8n Automation: $300-$800 / Rs.84k-224k',
  '6. SaaS Dashboards: $800-$2500 / Rs.224k-700k',
  '7. Webhooks & Scrapers: $250-$600 / Rs.70k-168k',
  '8. Web3 DApps: $700-$2200 / Rs.196k-616k',
  '9. Cloud DevOps: $350-$900 / Rs.98k-252k',
];

export default function AiVoiceBot() {
  const [vapi, setVapi] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [lang, setLang] = useState<Lang>('EN');
  const [callState, setCallState] = useState<CallState>('IDLE');
  const [step, setStep] = useState<Step>('NONE');
  const [lead, setLead] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [messages, setMessages] = useState<Message[]>([]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const vapiRef = useRef<any>(null);

  // Scroll chat only when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  // Initial / language message
  useEffect(() => {
    if (step !== 'NONE') return;

    setMessages([
      {
        sender: 'bot',
        text:
          lang === 'EN'
            ? "Hello! I am Abdullah Assistant. Share requirements or type 'services' for USD/PKR pricing dashboards."
            : "Salam! Main Abdullah Assistant hoon. Apne business ki requirements share karein ya details ke liye 'services' type karein.",
      },
    ]);
  }, [lang, step]);

  // Cleanup Vapi only when component unmounts
  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const sendToSheets = async (payload: typeof lead) => {
    try {
      await fetch('/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          clientName: payload.name,
          clientEmail: payload.email,
          clientPhone: payload.phone,
          representative: `Abdullah Assistant (${lang})`,
        }),
      });
    } catch {
      // Keep UI responsive even if Sheets request fails
    }
  };

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text,
      },
    ]);
  };

  const addConversation = (userText: string, botText: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: userText,
      },
      {
        sender: 'bot',
        text: botText,
      },
    ]);
  };

  const processQuery = (input: string) => {
    const txt = input.trim();
    const q = txt.toLowerCase();
    const isEn = lang === 'EN';

    if (!txt) return;

    if (step === 'ASK_NAME') {
      setLead((prev) => ({
        ...prev,
        name: txt,
      }));

      setStep('ASK_EMAIL');

      addConversation(
        txt,
        isEn
          ? 'Enter business email:'
          : 'Email address enter kijiye:'
      );

      return;
    }

    if (step === 'ASK_EMAIL') {
      setLead((prev) => ({
        ...prev,
        email: txt,
      }));

      setStep('ASK_PHONE');

      addConversation(
        txt,
        isEn
          ? 'Enter phone with country code:'
          : 'Phone Number type karein:'
      );

      return;
    }

    if (step === 'ASK_PHONE') {
      const finalPayload = {
        ...lead,
        phone: txt,
      };

      setLead({
        name: '',
        email: '',
        phone: '',
      });

      setStep('NONE');

      addConversation(
        txt,
        isEn
          ? '✓ Saved to Google Sheets.'
          : '✓ Details Sheet me secure save ho chuki hain.'
      );

      void sendToSheets(finalPayload);

      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: txt,
      },
    ]);

    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'salam' ||
      q === 'hey'
    ) {
      addBotMessage(
        isEn
          ? 'Hello! How can I help you today?'
          : 'Salam! Main aapki kis tarah madad kar sakta hoon?'
      );

      return;
    }

    if (
      q.includes('how are you') ||
      q.includes('kaise') ||
      q.includes('kya haal')
    ) {
      addBotMessage(
        isEn
          ? 'I am running perfectly!'
          : 'Main bilkul optimized aur fit hoon! Aap batayein?'
      );

      return;
    }

    if (
      q.includes('who are you') ||
      q.includes('about you') ||
      q.includes('kon ho') ||
      q.includes('bare me')
    ) {
      addBotMessage(
        isEn
          ? 'I am Abdullah Assistant, built by Abdullah Asim to sync logs to sheets.'
          : 'Mera naam Abdullah Assistant hai, jise Abdullah Asim ne design kiya hai.'
      );

      return;
    }

    if (
      q === 'ok' ||
      q === 'yes' ||
      q === 'start' ||
      q.includes('save karo') ||
      q.includes('meeting')
    ) {
      setStep('ASK_NAME');

      addBotMessage(
        isEn
          ? 'Please provide your Full Name:'
          : 'Pehle apna Full Name likhein:'
      );

      return;
    }

    if (
      q.includes('saas') ||
      q.includes('website') ||
      q.includes('web') ||
      q.includes('mern')
    ) {
      addBotMessage(
        isEn
          ? "🌐 Web Dev (MERN / Next.js):\n- Budget: $500-$1,500 | Rs.140k-420k\n- Secure cloud dashboards code layers. Type 'OK' to book!"
          : "🌐 Web Dev (MERN / Next.js):\n- Budget: $500-$1,500 | Rs.140k-420k\n- Custom dashboard aur secure storage. Booking ke liye 'OK' type karein!"
      );

      return;
    }

    if (
      q.includes('automation') ||
      q.includes('n8n') ||
      q.includes('workflow')
    ) {
      addBotMessage(
        isEn
          ? "🔄 n8n Automations:\n- Budget: $300-$800 | Rs.84k-224k\n- Connects databases & APIs into automated pipelines. Type 'OK' to register!"
          : "🔄 n8n Automations:\n- Budget: $300-$800 | Rs.84k-224k\n- Manual entries background webhooks scripts par set ho jati hain. Type 'OK' to book!"
      );

      return;
    }

    if (
      q.includes('bot') ||
      q.includes('voice') ||
      q.includes('call')
    ) {
      addBotMessage(
        isEn
          ? "🎙️ AI Voice Agents (Vapi):\n- Budget: $500-$1,800 | Rs.140k-504k\n- Low-latency calling agents streaming leads directly to sheets. Type 'OK'!"
          : "🎙️ AI Voice Agents (Vapi):\n- Budget: $500-$1,800 | Rs.140k-504k\n- Talking robos support handle karte hain aur direct details update karte hain. Type 'OK'!"
      );

      return;
    }

    if (
      q.includes('problem') ||
      q.includes('error') ||
      q.includes('crash') ||
      q.includes('slow') ||
      q.includes('lag')
    ) {
      addBotMessage(
        isEn
          ? "🚨 Bottleneck: Code crash or database lag can be optimized using custom cloud grids. Type 'OK' to debug!"
          : "🚨 Problem: Lag ya crashes ko custom setup se completely resolve kiya ja sakta hai! Type 'OK' to book slot!"
      );

      return;
    }

    if (
      q.includes('service') ||
      q.includes('price') ||
      q.includes('rate') ||
      q.includes('budget') ||
      q.includes('list')
    ) {
      const heading = isEn
        ? '9 Portfolio Services (USD/PKR Matrix):\n\n'
        : 'Hamari Complete 9 Services Aur Pricing Matrix:\n\n';

      const footer = isEn
        ? "\n\nType 'OK' to book!"
        : "\n\nConsultancy ke liye chat me 'OK' type karein.";

      addBotMessage(
        heading + services.join('\n') + footer
      );

      return;
    }

    addBotMessage(
      isEn
        ? "Understood. Abdullah Asim can engineer this requirement. Type 'services' to check budget."
        : "Main samajh gaya. Abdullah Asim custom micro-optimized setup kar sakte hain. 'services' type karein."
    );
  };

  const triggerVoiceCallSession = async () => {
    try {
      // Stop current call
      if (
        callState === 'ACTIVE' ||
        callState === 'RINGING'
      ) {
        vapiRef.current?.stop();
        setCallState('IDLE');
        return;
      }

      setCallState('RINGING');

      // Load Vapi only when user actually requests a voice call
      if (!vapiRef.current) {
        const VapiModule = await import('@vapi-ai/web');
        const VapiClient = VapiModule.default;

        const client = new VapiClient(KEY);

        client.on('call-start', () => {
          setCallState('ACTIVE');
        });

        client.on('call-end', () => {
          setCallState('IDLE');
        });

        client.on('error', () => {
          setCallState('IDLE');
        });

        vapiRef.current = client;
        setVapi(client);
      }

      const client = vapiRef.current;

      if (
        navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia
      ) {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      }

      await client.start(AID);
    } catch {
      setCallState('IDLE');
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const message = chatInput.trim();

    if (!message) return;

    setChatInput('');
    processQuery(message);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto select-none">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen
              ? 'Close Abdullah Assistant'
              : 'Open Abdullah Assistant'
          }
          className={`relative flex h-14 w-14 transform items-center justify-center rounded-full border shadow-2xl transition-all duration-300 ${
            isOpen
              ? 'rotate-90 border-[#a1ccdc] bg-[#096b90] text-white'
              : 'border-[#096b90]/30 bg-[#040911]/90 text-[#a1ccdc] hover:scale-105 hover:border-[#096b90]'
          }`}
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[420px] max-h-[70vh] w-[310px] flex-col justify-between overflow-hidden rounded-2xl border border-[#096b90]/20 bg-[#040911]/95 p-4 shadow-[0_15px_50px_rgba(4,9,17,0.95)] backdrop-blur-3xl sm:w-[370px]">
          <div className="flex w-full items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-2 text-left">
              <span className="relative flex h-2 w-2">
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    callState === 'ACTIVE'
                      ? 'bg-red-500'
                      : 'bg-emerald-500'
                  }`}
                />
              </span>

              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-[#a1ccdc]">
                  Abdullah Assistant
                </span>

                <span className="text-[9px] font-medium tracking-wide text-zinc-500">
                  Enterprise Agent Node
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setLang((prev) =>
                    prev === 'EN' ? 'URDU' : 'EN'
                  )
                }
                className="select-none rounded border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-black uppercase text-zinc-400 transition-all hover:text-white"
              >
                {lang === 'EN'
                  ? '🇺🇸 EN'
                  : '🇵🇰 Roman Urdu'}
              </button>

              <button
                type="button"
                onClick={triggerVoiceCallSession}
                className="rounded border px-2 py-1 text-[9px] font-black uppercase tracking-wider text-[#a1ccdc] hover:bg-[#096b90]/10"
              >
                {callState === 'ACTIVE'
                  ? 'Disconnect'
                  : callState === 'RINGING'
                    ? 'Connecting...'
                    : 'Voice Call'}
              </button>
            </div>
          </div>

          <div className="flex w-full flex-1 space-y-3.5 overflow-y-auto py-3 pr-1">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.sender}-${idx}`}
                className={`w-full flex ${
                  msg.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-xl border p-3.5 text-justify font-sans text-xs leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'rounded-tr-none border-[#096b90]/30 bg-[#096b90]/10 text-zinc-100'
                      : 'rounded-tl-none border-white/5 bg-white/[0.01] text-zinc-400'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={chatEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center gap-2 border-t border-white/5 pt-2.5"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(event) =>
                setChatInput(event.target.value)
              }
              disabled={callState === 'ACTIVE'}
              placeholder={
                step !== 'NONE'
                  ? 'Enter details matrix...'
                  : 'Websites, workflows...'
              }
              className="flex-1 rounded-xl border border-white/10 bg-[#040911] px-3.5 py-3 text-xs text-white transition-all hover:border-white/20 focus:border-[#096b90] focus:outline-none"
            />

            <button
              type="submit"
              aria-label="Send message"
              className="flex shrink-0 items-center justify-center rounded-xl border border-[#096b90]/40 bg-[#096b90]/10 p-3 text-[#a1ccdc] hover:bg-[#096b90]"
            >
              <svg
                className="h-3.5 w-3.5 rotate-45 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 0l-6 22-5-9-11-5z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}