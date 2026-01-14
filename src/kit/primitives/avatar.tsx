// src/kit/primitives/avatar.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface AvatarProps {
        // Content
        src?: string;
        alt?: string;
        name?: string;
        fallback?: string;

        // Size
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

        // Shape
        rounded?: 'base' | 'full';

        // Badge
        badge?: JSXElement;
        badgePosition?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

        // Styling
        class?: string;

        // Events
        onClick?: (e: MouseEvent) => void;

        // Accessibility
        'aria-label'?: string;
    }

    export interface AvatarGroupProps {
        children?: JSXElement | JSXElement[];
        max?: number;
        spacing?: 'tight' | 'normal' | 'loose';
        size?: AvatarProps['size'];
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Avatar(props: AvatarProps): JSXElement {
        const {
            src,
            alt,
            name,
            fallback,
            size = 'md',
            rounded = 'full',
            badge,
            badgePosition = 'bottom-end',
            class: className,
            onClick,
            ...restProps
        } = props;

        // Size classes
        const sizeClasses = {
            xs: 'size-6',
            sm: 'size-8',
            md: 'size-10',
            lg: 'size-12',
            xl: 'size-16',
            '2xl': 'size-20'
        };

        // Font size for initials
        const fontSizeClasses = {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl'
        };

        // Rounded classes
        const roundedClasses = {
            base: 'rounded-md',
            full: 'rounded-full'
        };

        // Badge position classes
        const badgePositionClasses = {
            'top-start': 'top-0 start-0',
            'top-end': 'top-0 end-0',
            'bottom-start': 'bottom-0 start-0',
            'bottom-end': 'bottom-0 end-0'
        };

        // Base classes
        const baseClasses = [
            'relative',
            'inline-flex',
            'items-center',
            'justify-center',
            'shrink-0',
            'overflow-hidden',
            'bg-raised',
            'text-1',
            'font-medium',
            'select-none',
            sizeClasses[size],
            roundedClasses[rounded],
            fontSizeClasses[size],
            onClick && 'cursor-pointer hover:opacity-80 transition',
            className
        ]
            .filter(Boolean)
            .join(' ');

        // Get initials from name
        const getInitials = (name: string): string => {
            return name
                .split(' ')
                .map(word => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
        };

        // Determine what to display
        let content;
        if (src) {
            content = <img src={src} alt={alt || name || 'Avatar'} class="size-full object-cover" />;
        } else if (name) {
            content = <span>{getInitials(name)}</span>;
        } else if (fallback) {
            content = <span>{fallback}</span>;
        } else {
            // Default user icon
            content = (
                <svg class="size-3/5 text-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            );
        }

        return (
            <div class={baseClasses} onClick={onClick} {...restProps}>
                {content}

                {badge && (
                    <span class={`absolute ${badgePositionClasses[badgePosition]} -translate-x-1/4 -translate-y-1/4`}>
                        {badge}
                    </span>
                )}
            </div>
        );
    }

    export function AvatarGroup(props: AvatarGroupProps): JSXElement {
        const { children, max = 5, spacing = 'normal', class: className } = props;

        const spacingClasses = {
            tight: '[&>*:not(:first-child)]:-ms-2',
            normal: '[&>*:not(:first-child)]:-ms-3',
            loose: '[&>*:not(:first-child)]:-ms-4'
        };

        const classes = [
            'inline-flex',
            'items-center',
            spacingClasses[spacing],
            '[&>*]:border-2',
            '[&>*]:border-surface',
            className
        ]
            .filter(Boolean)
            .join(' ');

        // Handle max display logic
        const childArray = Array.isArray(children) ? children : [children];
        const displayChildren = childArray.slice(0, max);
        const remainingCount = childArray.length - max;

        return (
            <div class={classes}>
                {displayChildren}
                {remainingCount > 0 && (
                    <Avatar
                        fallback={`+${remainingCount}`}
                        class="bg-tertiary text-2 font-semibold"
                    />
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default { Avatar, AvatarGroup };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
