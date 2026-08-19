export default function Loading() {
  return (
    <div className="bg-[#FDFBF7] min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Brand Ring */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#C5A059]/20 border-t-[#C5A059] animate-spin" />
          <span className="font-serif text-xl font-bold text-[#1C1613]">V</span>
        </div>

        <div className="text-center space-y-1">
          <span className="font-serif text-base font-bold tracking-wider text-[#1C1613] uppercase block">
            VANDANAM
          </span>
          <p className="text-xs text-[#2E5A44] font-medium tracking-widest uppercase animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
