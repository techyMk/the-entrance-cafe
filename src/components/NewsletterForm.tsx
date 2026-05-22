"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      // Mobile: stacked — input pill on top, button pill below.
      // Desktop: inline pill — input fills the bar, button sits inside it.
      className="
        flex w-full max-w-md flex-col gap-2
        sm:flex-row sm:items-center sm:gap-0
        sm:rounded-full sm:bg-cream sm:text-espresso sm:pl-5 sm:pr-1.5 sm:py-1.5
      "
    >
      <input
        type="email"
        required
        placeholder={done ? "Thanks — we’ll be in touch." : "your@email.com"}
        disabled={done}
        className="
          flex-1 min-w-0 outline-none text-sm
          rounded-full bg-cream text-espresso px-5 py-3.5
          placeholder:text-espresso/40
          sm:bg-transparent sm:rounded-none sm:px-0 sm:py-2
        "
      />
      <button
        type="submit"
        disabled={done}
        className="
          shrink-0 rounded-full bg-espresso text-cream
          text-xs uppercase tracking-widest2 px-6 py-3.5
          hover:bg-caramel transition disabled:opacity-60
        "
      >
        {done ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
