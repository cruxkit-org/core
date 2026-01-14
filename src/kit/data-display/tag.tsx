// src/kit/data-display/tag.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TagProps {
        // Content
        children: JSXElement | string;
        icon?: JSXElement;

        // Style
        variant?: 'solid' | 'outline' | 'subtle';
        color?: 'primary' | 'success' | 'warning' | 'error';
        size?: 'sm' | 'md' | 'lg';

        // Behavior
        closeable?: boolean;
        onClose?: () => void;
        disabled?: boolean;

        // Styling
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Tag(props: TagProps): JSXElement {
        const {
            children,
            icon,
            variant = 'solid',
            color = 'primary',
            size = 'md',
            closeable = false,
            onClose,
            disabled = false,
            class: className,
            ...restProps
        } = props;

        const sizeClasses: Record<string, string> = {
            sm: 'px-2 py-1 text-xs gap-1',
            md: 'px-3 py-1.5 text-sm gap-1.5',
            lg: 'px-4 py-2 text-base gap-2',
        };

        const colorMap: Record<string, { solid: string; outline: string; subtle: string }> = {
            primary: {
                solid: 'bg-color-primary text-white',
                outline: 'border border-color-primary text-color-primary',
                subtle: 'bg-color-primary bg-opacity-10 text-color-primary',
            },
            success: {
                solid: 'bg-color-success text-white',
                outline: 'border border-color-success text-color-success',
                subtle: 'bg-color-success bg-opacity-10 text-color-success',
            },
            warning: {
                solid: 'bg-color-warning text-white',
                outline: 'border border-color-warning text-color-warning',
                subtle: 'bg-color-warning bg-opacity-10 text-color-warning',
            },
            error: {
                solid: 'bg-color-error text-white',
                outline: 'border border-color-error text-color-error',
                subtle: 'bg-color-error bg-opacity-10 text-color-error',
            },
        };

        const variantClass = colorMap[color]?.[variant] || colorMap.primary.solid;

        return (
            <div
                class={`
                    inline-flex items-center rounded-full font-medium
                    transition-all
                    ${sizeClasses[size]}
                    ${variantClass}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${className || ''}
                `.trim()}
                {...restProps}
            >
                {/* Icon */}
                {icon && (
                    <span class="shrink-0 flex items-center justify-center">
                        {icon}
                    </span>
                )}

                {/* Content */}
                <span class="truncate">{children}</span>

                {/* Close button */}
                {closeable && !disabled && (
                    <button
                        onClick={onClose}
                        class={`
                            shrink-0 ml-1 rounded-full hover:opacity-70
                            transition-opacity flex items-center justify-center
                            w-4 h-4
                        `}
                        aria-label="Remove tag"
                    >
                        ✕
                    </button>
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
