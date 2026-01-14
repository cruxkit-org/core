// src/kit/data-display/card.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface CardProps {
        // Children
        children: JSXElement;

        // Styling
        class?: string;
        variant?: 'elevated' | 'outlined' | 'filled';
        padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
        rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

        // Interactive
        hover?: boolean;
        clickable?: boolean;
        onClick?: () => void;
    }

    export interface CardHeaderProps {
        children: JSXElement;
        class?: string;
        divider?: boolean;
    }

    export interface CardBodyProps {
        children: JSXElement;
        class?: string;
    }

    export interface CardFooterProps {
        children: JSXElement;
        class?: string;
        divider?: boolean;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Card(props: CardProps): JSXElement {
        const {
            children,
            class: className,
            variant = 'outlined',
            padding = 'md',
            rounded = 'md',
            hover = false,
            clickable = false,
            onClick,
            ...restProps
        } = props;

        const paddingClasses: Record<string, string> = {
            none: 'p-0',
            xs: 'p-2',
            sm: 'p-3',
            md: 'p-4',
            lg: 'p-6',
            xl: 'p-8',
        };

        const roundedClasses: Record<string, string> = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-lg',
            lg: 'rounded-xl',
            xl: 'rounded-2xl',
            full: 'rounded-full',
        };

        const variantClasses: Record<string, string> = {
            elevated: 'bg-surface shadow-lg border border-border-primary',
            outlined: 'bg-surface border border-border-primary',
            filled: 'bg-surface-subtle border-none',
        };

        const interactiveClasses = `
            ${clickable ? 'cursor-pointer' : ''}
            ${hover ? 'hover:shadow-lg hover:border-color-primary transition-all' : ''}
        `.trim();

        return (
            <div
                class={`
                    ${variantClasses[variant]}
                    ${paddingClasses[padding]}
                    ${roundedClasses[rounded]}
                    ${interactiveClasses}
                    ${className || ''}
                `.trim()}
                onClick={clickable && onClick ? onClick : undefined}
                {...restProps}
            >
                {children}
            </div>
        );
    }

    export function CardHeader(props: CardHeaderProps): JSXElement {
        const { children, class: className, divider = false } = props;

        return (
            <div
                class={`
                    ${divider ? 'border-b border-border-primary pb-4' : ''}
                    ${className || ''}
                `.trim()}
            >
                {children}
            </div>
        );
    }

    export function CardBody(props: CardBodyProps): JSXElement {
        const { children, class: className } = props;

        return (
            <div class={`${className || ''}`}>
                {children}
            </div>
        );
    }

    export function CardFooter(props: CardFooterProps): JSXElement {
        const { children, class: className, divider = false } = props;

        return (
            <div
                class={`
                    ${divider ? 'border-t border-border-primary pt-4' : ''}
                    ${className || ''}
                `.trim()}
            >
                {children}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
