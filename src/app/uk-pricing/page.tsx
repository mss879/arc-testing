// Server Component - Hidden pricing page for UK clients (not linked in navigation)
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Pricing — ARC AI Agency",
  description:
    "Explore ARC AI pricing packages for premium websites, CRM systems, and AI-powered solutions in the UK.",
  robots: {
    index: false,
    follow: false,
  },
};

import UKPricingClient from "./UKPricingClient";

export default function UKPricingPage() {
  return <UKPricingClient />;
}
