// src/kit/data-display/stat.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface StatProps {
        // Content
        value: string | number | JSXElement;
        label: string | JSXElement;
        description?: string | JSXElement;
        icon?: JSXElement;

        // Styling
        class?: string;
        variant?: 'card' | 'simple' | 'bordered';
        size?: 'sm' | 'md' | 'lg';

        // Change indicator
        change?: number;
        changeLabel?: string;
        trend?: 'up' | 'down' | 'neutral';

        // Color
        color?: 'primary' | 'success' | 'warning' | 'error';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Stat(props: StatProps): JSXElement {
        const {
            value,
            label,
            description,
            icon,
            class: className,
            variant = 'card',
            size = 'md',
            change,
            changeLabel,
            trend = 'neutral',
            color = 'primary',
            ...restProps
        } = props;

        const sizeClasses: Record<string, string> = {
            sm: 'px-3 py-2',
            md: 'px-4 py-3',
            lg: 'px-6 py-4',
        };

        const valueClasses: Record<string, string> = {
            sm: 'text-2xl',
            md: 'text-3xl',
            lg: 'text-4xl',
        };

        const labelClasses: Record<string, string> = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
        };

        const variantClasses: Record<string, string> = {
            card: 'bg-surface border border-border-primary rounded-lg',
            simple: 'bg-transparent border-0',
            bordered: 'bg-surface-subtle border-l-4 border-l-color-primary pl-4',
        };

        const trendColors: Record<string, string> = {
            up: 'text-color-success',
            down: 'text-color-error',
            neutral: 'text-primary opacity-60',
        };

        const colorClasses: Record<string, string> = {
            primary: 'text-color-primary',
            success: 'text-color-success',
            warning: 'text-color-warning',
            error: 'text-color-error',
        };

        return (
            <div
                class={`
                    ${variantClasses[variant]}
                    ${sizeClasses[size]}
                    flex items-center gap-4
                    ${className || ''}
                `.trim()}
                {...restProps}
            >
                {/* Icon */}
                {icon && (
                    <div class={`
                        shrink-0 flex items-center justify-center size-10
                        ${colorClasses[color]} opacity-80
                    `}>
                        {icon}
                    </div>
                )}

                {/* Content */}
                <div class="flex-1 min-w-0">
                    {/* Value */}
                    <div class={`
                        font-bold font-mono
                        ${valueClasses[size]}
                        ${colorClasses[color]}
                        leading-tight
                    `}>
                        {value}
                    </div>

                    {/* Label */}
                    <div class={`
                        ${labelClasses[size]}
                        font-medium text-primary mt-1
                    `}>
                        {label}
                    </div>

                    {/* Description or Trend */}
                    {description && (
                        <div class="text-xs text-primary opacity-60 mt-1">
                            {description}
                        </div>
                    )}

                    {change !== undefined && (
                        <div class={`
                            text-xs font-semibold mt-2
                            flex items-center gap-1
                            ${trendColors[trend]}
                        `}>
                            <span>
                                {trend === 'up' && '↑'}
                                {trend === 'down' && '↓'}
                                {trend === 'neutral' && '→'}
                            </span>
                            <span>
                                {Math.abs(change)}%
                            </span>
                            {changeLabel && (
                                <span class="opacity-70">
                                    {changeLabel}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
