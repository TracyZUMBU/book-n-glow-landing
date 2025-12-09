// Google Analytics 4 utilities

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics 4
 */
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.warn("Google Analytics: VITE_GA_MEASUREMENT_ID is not set");
    }
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle page views manually for SPA
  });
};

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", eventName, eventParams);
};

/**
 * Track conversion events
 */
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    value: value,
  });
};

/**
 * Track button clicks
 */
export const trackClick = (buttonName: string, location?: string) => {
  trackEvent("click", {
    button_name: buttonName,
    location: location,
  });
};
