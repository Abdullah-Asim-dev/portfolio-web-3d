'use client';
import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

const KEY = "32166fc9-c8cf-4572-b797-eac70de90839"; 
const AID = "d2c79b07-b0b5-4205-98f9-40a62706a38f";

interface Message { sender: 'user' | 'bot'; text: string; }

const services = [
  "1. Web Dev (MERN): \$500-\$1500 / Rs.140k-420k",
  "2. Mobile App (React Native): \$600-\$2000 / Rs.168k-560k",
  "3. AI Chatbots: \$400-\$1200 / Rs.112k-336k",
  "4. AI Voice (Vapi): \$500-\$1800 / Rs.140k-504k",
  "5. n8n Automation: \$300-\$800 / Rs.84k-224k",
  "6. SaaS Dashboards: \$800-\$2500 / Rs.224k-700k",
  "7. Webhooks & Scrapers: \$250-\$600 / Rs.70k-168k",
  "8. Web3 DApps: \$700-\$2200 / Rs.196k-616k",
  "9. Cloud DevOps: \$350-\$900 / Rs.98k-252k"
];

export default function AiVoiceBot() {
  const [vapi, setVapi] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [lang, setLang] = useState<'EN' | 'URDU'>('EN');
  const [callState, setCallState] = useState<'IDLE' | 'RINGING' | 'ACTIVE'>('IDLE');
  const [step, setStep] = useState<'NONE' | 'ASK_NAME' | 'ASK_EMAIL' | 'ASK_PHONE'>('NONE');
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  useEffect(() => {
    if (step === 'NONE') {
      setMessages([{ sender: 'bot', text: lang === 'EN' 
        ? "Hello! I am Abdullah Assistant. Share requirements or type 'services' for USD/PKR pricing dashboards." 
        : "Salam! Main Abdullah Assistant hoon. Apne business ki requirements share karein ya details ke liye 'services' type karein."
      }]);
    }
  }, [lang, step]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const v = new Vapi(KEY); setVapi(v);
      v.on('call-start', () => setCallState('ACTIVE'));
      v.on('call-end', () => setCallState('IDLE'));
      v.on('error', () => setCallState('IDLE'));
      return () => { v.stop(); };
    }
  }, []);

  const sendToSheets = async (p: typeof lead) => {
    try {
      await fetch('/api/sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: new Date().toISOString(), clientName: p.name, clientEmail: p.email, clientPhone: p.phone, representative: `Abdullah Assistant (${lang})` })
      });
    } catch (e) {}
  };
  const processQuery = (input: string) => {
    const txt = input.trim(); const q = txt.toLowerCase(); const isEn = lang === 'EN';
    if (step === 'ASK_NAME') { 
      setLead(prev => ({ ...prev, name: txt })); setStep('ASK_EMAIL'); 
      setMessages(p => [...p, { sender: 'user', text: txt }, { sender: 'bot', text: isEn ? "Enter business email:" : "Email address enter kijiye:" }]); return;
    }
    if (step === 'ASK_EMAIL') { 
      setLead(prev => ({ ...prev, email: txt })); setStep('ASK_PHONE'); 
      setMessages(p => [...p, { sender: 'user', text: txt }, { sender: 'bot', text: isEn ? "Enter phone with country code:" : "Phone Number type karein:" }]); return;
    }
    if (step === 'ASK_PHONE') {
      const finalPayload = { ...lead, phone: txt }; setLead({ name: '', email: '', phone: '' }); setStep('NONE');
      setMessages(p => [...p, { sender: 'user', text: txt }, { sender: 'bot', text: isEn ? "✓ Saved to Google Sheets." : "✓ Details Sheet me secure save ho chuki hain." }]);
      sendToSheets(finalPayload); return;
    }
    setMessages(p => [...p, { sender: 'user', text: txt }]);
    if (q === 'hi' || q === 'hello' || q === 'salam' || q === 'hey') {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "Hello! How can I help you today?" : "Salam! Main aapki kis tarah madad kar sakta hoon?" }]); return;
    }
    if (q.includes('how are you') || q.includes('kaise') || q.includes('kya haal')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "I am running perfectly!" : "Main bilkul optimized aur fit hoon! Aap batayein?" }]); return;
    }
    if (q.includes('who are you') || q.includes('about you') || q.includes('kon ho') || q.includes('bare me')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "I am **Abdullah Assistant**, built by Abdullah Asim to sync logs to sheets." : "Mera naam **Abdullah Assistant** hai, jise Abdullah Asim ne design kiya hai." }]); return;
    }
    if (q === 'ok' || q === 'yes' || q === 'start' || q.includes('save karo') || q.includes('meeting')) { 
      setStep('ASK_NAME'); setMessages(p => [...p, { sender: 'bot', text: isEn ? "Please provide your Full Name:" : "Pehle apna Full Name likhein:" }]); return;
    }
    if (q.includes('saas') || q.includes('website') || q.includes('web') || q.includes('mern')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "🌐 **Web Dev (MERN / Next.js):**\n- Budget: \$500-\$1,500 | Rs.140k-420k\n- Secure cloud dashboards code layers. Type **'OK'** to book!" : "🌐 **Web Dev (MERN / Next.js):**\n- Budget: \$500-\$1,500 | Rs.140k-420k\n- Custom dashboard aur secure storage. Booking ke liye **'OK'** type karein!" }]); return;
    }
    if (q.includes('automation') || q.includes('n8n') || q.includes('workflow')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "🔄 **n8n Automations:**\n- Budget: \$300-\$800 | Rs.84k-224k\n- Connects databases & APIs into automated pipelines. Type **'OK'** to register!" : "🔄 **n8n Automations:**\n- Budget: \$300-\$800 | Rs.84k-224k\n- Manual entries background webhooks scripts par set ho jati hain. Type **'OK'** to book!" }]); return;
    }
    if (q.includes('bot') || q.includes('voice') || q.includes('call')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "🎙️ **AI Voice Agents (Vapi):**\n- Budget: \$500-\$1,800 | Rs.140k-504k\n- Low-latency calling agents streaming leads directly to sheets. Type **'OK'**!" : "🎙️ **AI Voice Agents (Vapi):**\n- Budget: \$500-\$1,800 | Rs.140k-504k\n- Talking robos support handle karte hain aur direct details update karte hain. Type **'OK'**!" }]); return;
    }
    if (q.includes('problem') || q.includes('error') || q.includes('crash') || q.includes('slow') || q.includes('lag')) {
      setMessages(p => [...p, { sender: 'bot', text: isEn ? "🚨 **Bottleneck:** Code crash or database lag can be optimized using custom cloud grids. Type **'OK'** to debug!" : "🚨 **Problem:** Lag ya crashes ko custom setup se completely resolve kiya ja sakta hai! Type **'OK'** to book slot!" }]); return;
    }
    if (q.includes('service') || q.includes('price') || q.includes('rate') || q.includes('budget') || q.includes('list')) {
      const hd = isEn ? "**9 Portfolio Services (USD/PKR Matrix):**\n\n" : "**Hamari Complete 9 Services Aur Pricing Matrix:**\n\n";
      const ft = isEn ? "\n\nType **'OK'** to book!" : "\n\nConsultancy ke liye chat me **'OK'** type karein.";
      setMessages(p => [...p, { sender: 'bot', text: hd + services.join("\n") + ft }]); return;
    }
    setMessages(p => [...p, { sender: 'bot', text: isEn ? "Understood. Abdullah Asim can engineer this requirement. Type 'services' to check budget." : "Main samajh gaya. Abdullah Asim custom micro-optimized setup kar sakte hain. 'services' type karein." }]);
  };

  const triggerVoiceCallSession = async () => {
    if (!vapi) { alert("Vapi missing."); return; }
    if (callState === 'ACTIVE' || callState === 'RINGING') { vapi.stop(); setCallState('IDLE'); return; }
    try {
      setCallState('RINGING');
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { await navigator.mediaDevices.getUserMedia({ audio: true }); }
      await vapi.start(AID);
    } catch (err) { setCallState('IDLE'); }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto select-none">
        <button type="button" onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 transform relative shadow-2xl ${isOpen ? 'bg-[#096b90] border-[#a1ccdc] text-white rotate-90' : 'bg-[#040911]/90 border-[#096b90]/30 text-[#a1ccdc] hover:border-[#096b90] hover:scale-105'}`}>
          {isOpen ? "✕" : "💬"}
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[310px] sm:w-[370px] h-[420px] max-h-[70vh] z-50 bg-[#040911]/95 backdrop-blur-3xl border border-[#096b90]/20 rounded-2xl p-4 shadow-[0_15px_50px_rgba(4,9,17,0.95)] flex flex-col justify-between overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-5">
          <div className="w-full flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-2 text-left">
              <span className="relative flex h-2 w-2">
                <span className={`relative inline-flex rounded-full h-2 w-2 ${callState === 'ACTIVE' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-widest text-[#a1ccdc] uppercase">Abdullah Assistant</span>
                <span className="text-[9px] text-zinc-500 font-medium tracking-wide">Enterprise Agent Node</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setLang(lang === 'EN' ? 'URDU' : 'EN')} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-black uppercase text-zinc-400 hover:text-white transition-all select-none">{lang === 'EN' ? '🇺🇸 EN' : '🇵🇰 Roman Urdu'}</button>
              <button type="button" onClick={triggerVoiceCallSession} className="px-2 py-1 rounded border text-[9px] font-black uppercase tracking-wider text-[#a1ccdc] hover:bg-[#096b90]/10">{callState === 'ACTIVE' ? 'Disconnect' : 'Voice Call'}</button>
            </div>
          </div>
          <div className="flex-1 w-full overflow-y-auto py-3 space-y-3.5 pr-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-3.5 rounded-xl border text-xs leading-relaxed text-justify font-sans shadow-md whitespace-pre-line ${msg.sender === 'user' ? 'bg-[#096b90]/10 border-[#096b90]/30 text-zinc-100 rounded-tr-none' : 'bg-white/[0.01] border-white/5 text-zinc-400 rounded-tl-none'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if (!chatInput.trim()) return; const m = chatInput.trim(); setChatInput(''); processQuery(m); }} className="w-full flex items-center gap-2 border-t border-white/5 pt-2.5">
            <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} disabled={callState === 'ACTIVE'} placeholder={step !== 'NONE' ? "Enter details matrix..." : lang === 'EN' ? "Websites, workflows..." : "Websites, workflows..."} className="flex-1 bg-[#040911] border border-white/10 hover:border-white/20 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#096b90] transition-all" />
            <button type="submit" className="p-3 rounded-xl border border-[#096b90]/40 bg-[#096b90]/10 text-[#a1ccdc] hover:bg-[#096b90] shrink-0 flex items-center justify-center"><svg className="w-3.5 h-3.5 fill-current transform rotate-45" viewBox="0 0 24 24"><path d="M24 0l-6 22-5-9-11-5z"/></svg></button>
          </form>
        </div>
      )}
    </>
  );
}
