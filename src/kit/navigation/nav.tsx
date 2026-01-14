// src/kit/navigation/nav.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface NavItem {
        label: string | JSXElement;
        href: string;
        active?: boolean;
        disabled?: boolean;
        icon?: JSXElement;
    }

    export interface NavProps {
        // Items
        items: NavItem[];

        // Orientation
        orientation?: 'horizontal' | 'vertical';

        // Styling
        class?: string;

        // Accessibility
        role?: 'navigation' | 'menubar';
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Nav(props: NavProps): JSXElement {
        const {
            items,
            orientation = 'horizontal',
            class: className,
            role = 'navigation',
            ...restProps
        } = props;

        const directionClass = orientation === 'vertical' ? 'flex-col' : 'flex-row';

        return (
            <nav
                class={`
                    flex ${directionClass} gap-1
                    ${className || ''}
                `.trim()}
                role={role}
                {...restProps}
            >
                {items.map((item) => (
                    <a
                        href={item.href}
                        class={`
                            flex items-center gap-2 px-4 py-2 rounded-lg
                            text-sm font-medium transition-colors
                            ${item.active
                                ? 'bg-color-primary text-white'
                                : 'text-primary hover:bg-surface-hover'
                            }
                            ${item.disabled
                                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                                : ''
                            }
                        `.trim()}
                    >
                        {item.icon && (
                            <span class="shrink-0 size-4">
                                {item.icon}
                            </span>
                        )}
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
