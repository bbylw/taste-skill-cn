import { useCallback, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DIRECTIONS, type Direction } from '../data/directions';

const HAND_SIZE = 3;
/** 首屏先给出一副固定的牌，保证服务端直出内容稳定；点按钮再随机抽 */
const INITIAL_HAND = [0, 1, 19];

function pickHand(): Direction[] {
  const pool = [...DIRECTIONS];
  const hand: Direction[] = [];
  while (hand.length < HAND_SIZE && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    hand.push(pool.splice(i, 1)[0]!);
  }
  return hand;
}

export default function DirectionDeal() {
  const [hand, setHand] = useState<Direction[]>(() =>
    INITIAL_HAND.map((i) => DIRECTIONS[i]!).filter(Boolean),
  );
  const [round, setRound] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const busy = useRef(false);

  const deal = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setChosen(null);
    setHand(pickHand());
    setRound((r) => r + 1);
    window.setTimeout(() => {
      busy.current = false;
    }, 240);
  }, []);

  return (
    <section aria-labelledby="deal-title" className="relative">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="deal-title" className="t-h2 max-w-[18ch]">
            先抽三个方向，再挑一个
          </h2>
          <p className="t-meta mt-3 max-w-[54ch]">
            让模型自己发明风格，它每次都会给出那个类目的默认答案。所以由脚本发牌：从 20
            个研究方向里抽三张，Agent 挑出那张能承载客户独有素材的牌，再由脚本发出它的字体系统、配色与构图。
          </p>
        </div>
        <button type="button" onClick={deal} className="btn btn-ink shrink-0">
          重新抽三张
          <span aria-hidden="true">↻</span>
        </button>
      </div>

      <ul className="mt-7 grid list-none gap-3 p-0 md:grid-cols-3">
        {hand.map((dir, i) => {
          const isChosen = chosen === dir.id;
          const dimmed = chosen !== null && !isChosen;
          return (
            <li key={`${round}-${dir.id}`}>
              <motion.button
                type="button"
                onClick={() => setChosen(isChosen ? null : dir.id)}
                aria-pressed={isChosen}
                initial={
                  reduce
                    ? false
                    : { opacity: 0, y: 30, rotate: (i - 1) * 5, scale: 0.96 }
                }
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        type: 'spring',
                        stiffness: 220,
                        damping: 22,
                        delay: i * 0.08,
                      }
                }
                className={[
                  'flex h-full w-full cursor-pointer flex-col justify-between p-5 text-left',
                  'transition-[background-color,color,opacity] duration-300',
                  isChosen
                    ? 'bg-accent text-accent-ink'
                    : 'bg-ground-2 text-ink hover:bg-ink-surface hover:text-on-ink',
                  dimmed ? 'opacity-45' : 'opacity-100',
                ].join(' ')}
              >
                <div>
                  <p className="text-[1.35rem] font-extrabold leading-tight tracking-tight">
                    {dir.name}
                  </p>
                  <p className="mt-1 text-[0.8125rem] italic opacity-70">{dir.nameEn}</p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed opacity-85">{dir.idea}</p>
                </div>
                <dl className="mt-6 space-y-1.5 text-[0.8125rem] opacity-70">
                  <div className="flex gap-2">
                    <dt className="font-semibold">情绪</dt>
                    <dd className="m-0">{dir.tones.join(' · ')}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold">动效</dt>
                    <dd className="m-0">{dir.motion}</dd>
                  </div>
                </dl>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <p className="t-meta mt-4" aria-live="polite">
        {chosen
          ? `已选定「${hand.find((d) => d.id === chosen)?.name}」。接下来脚本会为它发出字体、配色、首屏与分区构图。`
          : '点一张牌，看看它后面会带出什么。'}
      </p>
    </section>
  );
}
