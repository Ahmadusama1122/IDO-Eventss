import Link from "next/link";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:hidden">
      <div className="mx-auto max-w-md">
        <Link
          href="/quote"
          className="flex items-center justify-center gap-2 rounded-lg bg-sage py-3.5 text-sm font-semibold text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
