// src/kit/overlays/popover.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface PopoverProps {
        // Trigger
        trigger?: JSXElement;

        // Content
        children?: JSXElement | string;

        // Position
        position?: 'top' | 'bottom' | 'left' | 'right';

        // Visibility
        isOpen?: boolean;
        onOpenChange?: (open: boolean) => void;

        // Behavior
        closeOnClickOutside?: boolean;
        closeOnEscape?: boolean;

        // Styling
        class?: string;

        // Accessibility
        role?: 'dialog' | 'tooltip';
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Popover(props: PopoverProps): JSXElement {
        const {
            trigger,
            children,
            position = 'bottom',
            isOpen: initialOpen = false,
            onOpenChange,
            closeOnClickOutside = true,
            closeOnEscape = true,
            class: className,
            role = 'dialog',
            ...restProps
        } = props;

        const isOpen = signal(initialOpen);

        const positionClasses = {
            top: 'bottom-full mb-2',
            bottom: 'top-full mt-2',
            left: 'right-full mr-2',
            right: 'left-full ml-2'
        };

        const handleToggle = () => {
            const newState = !isOpen();
            isOpen.set(newState);
            onOpenChange?.(newState);
        };

        const handleClose = () => {
            isOpen.set(false);
            onOpenChange?.(false);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (closeOnEscape && e.key === 'Escape') {
                handleClose();
            }
        };

        return (
            <div class="relative inline-block">
                {/* Trigger */}
                <div onClick={handleToggle} class="cursor-pointer">
                    {trigger}
                </div>

                {/* Content */}
                {isOpen() && (
                    <div
                        class={`
                            absolute z-popover ${positionClasses[position]}
                            bg-surface rounded-lg shadow-lg border border-border-primary
                            p-3 min-w-48 max-w-xs animate-in fade-in zoom-in-95 duration-200
                            ${className || ''}
                        `.trim()}
                        role={role}
                        onKeyDown={handleKeyDown}
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                        {...restProps}
                    >
                        {children}
                    </div>
                )}

                {/* Backdrop click handler */}
                {isOpen() && closeOnClickOutside && (
                    <div
                        class="fixed inset-0 z-popover-backdrop"
                        onClick={handleClose}
                        aria-hidden="true"
                    />
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
