import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 5.5C3 4.1 4.1 3 5.5 3H7c.6 0 1.1.4 1.3 1l1 3.2c.1.5 0 1-.4 1.4L7.6 10.3a13 13 0 0 0 6.1 6.1l1.7-1.3c.4-.4.9-.5 1.4-.4l3.2 1c.6.2 1 .7 1 1.3v1.5c0 1.4-1.1 2.5-2.5 2.5A16 16 0 0 1 3 5.5Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 0, fill: "currentColor", ...props })}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.18.84 5.71 2.37a8.03 8.03 0 0 1 2.37 5.71c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.05 8.05 0 0 1-1.26-4.36c0-4.46 3.63-8.09 8.1-8.09Zm-2.56 4.4c-.2 0-.5.07-.77.36-.27.29-1.02.99-1.02 2.42s1.04 2.81 1.19 3.01c.15.2 2.05 3.13 5.04 4.27 2.49.95 3 .76 3.54.71.54-.05 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.56-.34-.29-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.49-.66-.5l-.56-.01Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c4-4.5 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base({ fill: "currentColor", stroke: "none", ...props })}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17.9 6.7 19.6l1-5.8-4.2-4.1 5.9-.9L12 3.5Z" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6a3.5 3.5 0 0 0 4.6 4.6L21 8.7a5.5 5.5 0 0 1-7.3 7.3L7 22.6a2.1 2.1 0 0 1-3-3l6.6-6.6A5.5 5.5 0 0 1 17.9 5L16 6.9" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  );
}

export function DrillIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h9a2 2 0 0 1 2 2v1h4l2 1.5-2 1.5h-4v1a2 2 0 0 1-2 2H8" />
      <path d="M4 7v8a1 1 0 0 0 1 1h3V7" />
      <path d="M8 16v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3" />
    </svg>
  );
}

export function GrinderIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 9h8l2 2h3" />
      <path d="M3 9v6h8v-6" />
      <circle cx="18" cy="12" r="4" />
    </svg>
  );
}

export function SawIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 16h13l4-9" />
      <path d="M3 16v3a1 1 0 0 0 1 1h6" />
      <path d="M6 16v2M9 16v2M12 16v2" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
    </svg>
  );
}

export function CompressorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="10" width="14" height="9" rx="2" />
      <circle cx="8" cy="14.5" r="2.5" />
      <path d="M17 12h2a2 2 0 0 1 2 2v3M14 10V7a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 14" />
      <path d="M5 19c4-4 7-6 11-7" />
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M21 20a6 6 0 0 0-4-5.6" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.2a2.5 2.5 0 0 1 5 .3c0 1.5-1.5 2-2.5 2.5s-2.5 1-2.5 2.5a2.5 2.5 0 0 0 5 .3" />
    </svg>
  );
}
