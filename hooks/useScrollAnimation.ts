'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export function useMultipleScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  const registerRef = (key: string) => (element: HTMLElement | null) => {
    if (element) {
      refs.current.set(key, element);
    } else {
      refs.current.delete(key);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = Array.from(refs.current.entries()).find(([_, el]) => el === entry.target)?.[0];
          if (key && entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [key]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    refs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      refs.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const isVisible = (key: string) => visibleElements[key] || false;

  return { registerRef, isVisible };
}
