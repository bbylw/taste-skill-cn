import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FAQ } from '../data/faq';

/** 三种色带严格轮换，保证相邻两条永远不同色 */
const BAND_STYLES = ['bg-ground-2 text-ink', 'bg-accent text-accent-ink', 'bg-ink-surface text-on-ink'] as const;

const TAB_OFFSETS = [
  '0px',
  'clamp(1.5rem,6vw,4.5rem)',
  'clamp(0.75rem,3vw,2.25rem)',
  'clamp(2rem,8vw,6rem)',
];

export default function FaqBands() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="pt-9">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        const style = BAND_STYLES[i % BAND_STYLES.length]!;
        return (
          <div key={item.q} className={style}>
            <div className="relative">
              {/* 阶梯标签：沿对角线逐级错开，取代 eyebrow 与编号 */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 -translate-y-full bg-ground px-2.5 py-1 text-[0.8125rem] font-semibold leading-tight text-ink"
                style={{ marginLeft: TAB_OFFSETS[i % TAB_OFFSETS.length] }}
              >
                {item.tag}
              </span>
              <h3 className="m-0">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-6 px-5 py-6 text-left lg:px-8 lg:py-7"
                >
                  <span className="max-w-[32ch] text-[clamp(1.25rem,2.6vw,2rem)] font-extrabold leading-tight tracking-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={[
                      'mt-1 shrink-0 text-[1.5rem] font-bold leading-none transition-transform duration-300',
                      isOpen ? 'rotate-45' : 'rotate-0',
                    ].join(' ')}
                  >
                    ＋
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    key="panel"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[68ch] px-5 pb-7 text-[0.95rem] leading-relaxed opacity-85 lg:px-8">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
