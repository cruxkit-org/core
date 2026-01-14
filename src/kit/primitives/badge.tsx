// src/kit/primitives/text.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface BadgeProps {
        // Variants
        variant?: 'solid' | 'outline' | 'subtle';
        color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral';
        size?: 'sm' | 'md' | 'lg';

        // Shape
        rounded?: 'base' | 'full';

        // Content
        children?: JSXElement | string | number;

        // Icon
        leftIcon?: JSXElement;
        rightIcon?: JSXElement;

        // Layout
        dot?: boolean;

        // Styling
        class?: string;

        // Accessibility
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Badge(props: BadgeProps): JSXElement {
        const {
            variant = 'solid',
            color = 'neutral',
            size = 'md',
            rounded = 'full',
            children,
            leftIcon,
            rightIcon,
            dot = false,
            class: className,
            ...restProps
        } = props;

        // Base classes
        const baseClasses = [
            'inline-flex',
            'items-center',
            'gap-1',
            'font-medium',
            'shrink-0'
        ];

        // Size classes
        const sizeClasses = {
            sm: ['h-5', 'px-2', 'text-xs'],
            md: ['h-6', 'px-2.5', 'text-sm'],
            lg: ['h-7', 'px-3', 'text-base']
        };

        // Rounded classes
        const roundedClasses = {
            base: 'rounded-md',
            full: 'rounded-full'
        };

        // Variant classes
        const variantClasses = {
            solid: {
                brand: ['bg-brand', 'text-inverse'],
                success: ['bg-success', 'text-inverse'],
                warning: ['bg-warning', 'text-inverse'],
                error: ['bg-error', 'text-inverse'],
                neutral: ['bg-surface', 'text-1', 'border', 'border-1']
            },
            outline: {
                brand: ['border', 'border-brand', 'text-brand'],
                success: ['border', 'border-success', 'text-success'],
                warning: ['border', 'border-warning', 'text-warning'],
                error: ['border', 'border-error', 'text-error'],
                neutral: ['border', 'border-1', 'text-1']
            },
            subtle: {
                brand: ['bg-brand-subtle', 'text-brand'],
                success: ['bg-success-subtle', 'text-success'],
                warning: ['bg-warning-subtle', 'text-warning'],
                error: ['bg-error-subtle', 'text-error'],
                neutral: ['bg-raised', 'text-1']
            }
        };

        // Combine classes
        const classes = [
            ...baseClasses,
            ...sizeClasses[size],
            roundedClasses[rounded],
            ...variantClasses[variant][color],
            className
        ]
            .filter(Boolean)
            .join(' ');

        // Dot element
        const dotElement = dot && (
            <span class={`size-1.5 rounded-full ${variant === 'solid' ? 'bg-inverse' : `bg-${color}`}`} />
        );

        return (
            <span class={classes} {...restProps}>
                {dotElement}
                {leftIcon && <span class="inline-flex shrink-0">{leftIcon}</span>}
                {children}
                {rightIcon && <span class="inline-flex shrink-0">{rightIcon}</span>}
            </span>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Badge;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
