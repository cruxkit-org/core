// src/kit/overlays/modal.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ModalProps {
        // Visibility
        isOpen?: boolean;
        onClose?: () => void;

        // Title & description
        title?: string | JSXElement;
        description?: string | JSXElement;

        // Content
        children?: JSXElement | string;

        // Footer actions
        actions?: JSXElement;

        // Size
        size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

        // Backdrop
        backdrop?: boolean;
        closeOnBackdrop?: boolean;

        // Styling
        class?: string;

        // Accessibility
        role?: 'dialog' | 'alertdialog';
        'aria-modal'?: boolean;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Modal(props: ModalProps): JSXElement | null {
        const {
            isOpen = false,
            onClose,
            title,
            description,
            children,
            actions,
            size = 'md',
            backdrop = true,
            closeOnBackdrop = true,
            class: className,
            role = 'dialog',
            ...restProps
        } = props;

        const isVisible = signal(isOpen);

        const sizeClasses = {
            sm: 'max-w-sm',
            md: 'max-w-md',
            lg: 'max-w-lg',
            xl: 'max-w-xl',
            full: 'max-w-full'
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
                        class="fixed inset-0 bg-black/40 z-modal-backdrop animate-in fade-in duration-200"
                        onClick={handleBackdropClick}
                        aria-hidden="true"
                    />
                )}

                <div class="fixed inset-0 flex items-center justify-center z-modal pointer-events-none">
                    <div
                        class={`
                            relative w-full mx-4 ${sizeClasses[size]} rounded-lg
                            bg-surface shadow-lg animate-in zoom-in-95 fade-in duration-200
                            pointer-events-auto border border-border-primary
                            ${className || ''}
                        `.trim()}
                        role={role}
                        aria-modal="true"
                        {...restProps}
                    >
                        {/* Header */}
                        {(title || description) && (
                            <div class="px-6 py-4 border-b border-border-primary">
                                {title && (
                                    <h2 class="text-lg font-semibold text-primary mb-1">
                                        {title}
                                    </h2>
                                )}
                                {description && (
                                    <p class="text-sm text-primary/70">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Body */}
                        {children && (
                            <div class="px-6 py-4">
                                {children}
                            </div>
                        )}

                        {/* Footer */}
                        {actions && (
                            <div class="px-6 py-4 border-t border-border-primary flex gap-3 justify-end">
                                {actions}
                            </div>
                        )}

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            class="absolute top-4 right-4 p-1 rounded-md hover:bg-surface-hover transition"
                            aria-label="Close modal"
                        >
                            <svg class="size-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
