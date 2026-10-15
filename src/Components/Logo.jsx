export default function Logo({ light = false, large = false }) {
  return (
    <div className={`flex items-center ${large ? "gap-2.5" : "gap-2"}`}>
      <img
        src="/logo.png"
        alt="Zanqiz"
        className={large ? "h-12 w-auto sm:h-14" : "h-10 w-auto"}
      />
      <span
        className={`font-display font-bold tracking-tight ${
          large ? "text-2xl sm:text-[1.7rem]" : "text-xl"
        } ${light ? "text-white" : "text-ink"}`}
      >
        Zanqiz
      </span>
    </div>
  );
}
