import { useEffect, useId, useState } from 'react';
import type { NavItem } from '../data/site';

interface Props {
  items: NavItem[];
  github: string;
}

export default function MobileNav({ items, github }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? '关闭菜单' : '打开菜单'}
        className="grid size-9 cursor-pointer place-items-center rounded-ctl text-ink transition-colors hover:bg-ink-surface hover:text-on-ink"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          >
            <path d="M3 5h18M3 11h18M3 17h18" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-t border-rule bg-ground px-5 pb-5 pt-2"
        >
          <ul className="m-0 list-none p-0">
            {items.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <span className="text-[1.05rem] font-semibold tracking-tight">{item.label}</span>
                  <span className="t-meta text-right">{item.hint}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-ink mt-4 w-full justify-center"
          >
            GitHub 仓库
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
