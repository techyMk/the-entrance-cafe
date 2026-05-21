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
      className="flex w-full sm:w-auto items-center gap-2 rounded-full bg-cream text-espresso pl-5 pr-1.5 py-1.5 max-w-md"
    >
      <input
        type="email"
        required
        placeholder={done ? "Thanks — we’ll be in touch." : "your@email.com"}
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-espresso/40 py-2"
        disabled={done}
      />
      <button
        type="submit"
        disabled={done}
        className="rounded-full bg-espresso text-cream text-xs uppercase tracking-widest2 px-5 py-3 hover:bg-caramel transition disabled:opacity-60"
      >
        {done ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
