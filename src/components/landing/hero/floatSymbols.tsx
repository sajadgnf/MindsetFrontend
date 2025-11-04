const symbols = [
  {
    label: "∑",
    className: "absolute top-42 left-[10%] text-6xl text-blue-400/20 animate-float",
  },
  {
    label: "∫",
    className: "absolute top-40 right-[15%] text-5xl text-blue-400/20 animate-float-delayed",
  },
  {
    label: "π",
    className: "absolute bottom-32 left-[20%] text-7xl text-violet-400/20 animate-float",
  },
  {
    label: "√",
    className: "absolute bottom-60 right-[25%] text-4xl text-cyan-400/20 animate-float-delayed",
  },
];

const FloatSymbols = () => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {symbols.map((item) => (
        <div key={item.label} className={item.className}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default FloatSymbols;
