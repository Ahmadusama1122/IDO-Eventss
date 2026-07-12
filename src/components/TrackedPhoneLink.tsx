"use client";

import { trackPhoneClick } from "@/lib/analytics";

export function TrackedPhoneLink({ href, className, children }: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={trackPhoneClick}>
      {children}
    </a>
  );
}
