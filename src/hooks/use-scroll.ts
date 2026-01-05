import { useState, useEffect, useCallback, useRef } from "react";

interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: "up" | "down" | null;
  isScrolling: boolean;
  scrollProgress: number;
  isAtTop: boolean;
  isAtBottom: boolean;
}

interface UseScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScroll(options: UseScrollOptions = {}): ScrollState {
  const { threshold = 10, throttleMs = 16 } = options;
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastUpdate = useRef(0);

  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
    isScrolling: false,
    scrollProgress: 0,
    isAtTop: true,
    isAtBottom: false,
  });

  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastUpdate.current < throttleMs) return;
    lastUpdate.current = now;

    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress =
      documentHeight > 0 ? Math.min(scrollY / documentHeight, 1) : 0;

    let scrollDirection = scrollState.scrollDirection;
    if (Math.abs(scrollY - lastScrollY.current) > threshold) {
      scrollDirection = scrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = scrollY;
    }

    setScrollState({
      scrollY,
      scrollX,
      scrollDirection,
      isScrolling: true,
      scrollProgress,
      isAtTop: scrollY <= threshold,
      isAtBottom: scrollY >= documentHeight - threshold,
    });

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set isScrolling to false after scroll ends
    scrollTimeout.current = setTimeout(() => {
      setScrollState((prev) => ({ ...prev, isScrolling: false }));
    }, 150);
  }, [threshold, throttleMs]);

  useEffect(() => {
    // Initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return scrollState;
}

// Hook for scroll-to functionality with smooth easing
export function useScrollTo() {
  const scrollTo = useCallback(
    (
      target: string | number,
      options: { offset?: number; behavior?: ScrollBehavior } = {},
    ) => {
      const { offset = 0, behavior = "smooth" } = options;

      if (typeof target === "number") {
        window.scrollTo({ top: target + offset, behavior });
        return;
      }

      const element = document.querySelector(target);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition + offset, behavior });
      }
    },
    [],
  );

  const scrollToTop = useCallback((behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior,
    });
  }, []);

  return { scrollTo, scrollToTop, scrollToBottom };
}

// Hook for detecting when element is in viewport
export function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {},
) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasBeenInView(true);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin, options.root]);

  return { isInView, hasBeenInView };
}

// Hook for smooth parallax values with lerp (linear interpolation)
interface UseSmoothParallaxOptions {
  target: React.RefObject<HTMLElement | null>;
  smoothing?: number; // 0-1, lower = smoother but slower
}

export function useSmoothParallax(options: UseSmoothParallaxOptions) {
  const { target, smoothing = 0.1 } = options;
  const [progress, setProgress] = useState(0);
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const element = target.current;
    if (!element) return;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate progress based on element position
      const start = windowHeight; // Element enters viewport
      const end = -elementHeight; // Element leaves viewport
      const current = rect.top;

      targetProgress.current = Math.max(
        0,
        Math.min(1, (start - current) / (start - end)),
      );
    };

    const animate = () => {
      // Lerp towards target
      currentProgress.current +=
        (targetProgress.current - currentProgress.current) * smoothing;
      setProgress(currentProgress.current);
      rafId.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      updateProgress();
    };

    // Initial calculation
    updateProgress();

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [target, smoothing]);

  return progress;
}

// Hook for buttery smooth momentum scrolling
interface UseSmoothScrollOptions {
  enabled?: boolean;
  smoothness?: number; // Higher = smoother (0.05 - 0.15 recommended)
  wheelMultiplier?: number; // Scroll speed multiplier
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { enabled = true, smoothness = 0.08, wheelMultiplier = 1 } = options;
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const rafId = useRef<number | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    // Initialize with current scroll position
    targetScroll.current = window.scrollY;
    currentScroll.current = window.scrollY;

    const animate = () => {
      // Lerp towards target with easing
      const diff = targetScroll.current - currentScroll.current;

      if (Math.abs(diff) > 0.5) {
        currentScroll.current += diff * smoothness;
        window.scrollTo(0, currentScroll.current);
        isScrolling.current = true;
      } else {
        currentScroll.current = targetScroll.current;
        isScrolling.current = false;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = Math.max(
        0,
        Math.min(maxScroll, targetScroll.current + e.deltaY * wheelMultiplier),
      );
    };

    // Sync on regular scroll (touch, keyboard, etc.)
    const handleScroll = () => {
      if (!isScrolling.current) {
        targetScroll.current = window.scrollY;
        currentScroll.current = window.scrollY;
      }
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [enabled, smoothness, wheelMultiplier]);
}

// Hook for controlled section snapping between hero and countdown only
interface UseSectionSnapOptions {
  heroId?: string;
  countdownId?: string;
  enabled?: boolean;
}

export function useSectionSnap(options: UseSectionSnapOptions = {}) {
  const {
    heroId = "hero",
    countdownId = "countdown",
    enabled = true,
  } = options;
  const isAnimating = useRef(false);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 800; // ms between scroll snaps

  useEffect(() => {
    if (!enabled) return;

    const getHeroSection = () => document.getElementById(heroId);
    const getCountdownSection = () => document.getElementById(countdownId);

    const scrollToSection = (element: HTMLElement) => {
      if (isAnimating.current) return;

      isAnimating.current = true;
      const targetY = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Reset animation lock after scroll completes
      setTimeout(() => {
        isAnimating.current = false;
      }, scrollCooldown);
    };

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollCooldown) return;
      if (isAnimating.current) return;

      const heroSection = getHeroSection();
      const countdownSection = getCountdownSection();

      if (!heroSection || !countdownSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const countdownRect = countdownSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if we're in the hero section (hero is mostly visible)
      const isInHero =
        heroRect.top >= -viewportHeight * 0.5 &&
        heroRect.top <= viewportHeight * 0.3;

      // Check if we're at the top of countdown section
      const isAtCountdownTop =
        countdownRect.top >= -viewportHeight * 0.3 &&
        countdownRect.top <= viewportHeight * 0.5;

      // Scrolling down from hero -> snap to countdown
      if (isInHero && e.deltaY > 30) {
        e.preventDefault();
        lastScrollTime.current = now;
        scrollToSection(countdownSection);
        return;
      }

      // Scrolling up from countdown top -> snap to hero
      if (isAtCountdownTop && e.deltaY < -30) {
        e.preventDefault();
        lastScrollTime.current = now;
        scrollToSection(heroSection);
        return;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollCooldown) return;
      if (isAnimating.current) return;

      const heroSection = getHeroSection();
      const countdownSection = getCountdownSection();

      if (!heroSection || !countdownSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const countdownRect = countdownSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isInHero =
        heroRect.top >= -viewportHeight * 0.5 &&
        heroRect.top <= viewportHeight * 0.3;
      const isAtCountdownTop =
        countdownRect.top >= -viewportHeight * 0.3 &&
        countdownRect.top <= viewportHeight * 0.5;

      // Arrow down, Page Down, Space from hero
      if (
        isInHero &&
        (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ")
      ) {
        e.preventDefault();
        lastScrollTime.current = now;
        scrollToSection(countdownSection);
        return;
      }

      // Arrow up, Page Up from countdown top
      if (isAtCountdownTop && (e.key === "ArrowUp" || e.key === "PageUp")) {
        e.preventDefault();
        lastScrollTime.current = now;
        scrollToSection(heroSection);
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, heroId, countdownId]);
}
