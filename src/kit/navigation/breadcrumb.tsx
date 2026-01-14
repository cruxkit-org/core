// src/kit/navigation/breadcrumb.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface BreadcrumbItem {
        label: string | JSXElement;
        href?: string;
        active?: boolean;
        icon?: JSXElement;
    }

    export interface BreadcrumbProps {
        // Items
        items: BreadcrumbItem[];

        // Separator
        separator?: JSXElement | string;

        // Styling
        class?: string;
        itemClass?: string;

        // Accessibility
        role?: 'navigation';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Breadcrumb(props: BreadcrumbProps): JSXElement {
        const {
            items,
            separator = '/',
            class: className,
            itemClass,
            ...restProps
        } = props;

        return (
            <nav
                class={`flex items-center gap-1 ${className || ''}`}
                role="navigation"
                aria-label="breadcrumb"
                {...restProps}
            >
                <ol class="flex items-center gap-1">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index} class="flex items-center gap-1">
                                {/* Separator */}
                                {index > 0 && (
                                    <span class={`
                                        text-xs font-semibold text-primary opacity-60
                                        mx-1
                                    `}>
                                        {separator}
                                    </span>
                                )}

                                {/* Item */}
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        class={`
                                            inline-flex items-center gap-1 px-2 py-1 text-sm
                                            rounded-md transition-colors
                                            ${isLast
                                                ? 'text-color-primary font-semibold cursor-default'
                                                : 'text-primary hover:text-color-primary hover:bg-surface-hover'
                                            }
                                            ${itemClass || ''}
                                        `.trim()}
                                        aria-current={isLast ? 'page' : undefined}
                                    >
                                        {item.icon && (
                                            <span class="shrink-0 size-4">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span>{item.label}</span>
                                    </a>
                                ) : (
                                    <span
                                        class={`
                                            inline-flex items-center gap-1 px-2 py-1 text-sm
                                            rounded-md
                                            ${isLast
                                                ? 'text-color-primary font-semibold'
                                                : 'text-primary'
                                            }
                                            ${itemClass || ''}
                                        `.trim()}
                                    >
                                        {item.icon && (
                                            <span class="shrink-0 size-4">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span>{item.label}</span>
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
