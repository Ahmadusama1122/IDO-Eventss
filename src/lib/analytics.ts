/** GA4 custom event helpers — safe to call even if GA is not loaded. */

type GtagEvent = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
};

function gtag(event: string, params?: GtagEvent) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

/** Fire when a quote form is successfully submitted. */
export function trackGenerateLead(eventType: string) {
  gtag("generate_lead", {
    event_category: "quote",
    event_label: eventType,
  });
}

/** Fire when a user clicks a tel: link. */
export function trackPhoneClick() {
  gtag("phone_call_click", {
    event_category: "contact",
    event_label: "phone",
  });
}

/** Fire when a user clicks the WhatsApp link. */
export function trackWhatsAppClick() {
  gtag("phone_call_click", {
    event_category: "contact",
    event_label: "whatsapp",
  });
}
