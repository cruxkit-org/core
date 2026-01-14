/* eslint-disable @typescript-eslint/no-explicit-any */
// src/kit/data-display/list.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ListItem<T = any> {
        id?: string | number;
        label?: string | JSXElement;
        description?: string | JSXElement;
        icon?: JSXElement;
        avatar?: JSXElement;
        trailing?: JSXElement;
        disabled?: boolean;
        onClick?: () => void;
        data?: T;
    }

    export interface ListProps<T = any> {
        // Items
        items: ListItem<T>[];

        // Display
        variant?: 'simple' | 'divider' | 'spaced';
        size?: 'sm' | 'md' | 'lg';

        // Styling
        class?: string;
        itemClass?: string;

        // Behavior
        selectable?: boolean;
        onItemClick?: (item: ListItem<T>, index: number) => void;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function List<T = any>(props: ListProps<T>): JSXElement {
        const {
            items,
            variant = 'simple',
            size = 'md',
            class: className,
            itemClass,
            selectable = false,
            onItemClick,
            ...restProps
        } = props;

        const sizeClasses: Record<string, string> = {
            sm: 'gap-1',
            md: 'gap-2',
            lg: 'gap-3',
        };

        return (
            <ul
                class={`
                    flex flex-col w-full list-none
                    ${sizeClasses[size]}
                    ${className || ''}
                `.trim()}
                {...restProps}
            >
                {items.map((item, index) => (
                    <li
                        key={item.id || index}
                        class={`
                            flex items-center gap-3 px-3 py-2 rounded-lg
                            transition-colors
                            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                            ${!item.disabled && (selectable || item.onClick || onItemClick) ? 'cursor-pointer hover:bg-surface-hover' : ''}
                            ${variant === 'divider' ? 'border-b border-border-primary last:border-b-0' : ''}
                            ${variant === 'spaced' && index > 0 ? 'mt-1' : ''}
                            ${itemClass || ''}
                        `.trim()}
                        onClick={() => {
                            if (!item.disabled) {
                                item.onClick?.();
                                onItemClick?.(item, index);
                            }
                        }}
                    >
                        {/* Avatar or Icon */}
                        {item.avatar && (
                            <div class="shrink-0">
                                {item.avatar}
                            </div>
                        )}

                        {item.icon && !item.avatar && (
                            <div class="shrink-0 size-5 flex items-center justify-center text-color-primary">
                                {item.icon}
                            </div>
                        )}

                        {/* Content */}
                        <div class="flex-1 min-w-0">
                            {item.label && (
                                <div class={`
                                    font-medium text-sm text-primary
                                    ${item.description ? 'mb-0.5' : ''}
                                `}>
                                    {item.label}
                                </div>
                            )}

                            {item.description && (
                                <div class="text-xs text-primary opacity-60">
                                    {item.description}
                                </div>
                            )}
                        </div>

                        {/* Trailing element */}
                        {item.trailing && (
                            <div class="shrink-0">
                                {item.trailing}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
