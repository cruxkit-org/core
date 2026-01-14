// src/kit/primitives/button.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ButtonProps {
        // Variants
        variant?            : 'solid' | 'outline' | 'ghost' | 'link';
        color?              : 'brand' | 'success' | 'warning' | 'error' | 'neutral';
        size?               : 'sm' | 'md' | 'lg';

        // States
        disabled?           : boolean;
        loading?            : boolean;
        active?             : boolean;

        // Layout
        fullWidth?          : boolean;

        // Icons
        leftIcon?           : JSXElement;
        rightIcon?          : JSXElement;

        // Content
        children?           : JSXElement | string;

        // Events
        onClick?            : (e: MouseEvent) => void;
        onPointerDown?      : (e: PointerEvent) => void;
        onPointerUp?        : (e: PointerEvent) => void;

        // Attributes
        type?               : 'button' | 'submit' | 'reset';
        class?              : string;
        id?                 : string;
        name?               : string;
        value?              : string;
        form?               : string;

        // Accessibility
        'aria-label'?       : string;
        'aria-describedby'? : string;
        'aria-pressed'?     : boolean;
        'aria-expanded'?    : boolean;
        role?               : string;
    }

    export interface ButtonGroupProps {
        children?           : JSXElement | JSXElement[];
        attached?           : boolean;
        spacing?            : 0 | 1 | 2 | 3 | 4;
        class?              : string;
    }

    export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
        icon                : JSXElement;
        'aria-label'        : string; // Required for accessibility
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Button(props: ButtonProps): JSXElement {
        const {
            variant     = 'solid',
            color       = 'brand',
            size        = 'md',
            disabled    = false,
            loading     = false,
            active      = false,
            fullWidth   = false,
            leftIcon,
            rightIcon,
            children,
            onClick,
            onPointerDown,
            onPointerUp,
            type        = 'button',
            class       : className,
            ...restProps
        } = props;

        // Base classes - always applied
        const baseClasses = [
            'inline-flex',
            'items-center',
            'justify-center',
            'gap-2',
            'font-medium',
            'rounded-md',
            'transition-all',
            'duration-150',
            'select-none',
            'disabled:opacity-50',
            'disabled:cursor-not-allowed',
            'disabled:pointer-events-none',
            'focus:outline-none',
            'focus-visible:ring',
            'focus-visible:ring-offset-2'
        ];

        // Size-specific classes
        const sizeClasses = {
            sm: ['h-8', 'px-3', 'text-sm', 'gap-1.5'],
            md: ['h-10', 'px-4', 'text-base', 'gap-2'],
            lg: ['h-12', 'px-6', 'text-lg', 'gap-2.5']
        };

        // Variant + Color combinations
        const variantClasses = {
            solid: {
                brand: [
                    'bg-brand',
                    'text-inverse',
                    'border',
                    'border-transparent',
                    'hover:bg-brand-hover',
                    'active:bg-brand-active',
                    'active:scale-95',
                    'shadow-sm',
                    'hover:shadow-md'
                ],
                success: [
                    'bg-success',
                    'text-inverse',
                    'border',
                    'border-transparent',
                    'hover:bg-success-hover',
                    'active:bg-success-active',
                    'active:scale-95',
                    'shadow-sm',
                    'hover:shadow-md'
                ],
                warning: [
                    'bg-warning',
                    'text-inverse',
                    'border',
                    'border-transparent',
                    'hover:bg-warning-hover',
                    'active:bg-warning-active',
                    'active:scale-95',
                    'shadow-sm',
                    'hover:shadow-md'
                ],
                error: [
                    'bg-error',
                    'text-inverse',
                    'border',
                    'border-transparent',
                    'hover:bg-error-hover',
                    'active:bg-error-active',
                    'active:scale-95',
                    'shadow-sm',
                    'hover:shadow-md'
                ],
                neutral: [
                    'bg-surface',
                    'text-1',
                    'border',
                    'border-1',
                    'hover:bg-raised',
                    'active:bg-tertiary',
                    'active:scale-95',
                    'shadow-sm',
                    'hover:shadow-md'
                ]
            },
            outline: {
                brand: [
                    'bg-transparent',
                    'text-brand',
                    'border',
                    'border-brand',
                    'hover:bg-brand-subtle',
                    'active:bg-brand-subtle',
                    'active:scale-95'
                ],
                success: [
                    'bg-transparent',
                    'text-success',
                    'border',
                    'border-success',
                    'hover:bg-success-subtle',
                    'active:bg-success-subtle',
                    'active:scale-95'
                ],
                warning: [
                    'bg-transparent',
                    'text-warning',
                    'border',
                    'border-warning',
                    'hover:bg-warning-subtle',
                    'active:bg-warning-subtle',
                    'active:scale-95'
                ],
                error: [
                    'bg-transparent',
                    'text-error',
                    'border',
                    'border-error',
                    'hover:bg-error-subtle',
                    'active:bg-error-subtle',
                    'active:scale-95'
                ],
                neutral: [
                    'bg-transparent',
                    'text-1',
                    'border',
                    'border-1',
                    'hover:bg-raised',
                    'active:bg-tertiary',
                    'active:scale-95'
                ]
            },
            ghost: {
                brand: [
                    'bg-transparent',
                    'text-brand',
                    'border',
                    'border-transparent',
                    'hover:bg-brand-subtle',
                    'active:bg-brand-subtle',
                    'active:scale-95'
                ],
                success: [
                    'bg-transparent',
                    'text-success',
                    'border',
                    'border-transparent',
                    'hover:bg-success-subtle',
                    'active:bg-success-subtle',
                    'active:scale-95'
                ],
                warning: [
                    'bg-transparent',
                    'text-warning',
                    'border',
                    'border-transparent',
                    'hover:bg-warning-subtle',
                    'active:bg-warning-subtle',
                    'active:scale-95'
                ],
                error: [
                    'bg-transparent',
                    'text-error',
                    'border',
                    'border-transparent',
                    'hover:bg-error-subtle',
                    'active:bg-error-subtle',
                    'active:scale-95'
                ],
                neutral: [
                    'bg-transparent',
                    'text-1',
                    'border',
                    'border-transparent',
                    'hover:bg-raised',
                    'active:bg-tertiary',
                    'active:scale-95'
                ]
            },
            link: {
                brand: [
                    'bg-transparent',
                    'text-brand',
                    'border',
                    'border-transparent',
                    'hover:underline',
                    'underline-offset-4',
                    'decoration-2',
                    'px-1'
                ],
                success: [
                    'bg-transparent',
                    'text-success',
                    'border',
                    'border-transparent',
                    'hover:underline',
                    'underline-offset-4',
                    'decoration-2',
                    'px-1'
                ],
                warning: [
                    'bg-transparent',
                    'text-warning',
                    'border',
                    'border-transparent',
                    'hover:underline',
                    'underline-offset-4',
                    'decoration-2',
                    'px-1'
                ],
                error: [
                    'bg-transparent',
                    'text-error',
                    'border',
                    'border-transparent',
                    'hover:underline',
                    'underline-offset-4',
                    'decoration-2',
                    'px-1'
                ],
                neutral: [
                    'bg-transparent',
                    'text-1',
                    'border',
                    'border-transparent',
                    'hover:underline',
                    'underline-offset-4',
                    'decoration-2',
                    'px-1'
                ]
            }
        };

        // State classes
        const stateClasses = [];
        if (loading) {
            stateClasses.push('cursor-wait', 'pointer-events-none');
        }
        if (active) {
            stateClasses.push('scale-95');
        }
        if (fullWidth) {
            stateClasses.push('w-full');
        }

        // Combine all classes
        const classes = [
            ...baseClasses,
            ...sizeClasses[size],
            ...variantClasses[variant][color],
            ...stateClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                type={type}
                class={classes}
                disabled={disabled || loading}
                onClick={onClick}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                {...restProps}
            >
                {loading && (
                    <svg
                        class="animate-spin size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        />
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}

                {!loading && leftIcon && <span class="inline-flex shrink-0">{leftIcon}</span>}

                {children && <span class="inline-flex">{children}</span>}

                {!loading && rightIcon && <span class="inline-flex shrink-0">{rightIcon}</span>}
            </button>
        );
    }

    export function IconButton(props: IconButtonProps): JSXElement {
        const { icon, ...restProps } = props;

        return (
            <Button {...restProps} class={`aspect-square p-0 ${props.class || ''}`}>
                {icon}
            </Button>
        );
    }

    export function ButtonGroup(props: ButtonGroupProps): JSXElement {
        const { attached = false, spacing = 2, children, class: className } = props;

        const baseClasses = ['inline-flex', 'items-center'];

        const spacingClasses = {
            0: 'gap-0',
            1: 'gap-1',
            2: 'gap-2',
            3: 'gap-3',
            4: 'gap-4'
        };

        const attachedClasses = attached
            ? [
                '[&>button:not(:first-child)]:rounded-s-none',
                '[&>button:not(:last-child)]:rounded-e-none',
                '[&>button:not(:first-child)]:-ms-px'
            ]
            : [];

        const classes = [
            ...baseClasses,
            spacingClasses[spacing],
            ...attachedClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <div class={classes}>{children}</div>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Button;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝

