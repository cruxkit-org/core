// src/kit/navigation/tabs.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TabItem {
        id: string;
        label: string | JSXElement;
        content?: JSXElement | string;
        disabled?: boolean;
        icon?: JSXElement;
    }

    export interface TabsProps {
        // Tabs
        tabs: TabItem[];
        defaultTab?: string;
        activeTab?: string;
        onTabChange?: (tabId: string) => void;

        // Variant
        variant?: 'line' | 'solid' | 'outline';

        // Styling
        class?: string;
        tabsClass?: string;
        contentClass?: string;

        // Accessibility
        role?: 'tablist';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Tabs(props: TabsProps): JSXElement {
        const {
            tabs,
            defaultTab = tabs[0]?.id || '',
            activeTab: externalActiveTab,
            onTabChange,
            variant = 'line',
            class: className,
            tabsClass,
            contentClass,
            ...restProps
        } = props;

        const internalActiveTab = signal(externalActiveTab || defaultTab);

        const handleTabClick = (tabId: string) => {
            internalActiveTab.set(tabId);
            onTabChange?.(tabId);
        };

        const activeTabId = externalActiveTab || internalActiveTab();

        const getTabClasses = (tabId: string, isActive: boolean) => {
            const baseClasses = 'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors cursor-pointer';

            if (variant === 'line') {
                return isActive
                    ? `${baseClasses} text-color-primary border-b-2 border-color-primary`
                    : `${baseClasses} text-primary hover:text-primary border-b-2 border-transparent`;
            }

            if (variant === 'solid') {
                return isActive
                    ? `${baseClasses} bg-color-primary text-white rounded-t-lg`
                    : `${baseClasses} text-primary hover:bg-surface-hover rounded-t-lg`;
            }

            // outline variant
            return isActive
                ? `${baseClasses} bg-color-primary text-white rounded-lg`
                : `${baseClasses} text-primary border border-border-primary hover:border-color-primary`;
        };

        return (
            <div class={`w-full ${className || ''}`} {...restProps}>
                {/* Tab list */}
                <div
                    class={`
                        flex gap-1 overflow-x-auto border-b
                        border-border-primary pb-0
                        ${variant === 'solid' ? 'bg-surface' : ''}
                        ${tabsClass || ''}
                    `.trim()}
                    role="tablist"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => !tab.disabled && handleTabClick(tab.id)}
                            disabled={tab.disabled}
                            class={`
                                ${getTabClasses(tab.id, activeTabId === tab.id)}
                                ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                            `.trim()}
                            role="tab"
                            aria-selected={activeTabId === tab.id}
                        >
                            {tab.icon && (
                                <span class="shrink-0 size-4">
                                    {tab.icon}
                                </span>
                            )}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div class={`pt-4 ${contentClass || ''}`}>
                    {tabs.map((tab) => (
                        activeTabId === tab.id && (
                            <div
                                key={tab.id}
                                role="tabpanel"
                                class="animate-in fade-in duration-200"
                            >
                                {tab.content}
                            </div>
                        )
                    ))}
                </div>
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
