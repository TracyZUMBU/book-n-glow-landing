import { initGA, trackPageView } from "@/lib/analytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Load Google Analytics script if ID is provided
    if (GA_MEASUREMENT_ID) {
      // Load the gtag.js script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize GA after script loads
      script.onload = () => {
        initGA();
      };
    }
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (GA_MEASUREMENT_ID) {
      trackPageView(location.pathname + location.search);
    }
  }, [location, GA_MEASUREMENT_ID]);

  return null;
};

export default GoogleAnalytics;
