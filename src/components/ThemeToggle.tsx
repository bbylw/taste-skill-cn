import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ts-theme';

function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle({ label = '切换明暗主题' }: { label?: string }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* 忽略隐私模式下的写入失败 */
    }
    setTheme(next);
  }, []);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={mounted ? isDark : undefined}
      title={isDark ? '切换到亮色' : '切换到暗色'}
      className="grid size-9 cursor-pointer place-items-center rounded-ctl text-ink-2 transition-colors duration-200 hover:bg-ink-surface hover:text-on-ink"
    >
      {/* 两个图标都渲染，靠 data-theme 切换，避免水合前后跳动 */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-[18px] dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="hidden size-[18px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
