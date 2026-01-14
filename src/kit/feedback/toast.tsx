// src/kit/feedback/toast.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal, effect } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ToastProps {
        // Status
        status?: 'info' | 'success' | 'warning' | 'error';

        // Title & Description
        title?: string | JSXElement;
        description?: string | JSXElement;

        // Duration (ms)
        duration?: number;

        // Closable
        closable?: boolean;

        // Icon
        icon?: JSXElement;

        // Actions
        action?: JSXElement;

        // Callbacks
        onClose?: () => void;

        // ID
        id?: string;

        // Styling
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Toast(props: ToastProps): JSXElement | null {
        const {
            status = 'info',
            title,
            description,
            duration = 5000,
            closable = true,
            icon,
            action,
            onClose,
            class: className
        } = props;

        const isVisible = signal(true);
        const progress = signal(100);

        // Auto-close timer
        effect(() => {
            if (duration > 0) {
                const interval = setInterval(() => {
                    progress.update((prev: number) => {
                        const next = prev - (100 / (duration / 50));
                        if (next <= 0) {
                            clearInterval(interval);
                            handleClose();
                            return 0;
                        }
                        return next;
                    });
                }, 50);

                return () => clearInterval(interval);
            }
        });

        const handleClose = () => {
            isVisible.set(false);
            setTimeout(() => onClose?.(), 200);
        };

        if (!isVisible()) return null;

        const statusColors = {
            info: ['bg-color-primary', 'text-white'],
            success: ['bg-color-success', 'text-white'],
            warning: ['bg-color-warning', 'text-white'],
            error: ['bg-color-error', 'text-white']
        };

        const classes = [
            'relative flex gap-3 p-4 rounded-lg shadow-lg min-w-80 max-w-md',
            'animate-in slide-in-from-bottom-4 fade-in duration-300',
            ...statusColors[status],
            className
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div class={classes} role="alert">
                {icon && (
                    <div class="shrink-0 pt-0.5">
                        {icon}
                    </div>
                )}

                <div class="flex-1 min-w-0">
                    {title && (
                        <div class="font-semibold mb-1">
                            {title}
                        </div>
                    )}

                    {description && (
                        <div class="text-sm opacity-90">
                            {description}
                        </div>
                    )}

                    {action && (
                        <div class="mt-2">
                            {action}
                        </div>
                    )}
                </div>

                {closable && (
                    <button
                        onClick={handleClose}
                        class="shrink-0 p-1 rounded hover:bg-black hover:bg-opacity-10 transition"
                        aria-label="Close notification"
                    >
                        <svg class="size-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                )}

                {/* Progress bar */}
                {duration > 0 && (
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20 rounded-b-lg overflow-hidden">
                        <div
                            class="h-full bg-inverse transition-all duration-50 ease-linear"
                            style={{ width: `${progress()}%` }}
                        />
                    </div>
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
