/* eslint-disable @typescript-eslint/no-explicit-any */
// src/kit/primitives/utils.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal, effect } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    // ============================================================================
    // CLASS NAME UTILITIES
    // ============================================================================

    /**
     * Merge class names, filtering out falsy values
     */
    export function cn(...classes: (string | undefined | null | false | 0)[]): string {
        return classes
            .filter(Boolean)
            .join(' ')
            .trim()
            .replace(/\s+/g, ' '); // Remove extra spaces
    }

    /**
     * Conditionally apply classes based on variants
     */
    export function clsx(
        base: string,
        variants?: Record<string, string | boolean | undefined>
    ): string {
        if (!variants) return base;

        const variantClasses = Object.entries(variants)
            .filter(([_, value]) => value)
            .map(([key, value]) => (typeof value === 'string' ? value : key))
            .join(' ');

        return cn(base, variantClasses);
    }

    // ============================================================================
    // PORTAL UTILITIES
    // ============================================================================

    /**
     * Create a portal container and mount content
     */
    export function createPortal(children: JSXElement, container?: HTMLElement): void {
        const portalContainer = container || document.body;
        const portalRoot = document.createElement('div');
        portalRoot.setAttribute('data-portal', 'true');

        portalContainer.appendChild(portalRoot);

        if (children) {
            portalRoot.appendChild(children as any);
        }
    }

    /**
     * Portal component for rendering outside the component tree
     */
    export function Portal(props: {
        children: JSXElement;
        container?: HTMLElement;
    }): null {
        effect(() => {
            createPortal(props.children, props.container);
        });

        return null;
    }

    // ============================================================================
    // FOCUS MANAGEMENT
    // ============================================================================

    /**
     * Focus trap - keep focus within a container
     */
    export function useFocusTrap(containerRef: { current: HTMLElement | null }) {
        effect(() => {
            const container = containerRef.current;
            if (!container) return;

            const focusableElements = container.querySelectorAll(
                'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );

            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key !== 'Tab') return;

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            };

            container.addEventListener('keydown', handleTabKey);

            // Focus first element
            firstElement?.focus();

            return () => {
                container.removeEventListener('keydown', handleTabKey);
            };
        });
    }

    /**
     * Return focus to previously focused element
     */
    export function useReturnFocus() {
        let previousFocus: HTMLElement | null = null;

        effect(() => {
            previousFocus = document.activeElement as HTMLElement;

            return () => {
                previousFocus?.focus();
            };
        });
    }

    // ============================================================================
    // OUTSIDE CLICK DETECTION
    // ============================================================================

    /**
     * Detect clicks outside an element
     */
    export function useOutsideClick(
        ref: { current: HTMLElement | null },
        callback: (e: MouseEvent) => void
    ) {
        effect(() => {
            const handleClick = (e: MouseEvent) => {
                if (ref.current && !ref.current.contains(e.target as Node)) {
                    callback(e);
                }
            };

            document.addEventListener('mousedown', handleClick);

            return () => {
                document.removeEventListener('mousedown', handleClick);
            };
        });
    }

    // ============================================================================
    // ESCAPE KEY DETECTION
    // ============================================================================

    /**
     * Detect escape key press
     */
    export function useEscapeKey(callback: () => void) {
        effect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    callback();
                }
            };

            document.addEventListener('keydown', handleEscape);

            return () => {
                document.removeEventListener('keydown', handleEscape);
            };
        });
    }

    // ============================================================================
    // BREAKPOINT HOOK
    // ============================================================================

    export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

    const breakpoints: Record<Breakpoint, number> = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
    };

    /**
     * Get current breakpoint
     */
    export function useBreakpoint() {
        const getBreakpoint = (): Breakpoint => {
            const width = window.innerWidth;
            if (width >= breakpoints['2xl']) return '2xl';
            if (width >= breakpoints.xl) return 'xl';
            if (width >= breakpoints.lg) return 'lg';
            if (width >= breakpoints.md) return 'md';
            if (width >= breakpoints.sm) return 'sm';
            return 'xs';
        };

        const current = signal<Breakpoint>(getBreakpoint());

        effect(() => {
            const handleResize = () => {
                current.set(getBreakpoint());
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });

        return {
            current,
            isXs: () => current() === 'xs',
            isSm: () => current() === 'sm',
            isMd: () => current() === 'md',
            isLg: () => current() === 'lg',
            isXl: () => current() === 'xl',
            is2Xl: () => current() === '2xl',
            isAbove: (bp: Breakpoint): boolean => breakpoints[current() as Breakpoint] >= breakpoints[bp],
            isBelow: (bp: Breakpoint): boolean => breakpoints[current() as Breakpoint] < breakpoints[bp]
        };
    }

    // ============================================================================
    // MEDIA QUERY HOOK
    // ============================================================================

    /**
     * Listen to media query changes
     */
    export function useMediaQuery(query: string) {
        const matches = signal(false);

        effect(() => {
            const mediaQuery = window.matchMedia(query);
            matches.set(mediaQuery.matches);

            const handleChange = (e: MediaQueryListEvent) => {
                matches.set(e.matches);
            };

            mediaQuery.addEventListener('change', handleChange);

            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        });

        return matches;
    }

    // ============================================================================
    // SCROLL LOCK
    // ============================================================================

    /**
     * Lock body scroll (for modals, drawers)
     */
    export function useScrollLock(locked: boolean = true) {
        effect(() => {
            if (locked) {
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            } else {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }

            return () => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            };
        });
    }

    // ============================================================================
    // DEBOUNCE & THROTTLE
    // ============================================================================

    /**
     * Debounce a function
     */
    export function debounce<T extends (...args: any[]) => any>(
        func: T,
        wait: number
    ): (...args: Parameters<T>) => void {
        let timeout: number | undefined;

        return function executedFunction(...args: Parameters<T>) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait) as any;
        };
    }

    /**
     * Throttle a function
     */
    export function throttle<T extends (...args: any[]) => any>(
        func: T,
        limit: number
    ): (...args: Parameters<T>) => void {
        let inThrottle: boolean;

        return function executedFunction(...args: Parameters<T>) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    // ============================================================================
    // RANDOM ID GENERATOR
    // ============================================================================

    /**
     * Generate a random ID for accessibility
     */
    export function useId(prefix: string = 'ui'): string {
        return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    }

    // ============================================================================
    // CLIPBOARD
    // ============================================================================

    /**
     * Copy text to clipboard
     */
    export async function copyToClipboard(text: string): Promise<boolean> {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy:', err);
            return false;
        }
    }

    /**
     * Hook for clipboard operations
     */
    export function useClipboard(timeout: number = 2000) {
        const copied = signal(false);

        const copy = async (text: string) => {
            const success = await copyToClipboard(text);
            copied.set(success);

            if (success) {
                setTimeout(() => copied.set(false), timeout);
            }

            return success;
        };

        return { copied, copy };
    }

    // ============================================================================
    // DIRECTION (RTL/LTR)
    // ============================================================================

    /**
     * Get current text direction
     */
    export function useDirection() {
        const dir = signal<'ltr' | 'rtl'>(
            document.documentElement.getAttribute('dir') as 'ltr' | 'rtl' || 'ltr'
        );

        effect(() => {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                        dir.set(document.documentElement.getAttribute('dir') as 'ltr' | 'rtl' || 'ltr');
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['dir']
            });

            return () => observer.disconnect();
        });

        return {
            dir,
            isRtl: () => dir() === 'rtl',
            isLtr: () => dir() === 'ltr',
            toggle: () => {
                const newDir = dir() === 'ltr' ? 'rtl' : 'ltr';
                document.documentElement.setAttribute('dir', newDir);
            }
        };
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default {
        // Class utilities
        cn,
        clsx,

        // Portal
        Portal,
        createPortal,

        // Focus
        useFocusTrap,
        useReturnFocus,

        // Events
        useOutsideClick,
        useEscapeKey,

        // Layout
        useBreakpoint,
        useMediaQuery,
        useDirection,

        // Scroll
        useScrollLock,

        // Utils
        debounce,
        throttle,
        useId,
        useClipboard
    };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
