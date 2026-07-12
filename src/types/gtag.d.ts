interface Window {
  gtag?: (command: string, event: string, params?: Record<string, string | number | undefined>) => void;
}
