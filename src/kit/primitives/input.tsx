// src/kit/primitives/input.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface InputProps {
        // Variants
        variant?            : 'outline' | 'filled' | 'flushed';
        size?               : 'sm' | 'md' | 'lg';

        // States
        disabled?           : boolean;
        readOnly?           : boolean;
        required?           : boolean;
        invalid?            : boolean;

        // Layout
        fullWidth?          : boolean;

        // Icons & Addons
        leftIcon?           : JSXElement;
        rightIcon?          : JSXElement;
        leftAddon?          : JSXElement | string;
        rightAddon?         : JSXElement | string;

        // Input attributes
        type?               : 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
        value?              : string | number;
        defaultValue?       : string | number;
        placeholder?        : string;
        name?               : string;
        id?                 : string;
        autocomplete?       : string;
        pattern?            : string;
        min?                : number | string;
        max?                : number | string;
        step?               : number | string;
        maxLength?          : number;
        minLength?          : number;

        // Events
        onInput?            : (e: InputEvent) => void;
        onChange?           : (e: Event) => void;
        onFocus?            : (e: FocusEvent) => void;
        onBlur?             : (e: FocusEvent) => void;
        onKeyDown?          : (e: KeyboardEvent) => void;
        onKeyUp?            : (e: KeyboardEvent) => void;

        // Styling
        class?              : string;
        inputClass?         : string;

        // Accessibility
        'aria-label'?       : string;
        'aria-describedby'? : string;
        'aria-invalid'?     : boolean;
        'aria-required'?    : boolean;
    }

    export interface InputGroupProps {
        children?           : JSXElement | JSXElement[];
        class?              : string;
    }

    export interface TextareaProps extends Omit<InputProps, 'type' | 'leftIcon' | 'rightIcon' | 'leftAddon' | 'rightAddon'> {
        rows?               : number;
        cols?               : number;
        resize?             : 'none' | 'vertical' | 'horizontal' | 'both';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Input(props: InputProps): JSXElement {
    const {
        variant = 'outline',
        size = 'md',
        disabled = false,
        readOnly = false,
        required = false,
        invalid = false,
        fullWidth = false,
        leftIcon,
        rightIcon,
        leftAddon,
        rightAddon,
        type = 'text',
        class: className,
        inputClass,
        ...inputProps
    } = props;

    // Base wrapper classes
    const wrapperBaseClasses = [
        'inline-flex',
        'items-center',
        'relative',
        'transition-all',
        'duration-150'
    ];

    // Size classes
    const sizeClasses = {
        sm: {
        wrapper: ['h-8', 'text-sm'],
        input: ['px-3', 'text-sm'],
        icon: ['size-4'],
        addon: ['px-2', 'text-sm']
        },
        md: {
        wrapper: ['h-10', 'text-base'],
        input: ['px-4', 'text-base'],
        icon: ['size-5'],
        addon: ['px-3', 'text-base']
        },
        lg: {
        wrapper: ['h-12', 'text-lg'],
        input: ['px-5', 'text-lg'],
        icon: ['size-6'],
        addon: ['px-4', 'text-lg']
        }
    };

    // Variant classes
    const variantClasses = {
        outline: {
        wrapper: [
            'border',
            'rounded-md',
            'bg-surface',
            invalid ? 'border-error' : 'border-1',
            'hover:border-2',
            'focus-within:border-brand',
            'focus-within:ring-2',
            'focus-within:ring-brand',
            'focus-within:ring-opacity-20'
        ],
        input: ['bg-transparent', 'border-0'],
        addon: ['bg-raised', 'border-e', 'border-1', 'first:border-e', 'last:border-s']
        },
        filled: {
        wrapper: [
            'border',
            'border-transparent',
            'rounded-md',
            'bg-raised',
            'hover:bg-tertiary',
            'focus-within:bg-surface',
            'focus-within:border-brand',
            'focus-within:ring-2',
            'focus-within:ring-brand',
            'focus-within:ring-opacity-20'
        ],
        input: ['bg-transparent', 'border-0'],
        addon: ['bg-tertiary', 'border-e', 'border-1', 'first:border-e', 'last:border-s']
        },
        flushed: {
        wrapper: [
            'border-b-2',
            'rounded-none',
            'bg-transparent',
            invalid ? 'border-error' : 'border-1',
            'focus-within:border-brand'
        ],
        input: ['bg-transparent', 'border-0', 'rounded-none'],
        addon: ['bg-transparent', 'border-b-2', 'border-1']
        }
    };

    // State classes
    const stateClasses = [];
    if (disabled) {
        stateClasses.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    }
    if (readOnly) {
        stateClasses.push('cursor-default');
    }
    if (fullWidth) {
        stateClasses.push('w-full');
    }

    // Input base classes
    const inputBaseClasses = [
        'flex-1',
        'outline-none',
        'bg-transparent',
        'placeholder:text-3',
        'disabled:cursor-not-allowed',
        'read-only:cursor-default',
        'text-1'
    ];

    // Icon wrapper classes
    const iconWrapperClasses = ['flex', 'items-center', 'justify-center', 'shrink-0'];

    // Combine wrapper classes
    const wrapperClasses = [
        ...wrapperBaseClasses,
        ...sizeClasses[size].wrapper,
        ...variantClasses[variant].wrapper,
        ...stateClasses,
        className
    ]
        .filter(Boolean)
        .join(' ');

    // Combine input classes
    const inputClasses = [
        ...inputBaseClasses,
        ...sizeClasses[size].input,
        ...variantClasses[variant].input,
        inputClass
    ]
        .filter(Boolean)
        .join(' ');

    // Icon classes
    const iconClasses = [
        ...iconWrapperClasses,
        ...sizeClasses[size].icon,
        'text-3'
    ].join(' ');

    // Addon classes
    const addonBaseClasses = [
        'flex',
        'items-center',
        'shrink-0',
        ...sizeClasses[size].addon,
        ...variantClasses[variant].addon,
        'text-2',
        'first:rounded-s-md',
        'last:rounded-e-md'
    ];

    const addonClasses = addonBaseClasses.filter(Boolean).join(' ');

    return (
        <div class={wrapperClasses}>
        {/* Left Addon */}
        {leftAddon && <div class={addonClasses}>{leftAddon}</div>}

        {/* Left Icon */}
        {leftIcon && !leftAddon && (
            <div class={`${iconClasses} ps-3`}>{leftIcon}</div>
        )}

        {/* Input */}
        <input
            type={type}
            class={inputClasses}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={invalid}
            aria-required={required}
            {...inputProps}
        />

        {/* Right Icon */}
        {rightIcon && !rightAddon && (
            <div class={`${iconClasses} pe-3`}>{rightIcon}</div>
        )}

        {/* Right Addon */}
        {rightAddon && <div class={addonClasses}>{rightAddon}</div>}
        </div>
    );
    }

    export function InputGroup(props: InputGroupProps): JSXElement {
    const { children, class: className } = props;

    const classes = [
        'flex',
        'items-stretch',
        '[&>*:not(:first-child):not(:last-child)]:rounded-none',
        '[&>*:first-child:not(:only-child)]:rounded-e-none',
        '[&>*:last-child:not(:only-child)]:rounded-s-none',
        '[&>*:not(:first-child)]:-ms-px',
        className
    ]
        .filter(Boolean)
        .join(' ');

    return <div class={classes}>{children}</div>;
    }

    export function Textarea(props: TextareaProps): JSXElement {
    const {
        variant = 'outline',
        size = 'md',
        disabled = false,
        readOnly = false,
        required = false,
        invalid = false,
        fullWidth = false,
        rows = 4,
        resize = 'vertical',
        class: className,
        inputClass,
        ...textareaProps
    } = props;

    // Size classes
    const sizeClasses = {
        sm: ['p-2', 'text-sm'],
        md: ['p-3', 'text-base'],
        lg: ['p-4', 'text-lg']
    };

    // Variant classes
    const variantClasses = {
        outline: [
        'border',
        'rounded-md',
        'bg-surface',
        invalid ? 'border-error' : 'border-1',
        'hover:border-2',
        'focus:border-brand',
        'focus:ring-2',
        'focus:ring-brand',
        'focus:ring-opacity-20'
        ],
        filled: [
        'border',
        'border-transparent',
        'rounded-md',
        'bg-raised',
        'hover:bg-tertiary',
        'focus:bg-surface',
        'focus:border-brand',
        'focus:ring-2',
        'focus:ring-brand',
        'focus:ring-opacity-20'
        ],
        flushed: [
        'border-b-2',
        'rounded-none',
        'bg-transparent',
        invalid ? 'border-error' : 'border-1',
        'focus:border-brand'
        ]
    };

    // Resize classes
    const resizeClasses = {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize'
    };

    // State classes
    const stateClasses = [];
    if (disabled) {
        stateClasses.push('opacity-50', 'cursor-not-allowed');
    }
    if (fullWidth) {
        stateClasses.push('w-full');
    }

    // Base classes
    const baseClasses = [
        'outline-none',
        'placeholder:text-3',
        'disabled:cursor-not-allowed',
        'read-only:cursor-default',
        'text-1',
        'transition-all',
        'duration-150'
    ];

    // Combine classes
    const classes = [
        ...baseClasses,
        ...sizeClasses[size],
        ...variantClasses[variant],
        resizeClasses[resize],
        ...stateClasses,
        className,
        inputClass
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <textarea
        class={classes}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        rows={rows}
        aria-invalid={invalid}
        aria-required={required}
        {...textareaProps}
        />
    );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Input;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
