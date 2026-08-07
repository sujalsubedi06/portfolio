import type { Project } from "@/types";

type Thumbnail = Project["thumbnail"];

function Dashboard() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <rect x="14" y="16" width="172" height="10" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="14" y="34" width="60" height="70" rx="6" fill="currentColor" opacity="0.12" />
      <polyline
        points="86,86 106,60 124,72 148,40 172,54"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <circle cx="172" cy="54" r="3.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function Cube() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <g transform="translate(100 60)" opacity="0.7">
        <polygon points="0,-34 30,-17 30,17 0,34 -30,17 -30,-17" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <polygon points="0,-34 30,-17 0,0 -30,-17" fill="currentColor" opacity="0.18" />
        <line x1="0" y1="0" x2="0" y2="34" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <line x1="0" y1="0" x2="30" y2="-17" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <line x1="0" y1="0" x2="-30" y2="-17" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      </g>
    </svg>
  );
}

function CloudShape() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <g opacity="0.65" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M60 76c-12 0-20-9-20-19s9-18 19-18c2-14 14-24 28-24 15 0 27 11 29 25 12 1 21 11 21 22 0 12-10 22-22 22H60z" />
      </g>
      <path
        d="M70 88 Q100 78 130 88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.4"
      />
    </svg>
  );
}

function Mobile() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${64 + i * 30} 18)`} opacity={0.85 - i * 0.2}>
          <rect x="0" y="0" width="40" height="84" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="6" y="10" width="28" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="6" y="22" width="20" height="4" rx="2" fill="currentColor" opacity="0.25" />
          <rect x="6" y="60" width="28" height="14" rx="4" fill="currentColor" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

function Storefront() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      <g opacity="0.7" stroke="currentColor" fill="none" strokeWidth="1.6">
        <path d="M40 40 L48 20 H152 L160 40" />
        <path d="M40 40 V96 H160 V40" />
        <path d="M40 40 Q60 54 80 40 T120 40 T160 40" />
      </g>
      <rect x="90" y="66" width="20" height="30" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

const MAP: Record<Thumbnail, React.ComponentType> = {
  dashboard: Dashboard,
  cube: Cube,
  cloud: CloudShape,
  mobile: Mobile,
  storefront: Storefront,
};

export function ProjectThumbnail({ type }: { type: Thumbnail }) {
  const Shape = MAP[type];
  return (
    <div className="flex h-full w-full items-center justify-center text-[var(--color-text-faint)]">
      <Shape />
    </div>
  );
}
