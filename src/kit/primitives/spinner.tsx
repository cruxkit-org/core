// src/kit/primitives/spinner.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SpinnerProps {
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        color?: 'current' | 'brand' | 'success' | 'warning' | 'error';
        thickness?: 'thin' | 'normal' | 'thick';
        speed?: 'slow' | 'normal' | 'fast';
        class?: string;
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Spinner(props: SpinnerProps): JSXElement {
        const {
            size = 'md',
            color = 'current',
            thickness = 'normal',
            speed = 'normal',
            class: className,
            ...restProps
        } = props;

        // Size classes
        const sizeClasses = {
            xs: 'size-3',
            sm: 'size-4',
            md: 'size-6',
            lg: 'size-8',
            xl: 'size-12'
        };

        // Color classes
        const colorClasses = {
            current: 'text-current',
            brand: 'text-brand',
            success: 'text-success',
            warning: 'text-warning',
            error: 'text-error'
        };

        // Thickness (stroke width)
        const thicknessValues = {
            thin: '2',
            normal: '3',
            thick: '4'
        };

        // Speed classes
        const speedClasses = {
            slow: 'duration-1000',
            normal: 'duration-700',
            fast: 'duration-500'
        };

        const classes = [
            'inline-block',
            'animate-spin',
            sizeClasses[size],
            colorClasses[color],
            speedClasses[speed],
            className
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <svg
                class={classes}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="status"
                aria-label={props['aria-label'] || 'Loading'}
                {...restProps}
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width={thicknessValues[thickness]}
                />
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Spinner;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
