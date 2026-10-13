import Link from "next/link";

type LogoMarkProps = {
  size?: number;
  id?: string;
  className?: string;
};

/**
 * BrandThink monogram: a geometric "B" drawn with rounded strokes on a
 * gradient tile, with a small accent dot (the "spark" of an idea).
 */
export function LogoMark({ size = 40, id = "bt", className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.55" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#312E81" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="24" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${id}-bg)`} />
      <rect width="48" height="24" rx="13" fill={`url(#${id}-shine)`} />
      <path
        d="M17 13v22M17 13h8.5a5.5 5.5 0 0 1 0 11H17M17 24h10a5.5 5.5 0 0 1 0 11H17"
        stroke="#fff"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35.5" cy="13" r="2.6" fill="#FBBF24" />
    </svg>
  );
}

type LogoProps = {
  variant?: "dark" | "light";
  id?: string;
};

export default function Logo({ variant = "dark", id = "bt" }: LogoProps) {
  const text = variant === "dark" ? "text-ink" : "text-white";
  const accent = variant === "dark" ? "text-brand-600" : "text-brand-300";

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="BrandThink home">
      <LogoMark id={id} className="transition-transform duration-300 group-hover:-rotate-6" />
      <span className={`font-display text-xl font-extrabold tracking-tight ${text}`}>
        Brand<span className={accent}>Think</span>
      </span>
    </Link>
  );
}
