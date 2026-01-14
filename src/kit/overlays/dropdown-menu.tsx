// src/kit/overlays/dropdown-menu.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface DropdownMenuItemProps {
        label: string | JSXElement;
        onClick?: () => void;
        disabled?: boolean;
        variant?: 'default' | 'danger';
        icon?: JSXElement;
        class?: string;
    }

    export interface DropdownMenuProps {
        // Trigger
        trigger?: JSXElement;

        // Items
        items: DropdownMenuItemProps[];

        // Position
        position?: 'top' | 'bottom';

        // Visibility
        isOpen?: boolean;
        onOpenChange?: (open: boolean) => void;

        // Behavior
        closeOnSelect?: boolean;
        closeOnClickOutside?: boolean;

        // Styling
        class?: string;

        // Accessibility
        role?: 'menu';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function DropdownMenu(props: DropdownMenuProps): JSXElement {
        const {
            trigger,
            items,
            position = 'bottom',
            isOpen: initialOpen = false,
            onOpenChange,
            closeOnSelect = true,
            closeOnClickOutside = true,
            class: className,
            role = 'menu',
            ...restProps
        } = props;

        const isOpen = signal(initialOpen);

        const positionClasses = {
            top: 'bottom-full mb-2',
            bottom: 'top-full mt-2'
        };

        const handleToggle = () => {
            const newState = !isOpen();
            isOpen.set(newState);
            onOpenChange?.(newState);
        };

        const handleClose = () => {
            isOpen.set(false);
            onOpenChange?.(false);
        };

        const handleItemClick = (item: DropdownMenuItemProps) => {
            if (!item.disabled) {
                item.onClick?.();
                if (closeOnSelect) {
                    handleClose();
                }
            }
        };

        const getVariantClass = (variant: string = 'default', disabled: boolean = false) => {
            if (disabled) return 'opacity-50 cursor-not-allowed';
            if (variant === 'danger') return 'text-color-error hover:bg-color-error/10';
            return 'hover:bg-surface-hover';
        };

        return (
            <div class="relative inline-block">
                {/* Trigger */}
                <div onClick={handleToggle} class="cursor-pointer">
                    {trigger}
                </div>

                {/* Menu */}
                {isOpen() && (
                    <div
                        class={`
                            absolute z-dropdown-menu ${positionClasses[position]} right-0
                            bg-surface rounded-lg shadow-lg border border-border-primary
                            min-w-48 py-1 animate-in fade-in zoom-in-95 duration-200
                            ${className || ''}
                        `.trim()}
                        role={role}
                        {...restProps}
                    >
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleItemClick(item)}
                                disabled={item.disabled}
                                class={`
                                    w-full flex items-center gap-3 px-4 py-2 text-sm
                                    text-left transition-colors
                                    ${getVariantClass(item.variant, item.disabled)}
                                    ${item.class || ''}
                                `.trim()}
                                role="menuitem"
                            >
                                {item.icon && (
                                    <span class="shrink-0 size-4">
                                        {item.icon}
                                    </span>
                                )}
                                <span class="flex-1">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Backdrop click handler */}
                {isOpen() && closeOnClickOutside && (
                    <div
                        class="fixed inset-0 z-dropdown-backdrop"
                        onClick={handleClose}
                        aria-hidden="true"
                    />
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
