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

import WebPricingClient from "./WebPricingClient";

export default function WebPricingPage() {
  return <WebPricingClient />;
}
