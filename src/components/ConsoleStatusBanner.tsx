"use client";

import { useEffect, useMemo, useState } from "react";
import { CONSOLE_URL } from "@/lib/site";

const DISMISS_KEY = "consoleBannerDismissedAt";

function isDismissed(): boolean {
  try {
    const v = localStorage.getItem(DISMISS_KEY);
    if (!v) return false;
    const ts = Number(v);
    // Re-show after 7 days
    return !Number.isNaN(ts) && Date.now() - ts < 7 * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export default function ConsoleStatusBanner() {
  const [status, setStatus] = useState<"unknown" | "ok" | "fail">("unknown");
  const [hidden, setHidden] = useState(false);

  const shouldCheck = useMemo(() => {
    if (!CONSOLE_URL) return false;
    try {
      const u = new URL(CONSOLE_URL);
      return Boolean(u.protocol && u.hostname);
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDismissed()) {
      setHidden(true);
      return;
    }

    if (!shouldCheck) {
      setStatus("fail");
      return;
    }

    let done = false;
    const img = new Image();
    const timer = window.setTimeout(() => {
      if (!done) {
        done = true;
        setStatus("fail");
      }
    }, 3500);
    img.onload = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      setStatus("ok");
    };
    img.onerror = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      setStatus("fail");
    };
    // Attempt to load a common asset; may 404, which triggers onerror but indicates reachability issues.
    try {
      img.src = `${CONSOLE_URL.replace(/\/$/, "")}/favicon.ico?_=${Date.now()}`;
    } catch {
      setStatus("fail");
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [shouldCheck]);

  if (hidden || status !== "fail") return null;

  return (
    <div className="w-full bg-amber-100 text-amber-900 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-2.5L13.73 5a2 2 0 00-3.46 0L3.2 16.5c-.77.83.19 2.5 1.73 2.5z" />
          </svg>
          <span>
            Live demo may be temporarily unavailable. We couldn’t reach {CONSOLE_URL}.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 rounded bg-amber-200 hover:bg-amber-300 text-amber-900"
            onClick={() => {
              // Re-run the check by resetting status to unknown which re-renders and triggers effect
              setStatus("unknown");
              // Force a new effect pass by a micro-task
              setTimeout(() => setStatus("fail"), 0);
            }}
          >
            Retry
          </button>
          <button
            className="px-2 py-1 rounded bg-stone-800 text-white hover:bg-stone-900"
            onClick={() => {
              try {
                localStorage.setItem(DISMISS_KEY, String(Date.now()));
              } catch {}
              setHidden(true);
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

