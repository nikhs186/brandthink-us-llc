type ClientLogoProps = {
  slug: string;
  size?: number;
  className?: string;
};

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Logo marks for the sample client projects. They inherit color from `currentColor`. */
const marks: Record<string, JSX.Element> = {
  // Twin mountain peaks with a snow cap
  "northpeak-outdoors": (
    <>
      <path d="M4 40 19 14l9 15 5-8 11 19H4z" fill="currentColor" />
      <path d="m14.5 21.8 4.5-7.8 4.5 7.8-2.2 1.4-2.3-2.1-2.3 2.1-2.2-1.4z" fill="currentColor" opacity="0.45" />
    </>
  ),
  // Rising ledger bars inside a rounded frame
  ledgerly: (
    <>
      <rect x="6" y="6" width="36" height="36" rx="10" {...common} />
      <path d="M16 32v-6M24 32V18M32 32V14" {...common} strokeWidth={4} />
    </>
  ),
  // Four-petal flower
  "bloom-clinic": (
    <>
      <ellipse cx="24" cy="13.5" rx="7" ry="9.5" fill="currentColor" />
      <ellipse cx="24" cy="34.5" rx="7" ry="9.5" fill="currentColor" opacity="0.75" />
      <ellipse cx="13.5" cy="24" rx="9.5" ry="7" fill="currentColor" opacity="0.6" />
      <ellipse cx="34.5" cy="24" rx="9.5" ry="7" fill="currentColor" opacity="0.9" />
      <circle cx="24" cy="24" r="4.5" fill="currentColor" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
    </>
  ),
  // Coffee cup with steam
  urbanbrew: (
    <>
      <path d="M9 21h24v9a10 10 0 0 1-10 10h-4A10 10 0 0 1 9 30v-9z" fill="currentColor" />
      <path d="M33 24h2.5a5 5 0 0 1 0 10H32" {...common} />
      <path d="M16 6c-2 2.5 2 4.5 0 8M23 6c-2 2.5 2 4.5 0 8" {...common} strokeWidth={2.5} opacity="0.7" />
    </>
  ),
  // Forward chevrons along a route
  fleetwise: (
    <>
      <path d="m10 12 12 12-12 12" {...common} strokeWidth={5} />
      <path d="m24 12 12 12-12 12" {...common} strokeWidth={5} opacity="0.55" />
      <circle cx="41" cy="24" r="3" fill="currentColor" />
    </>
  ),
  // Architectural arch with a star
  "atelier-nova": (
    <>
      <path d="M8 42V24a16 16 0 0 1 32 0v18" {...common} />
      <path d="M17 42V25a7 7 0 0 1 14 0v17" {...common} opacity="0.55" />
      <path d="m24 4 1.6 3.4L29 9l-3.4 1.6L24 14l-1.6-3.4L19 9l3.4-1.6L24 4z" fill="currentColor" />
    </>
  ),
};

export default function ClientLogo({ slug, size = 48, className }: ClientLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      {marks[slug]}
    </svg>
  );
}
