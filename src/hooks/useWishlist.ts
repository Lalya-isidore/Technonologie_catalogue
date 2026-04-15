'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tsf_wishlist';

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useWishlist() {
  const [items, setItems] = useState<string[]>([]);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setItems(readStorage());
  }, []);

  const toggle = useCallback((sku: string) => {
    setItems((prev) => {
      const next = prev.includes(sku) ? prev.filter((s) => s !== sku) : [...prev, sku];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const has = useCallback((sku: string) => items.includes(sku), [items]);

  return { items, toggle, has };
}
