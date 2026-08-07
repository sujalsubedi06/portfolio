"use client";

import { useEffect, useState } from "react";

/**
 * Observes the given section ids and returns the href of whichever one is
 * currently crossing the "active band" near the top of the viewport.
 */
export function useScrollSpy(hrefs: readonly string[], initial: string) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const ids = hrefs.map((href) => href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hrefs]);

  return active;
}
