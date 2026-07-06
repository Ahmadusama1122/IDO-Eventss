import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="font-heading text-[28px] font-bold leading-none text-charcoal">
        iDo<span className="text-sage">.</span>
      </div>
      <div className="font-body text-[11px] font-medium tracking-[4px] text-sage-dark -mt-1">
        EVENTS
      </div>
    </Link>
  );
}
