// src/kit/overlays/drawer.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface DrawerProps {
        // Visibility
        isOpen?: boolean;
        onClose?: () => void;

        // Title
        title?: string | JSXElement;

        // Content
        children?: JSXElement | string;

        // Position
        position?: 'left' | 'right' | 'top' | 'bottom';

        // Size
        size?: 'sm' | 'md' | 'lg' | 'xl';

        // Backdrop
        backdrop?: boolean;
        closeOnBackdrop?: boolean;

        // Styling
        class?: string;

        // Accessibility
        role?: 'dialog' | 'navigation';
        'aria-modal'?: boolean;
        'aria-labelledby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Drawer(props: DrawerProps): JSXElement | null {
        const {
            isOpen = false,
            onClose,
            title,
            children,
            position = 'left',
            size = 'md',
            backdrop = true,
            closeOnBackdrop = true,
            class: className,
            role = 'dialog',
            ...restProps
        } = props;

        const isVisible = signal(isOpen);

        const sizeClasses = {
            left: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[28rem]' },
            right: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[28rem]' },
            top: { sm: 'h-40', md: 'h-48', lg: 'h-64', xl: 'h-80' },
            bottom: { sm: 'h-40', md: 'h-48', lg: 'h-64', xl: 'h-80' }
        };

        const directionClasses = {
            left: 'inset-y-0 left-0 animate-in slide-in-from-left',
            right: 'inset-y-0 right-0 animate-in slide-in-from-right',
            top: 'inset-x-0 top-0 animate-in slide-in-from-top',
            bottom: 'inset-x-0 bottom-0 animate-in slide-in-from-bottom'
        };

        const handleBackdropClick = () => {
            if (closeOnBackdrop) {
                isVisible.set(false);
                onClose?.();
            }
        };

        const handleClose = () => {
            isVisible.set(false);
            onClose?.();
        };

        if (!isVisible()) return null;

        return (
            <>
                {backdrop && (
                    <div
                        class="fixed inset-0 bg-black/40 z-drawer-backdrop animate-in fade-in duration-200"
                        onClick={handleBackdropClick}
                        aria-hidden="true"
                    />
                )}

                <div
                    class={`
                        fixed ${directionClasses[position]} ${sizeClasses[position][size]}
                        z-drawer bg-surface shadow-lg duration-200 flex flex-col
                        border-border-primary
                        ${position === 'left' || position === 'right' ? 'border-e' : 'border-t'}
                        ${className || ''}
                    `.trim()}
                    role={role}
                    aria-modal="true"
                    {...restProps}
                >
                    {/* Header */}
                    <div class="flex items-center justify-between px-6 py-4 border-b border-border-primary shrink-0">
                        {title && (
                            <h2 class="text-lg font-semibold text-primary">
                                {title}
                            </h2>
                        )}
                        <button
                            onClick={handleClose}
                            class="p-1 rounded-md hover:bg-surface-hover transition ml-auto"
                            aria-label="Close drawer"
                        >
                            <svg class="size-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <div class="flex-1 overflow-y-auto px-6 py-4">
                        {children}
                    </div>
                </div>
            </>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
