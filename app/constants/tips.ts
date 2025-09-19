export const TIP_ICONS = {
  good: "/icons/check.svg",
  warning: "/icons/warning.svg",
} as const;

export const TIP_STYLES = {
  good: {
    container: "bg-green-50 border border-green-200 text-green-700",
    title: "text-green-800",
  },
  warning: {
    container: "bg-yellow-50 border border-yellow-200 text-yellow-700",
    title: "text-yellow-800",
  },
} as const;
