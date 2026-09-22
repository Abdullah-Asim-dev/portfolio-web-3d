import dynamic from 'next/dynamic';

// 🚀 ENTERPRISE PERFORMANCE FIX: Lazy load the entry node to split heavy JavaScript chunks.
// This allows the browser to paint the website instantly without freezing the CPU main thread.
const HomeClient = dynamic(
  () => import('./components/HomeClient'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 h-screen w-full bg-[#040911] flex flex-col items-center justify-center space-y-3.5 select-none">
        {/* Extremely lightweight CSS pulse loader that consumes zero GPU memory */}
        <div className="w-10 h-10 rounded-full border-2 border-[#096b90]/20 border-t-[#a1ccdc] animate-spin" />
        <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase animate-pulse">
          Initializing Abdullah Portfolio Mesh...
        </span>
      </div>
    )
  }
);

export default function Page() {
  return <HomeClient />;
}
