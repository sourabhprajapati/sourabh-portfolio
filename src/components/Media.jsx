import { useEffect, useRef, useState } from 'react';

// Shows screenshots or recordings inside a browser or phone frame.
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Loads a video only when it scrolls into view, and pauses it when it leaves.
// Visitors who prefer reduced motion get controls instead of autoplay.
function LazyVideo({ src, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!reduced) el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      autoPlay={!reduced}
      controls={reduced}
    />
  );
}

function Screen({ item }) {
  if (isVideo(item.src)) return <LazyVideo src={item.src} label={item.alt} />;
  return <img src={item.src} alt={item.alt} loading="lazy" />;
}

export default function Media({ items }) {
  return (
    <div className="media">
      {items.map((item) => (
        <figure key={item.src} className={item.kind === 'phone' ? 'frame phone' : 'frame browser'}>
          {item.kind !== 'phone' && (
            <div className="browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          )}
          <div className="screen">
            <Screen item={item} />
          </div>
          {item.alt && <figcaption>{item.alt}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
