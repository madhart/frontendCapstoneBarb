export default function Loading() {
  return (
    <div className="w-full h-1 bg-slate-100 overflow-hidden">
      <div className="h-full w-1/3 bg-blue-500 animate-[slide_1.2s_ease-in-out_infinite]" />
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
