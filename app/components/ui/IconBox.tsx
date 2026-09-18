import {
  Activity,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Database,
  Factory,
  GraduationCap,
  Heart,
  Landmark,
  LineChart,
  Package,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  WalletCards,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

interface IconBoxProps {
  icon: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  heart: Heart,
  code: Code2,
  finance: Landmark,
  retail: ShoppingBag,
  manufacturing: Factory,
  education: GraduationCap,
  logistics: Truck,
  building: Building2,
  activity: Activity,
  chart: LineChart,
  database: Database,
  cloud: Cloud,
  typescript: Code2,
  docker: Package,
  python: Code2,
  tailwind: Sparkles,
  workflow: Workflow,
  wallet: WalletCards,
  briefcase: BriefcaseBusiness,
};

const sizeMap = {
  sm: "h-9 w-9 p-1.5",
  md: "h-11 w-11 p-2",
  lg: "h-14 w-14 p-2.5",
};

const technologyMarks: Record<string, ReactNode> = {
  react: <span className="text-[22px] leading-none">⚛</span>,
  django: <span className="text-[18px] font-black leading-none">dj</span>,
  typescript: <span className="bg-[#3178c6] px-1 text-[14px] font-black leading-5 text-white">TS</span>,
  python: <span className="text-[18px] font-black leading-none">⌘</span>,
  tailwind: <span className="text-[21px] font-black leading-none">≋</span>,
};

export default function IconBox({
  icon,
  size = "md",
  className = "",
}: IconBoxProps) {
  const IconComponent = iconMap[icon] ?? Code2;
  const technologyMark = technologyMarks[icon];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-[#ccecf7] bg-[#edf9ff] text-[#0caee7] ${sizeMap[size]} ${className}`}
    >
      {technologyMark ?? <IconComponent className="h-full w-full" strokeWidth={1.8} />}
    </div>
  );
}