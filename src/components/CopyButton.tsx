import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  /** 要复制的内容 */
  value: string;
  /** 按钮文案，默认「复制」 */
  label?: string;
}

export default function CopyButton({ value, label = '复制' }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // 非安全上下文（http 访问）下的兜底
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* 复制失败时不打断用户 */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label}命令`}
      className="absolute right-2 top-2 cursor-pointer rounded-ctl px-2.5 py-1.5 font-mono text-[0.6875rem] font-medium text-accent/70 transition-colors hover:bg-accent hover:text-accent-ink"
    >
      {copied ? '已复制' : label}
    </button>
  );
}
