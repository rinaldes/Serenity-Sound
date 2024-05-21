import styles from "./pricing.module.css";

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
];

export const tiers: PricingTier[] = [
  {
    name: "Serenity Breathe",
    id: "0",
    href: "/subscribe",
    price: { "1": "$0" },
    discountPrice: { "1": "" },
    description: `Take a deep breath and find moments of calm with our complimentary tier.`,
    features: [
      `Explore a curated selection of playlists designed to ease stress and promote relaxation.`,
      `Perfect for short breaks, mindful moments, or unwinding after a long day.`,
      `Limited skips per hour.`,
      `Standard audio quality.`,
    ],
    featured: false,
    highlighted: false,
    soldOut: true,
    cta: `Sign up`,
  },
  {
    name: "Serenity Unwind",
    id: "1",
    href: "/subscribe",
    price: { "1": "$3.99" },
    discountPrice: { "1": "" },
    description: `Upgrade to Serenity Unwind and unlock a world of personalized peace.`,
    features: [
      `Enjoy everything in Breathe`,
      `Unlimited skips for uninterrupted relaxation.`,
      `High-fidelity audio for a truly immersive listening experience.`,
      `Access to a wider library of expertly curated playlists for various moods and activities.`,
      `Sleep timers and relaxation tools to help you drift off to sleep peacefully.`,
      `Download music for offline listening - unwind anywhere, anytime.`,
    ],
    featured: false,
    highlighted: true,
    soldOut: true,
    cta: `Get started`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const cn = (...args: Array<string | boolean | undefined | null>) =>
  args.filter(Boolean).join(" ");

export default function Plan() {
  return (
    <div className={cn("flex flex-col w-full items-center")}>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="isolate mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-0 select-none">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "bg-white ring-gray-300/70 ring-1 rounded-3xl p-8 xl:p-10",
                  tier.highlighted ? styles.fancyGlassContrast : ""
                )}
              >
                <h3
                  id={tier.id}
                  className="text-black text-2xl font-bold tracking-tight"
                >
                  {tier.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-6">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-black text-4xl font-bold tracking-tight">
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[0]}
                  </span>

                  <span className="text-black dark:text-white">
                    {typeof tier.discountPrice === "string"
                      ? tier.discountPrice
                      : tier.discountPrice[0]}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={cn(
                    "flex mt-6 shadow-sm",
                    tier.soldOut ? "pointer-events-none" : ""
                  )}
                >
                  <button
                    disabled={tier.soldOut}
                    className={cn(
                      "w-full inline-flex items-center justify-center font-medium ring-offset-background hover:opacity-80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md",
                      tier.featured || tier.soldOut ? "grayscale" : "",
                      !tier.highlighted && !tier.featured
                        ? "bg-gray-100 dark:bg-gray-600 border border-solid border-gray-300 dark:border-gray-800"
                        : "bg-pink-300/70 text-pink-foreground hover:bg-pink-400/70 dark:bg-pink-700 dark:hover:bg-pink-800/90",
                      tier.featured ? "!bg-gray-100 dark:!bg-black" : ""
                    )}
                  >
                    {tier.soldOut ? "Coming Soon" : tier.cta}
                  </button>
                </a>

                <ul className="text-gray-700 dark:text-gray-400 mt-8 space-y-3 text-sm leading-6 xl:mt-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          tier.highlighted ? "text-pink-500" : "text-gray-500",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
