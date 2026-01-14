// src/kit/overlays/tooltip.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TooltipProps {
        // Content
        content?: string | JSXElement;

        // Trigger element
        children?: JSXElement;

        // Position
        position?: 'top' | 'bottom' | 'left' | 'right';

        // Delay
        delayShow?: number;
        delayHide?: number;

        // Styling
        class?: string;
        contentClass?: string;

        // Accessibility
        role?: 'tooltip';
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Tooltip(props: TooltipProps): JSXElement {
        const {
            content,
            children,
            position = 'top',
            delayShow = 200,
            delayHide = 100,
            class: className,
            contentClass,
            ...restProps
        } = props;

        const isVisible = signal(false);
        let showTimeout: ReturnType<typeof setTimeout> | null = null;
        let hideTimeout: ReturnType<typeof setTimeout> | null = null;

        const positionClasses = {
            top: 'bottom-full mb-2',
            bottom: 'top-full mt-2',
            left: 'right-full mr-2',
            right: 'left-full ml-2'
        };

        const arrowClasses = {
            top: '-bottom-1 left-1/2 -translate-x-1/2 border-t-8 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-surface',
            bottom: '-top-1 left-1/2 -translate-x-1/2 border-b-8 border-l-4 border-r-4 border-l-transparent border-r-transparent border-b-surface',
            left: '-right-1 top-1/2 -translate-y-1/2 border-l-8 border-t-4 border-b-4 border-t-transparent border-b-transparent border-l-surface',
            right: '-left-1 top-1/2 -translate-y-1/2 border-r-8 border-t-4 border-b-4 border-t-transparent border-b-transparent border-r-surface'
        };

        const handleMouseEnter = () => {
            if (hideTimeout) clearTimeout(hideTimeout);
            showTimeout = setTimeout(() => {
                isVisible.set(true);
            }, delayShow);
        };

        const handleMouseLeave = () => {
            if (showTimeout) clearTimeout(showTimeout);
            hideTimeout = setTimeout(() => {
                isVisible.set(false);
            }, delayHide);
        };

        return (
            <div
                class={`relative inline-block ${className || ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Trigger */}
                {children}

                {/* Tooltip content */}
                {isVisible() && content && (
                    <div
                        class={`
                            absolute z-tooltip ${positionClasses[position]}
                            bg-surface text-primary text-sm rounded-md shadow-lg
                            px-2 py-1 whitespace-nowrap pointer-events-none
                            animate-in fade-in zoom-in-95 duration-200
                            border border-border-primary
                            ${contentClass || ''}
                        `.trim()}
                        role="tooltip"
                        {...restProps}
                    >
                        {content}
                        <div class={`absolute ${arrowClasses[position]}`} />
                    </div>
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
