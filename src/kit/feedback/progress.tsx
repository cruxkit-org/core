// src/kit/feedback/progress.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ProgressProps {
        // Value (0-100)
        value?: number;

        // Max value
        max?: number;

        // Size
        size?: 'xs' | 'sm' | 'md' | 'lg';

        // Color
        color?: 'brand' | 'success' | 'warning' | 'error';

        // Variant
        variant?: 'linear' | 'circular';

        // Label
        label?: string | JSXElement;
        showValue?: boolean;

        // Indeterminate (loading)
        indeterminate?: boolean;

        // Striped
        striped?: boolean;
        animated?: boolean;

        // Styling
        class?: string;

        // Accessibility
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Progress(props: ProgressProps): JSXElement {
        const {
            value = 0,
            max = 100,
            size = 'md',
            color = 'brand',
            variant = 'linear',
            label,
            showValue = false,
            indeterminate = false,
            striped = false,
            animated = false,
            class: className,
            ...restProps
        } = props;

        const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

        if (variant === 'circular') {
            const sizeValues = {
                xs: 32,
                sm: 40,
                md: 48,
                lg: 64
            };

            const strokeWidthValues = {
                xs: 3,
                sm: 4,
                md: 4,
                lg: 5
            };

            const circleSize = sizeValues[size];
            const strokeWidth = strokeWidthValues[size];
            const radius = (circleSize - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            const colorClasses = {
                brand: 'text-color-primary',
                success: 'text-color-success',
                warning: 'text-color-warning',
                error: 'text-color-error'
            };

            return (
                <div class={`inline-flex flex-col items-center gap-2 ${className || ''}`}>
                    <div class="relative" style={{ width: `${circleSize}px`, height: `${circleSize}px` }}>
                        <svg
                            class="transform -rotate-90"
                            width={circleSize}
                            height={circleSize}
                        >
                            {/* Background circle */}
                            <circle
                                cx={circleSize / 2}
                                cy={circleSize / 2}
                                r={radius}
                                stroke="currentColor"
                                stroke-width={strokeWidth}
                                fill="none"
                                class="text-raised opacity-30"
                            />

                            {/* Progress circle */}
                            {!indeterminate && (
                                <circle
                                    cx={circleSize / 2}
                                    cy={circleSize / 2}
                                    r={radius}
                                    stroke="currentColor"
                                    stroke-width={strokeWidth}
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-dasharray={circumference}
                                    stroke-dashoffset={offset}
                                    class={`${colorClasses[color]} transition-all duration-300`}
                                />
                            )}

                            {/* Indeterminate animation */}
                            {indeterminate && (
                                <circle
                                    cx={circleSize / 2}
                                    cy={circleSize / 2}
                                    r={radius}
                                    stroke="currentColor"
                                    stroke-width={strokeWidth}
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-dasharray={circumference * 0.25}
                                    class={`${colorClasses[color]} animate-spin`}
                                />
                            )}
                        </svg>

                        {showValue && !indeterminate && (
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-sm font-semibold">{Math.round(percentage)}%</span>
                            </div>
                        )}
                    </div>

                    {label && (
                        <span class="text-sm text-2">
                            {label}
                        </span>
                    )}
                </div>
            );
        }

        // Linear progress
        const sizeClasses = {
            xs: 'h-1',
            sm: 'h-2',
            md: 'h-3',
            lg: 'h-4'
        };

        const colorClasses = {
            brand: 'bg-color-primary',
            success: 'bg-color-success',
            warning: 'bg-color-warning',
            error: 'bg-color-error'
        };

        const trackClasses = [
            'w-full rounded-full overflow-hidden bg-raised',
            sizeClasses[size],
            className
        ]
            .filter(Boolean)
            .join(' ');

        const barClasses = [
            'h-full rounded-full transition-all duration-300',
            colorClasses[color],
            striped && 'bg-stripes',
            animated && striped && 'animate-stripes',
            indeterminate && 'animate-progress-indeterminate'
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div class="w-full">
                {(label || showValue) && (
                    <div class="flex justify-between items-center mb-2">
                        {label && <span class="text-sm text-2">{label}</span>}
                        {showValue && !indeterminate && (
                            <span class="text-sm font-semibold">{Math.round(percentage)}%</span>
                        )}
                    </div>
                )}

                <div
                    class={trackClasses}
                    role="progressbar"
                    aria-valuenow={indeterminate ? undefined : value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    {...restProps}
                >
                    <div
                        class={barClasses}
                        style={{ width: indeterminate ? '30%' : `${percentage}%` }}
                    />
                </div>
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
