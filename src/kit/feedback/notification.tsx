// src/kit/feedback/notification.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal, effect } from '@minejs/signals';
    import { Alert, type AlertProps } from './alert';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface NotificationProps extends Omit<AlertProps, 'variant'> {
        // Position for toast-like behavior
        position?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

        // Duration (auto-close)
        duration?: number;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Notification(props: NotificationProps): JSXElement | null {
        const {
            position = 'top-end',
            duration,
            onClose,
            ...alertProps
        } = props;

        const isVisible = signal(true);

        // Auto-close
        effect(() => {
            if (duration && duration > 0) {
                const timer = setTimeout(() => {
                    isVisible.set(false);
                    setTimeout(() => onClose?.(), 200);
                }, duration);

                return () => clearTimeout(timer);
            }
        });

        const handleClose = () => {
            isVisible.set(false);
            setTimeout(() => onClose?.(), 200);
        };

        if (!isVisible()) return null;

        const positionClasses = {
            'top': 'top-4 left-1/2 -translate-x-1/2',
            'bottom': 'bottom-4 left-1/2 -translate-x-1/2',
            'top-start': 'top-4 start-4',
            'top-end': 'top-4 end-4',
            'bottom-start': 'bottom-4 start-4',
            'bottom-end': 'bottom-4 end-4'
        };

        return (
            <div class={`fixed ${positionClasses[position]} z-notification max-w-md animate-in slide-in-from-top-4 fade-in duration-300`}>
                <Alert
                    {...alertProps}
                    variant="subtle"
                    closable={true}
                    onClose={handleClose}
                    class="shadow-xl"
                />
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
