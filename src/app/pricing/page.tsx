// Server Component - Hidden pricing page (not linked in navigation)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — ARC AI Agency",
  description: "Explore ARC AI pricing packages for premium websites, CRM systems, and AI-powered solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

import PricingClient from "./PricingClient";

export default function PricingPage() {
  return <PricingClient />;
}
