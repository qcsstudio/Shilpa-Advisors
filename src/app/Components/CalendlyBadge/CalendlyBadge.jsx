'use client';
import { useEffect } from "react";

// ✅ Default Export for Component <CalendlyBadge />
export default function CalendlyBadge() {
  useEffect(() => {
    const head = document.querySelector("head");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head.appendChild(script);
  }, []);

  return null; 
}


export const handleuseCalendly = () => {
  return () => {
    console.log("Calendly button clicked");
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/shilpa-advisors/30min",
      });
    } else {
      console.warn("Calendly is not loaded yet.");
    }
  };
};

