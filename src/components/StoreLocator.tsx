"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const CONFIGURATION = {
  "locations": [
    { "title": "91 Daisy Villa Ave", "address1": "91 Daisy Villa Ave", "address2": "Colombo 00500, Sri Lanka", "coords": { "lat": 6.892012239392662, "lng": 79.85625421256769 }, "placeId": "Eiw5MSBEYWlzeSBWaWxsYSBBdmUsIENvbG9tYm8gMDA1MDAsIFNyaSBMYW5rYSIwEi4KFAoSCUUnb_rbW-I6EcQXsR_UbVCtEFsqFAoSCbVILw7cW-I6EQUU3ccg_UAY" }
  ],
  "mapOptions": { "center": { "lat": 38.0, "lng": -100.0 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 4, "zoomControl": true, "maxZoom": 17, "mapId": "" },
  "mapsApiKey": process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  "capabilities": { "input": false, "autocomplete": false, "directions": false, "distanceMatrix": false, "details": false, "actions": false }
};

export default function StoreLocator() {
  return (
    <div className="w-full rounded-3xl overflow-hidden border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mt-16 mb-8 bg-white relative">
      <div className="w-full h-[600px] relative">
        <iframe
          src="https://maps.google.com/maps?q=91%20Daisy%20Villa%20Ave,%20Colombo%2000500,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ARC AI Office Location"
          className="absolute inset-0"
        />
        {/* Optional Glassmorphism overlay for styling */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl pointer-events-none shadow-2xl">
          <h3 className="text-white font-bold text-xl mb-1">ARC AI Agency</h3>
          <p className="text-[rgb(200,200,200)] text-sm">91 Daisy Villa Ave</p>
          <p className="text-[rgb(200,200,200)] text-sm">Colombo 00500, Sri Lanka</p>
        </div>
      </div>
    </div>
  );
}
