// Server Component - Hidden pricing page (not linked in navigation)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions Pricing — ARC AI Agency",
  description: "Explore ARC AI solutions including Flow, Engage, Qualify, and Command packages.",
  robots: {
    index: false,
    follow: false,
  },
};

import AIPricingClient from "./AIPricingClient";

export default function AIPricingPage() {
  return <AIPricingClient />;
}
