const ScrollIndicator = () => {
  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
      <p className="text-xs tracking-widest text-white/100 writing-vertical rotate-180 uppercase mb-6 font-light" style={{ fontFamily: 'Kumbh Sans' }}>
        Desliza para explorar
      </p>
      <div className="relative h-24 w-[2px] bg-white/10 overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-scrollDown rounded-full" />
      </div>
    </div>
  );
};

export default ScrollIndicator;