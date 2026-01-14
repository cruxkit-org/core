// src/kit/navigation/pagination.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface PaginationProps {
        // Pagination state
        current: number;
        total: number;
        onChange: (page: number) => void;

        // Display
        siblingCount?: number;
        showFirstLast?: boolean;

        // Styling
        class?: string;
        buttonClass?: string;
        activeButtonClass?: string;

        // Accessibility
        role?: 'navigation';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Pagination(props: PaginationProps): JSXElement {
        const {
            current,
            total,
            onChange,
            siblingCount = 1,
            showFirstLast = true,
            class: className,
            buttonClass,
            activeButtonClass,
            ...restProps
        } = props;

        const generatePages = () => {
            const pages: (number | string)[] = [];
            const leftSibling = Math.max(2, current - siblingCount);
            const rightSibling = Math.min(total - 1, current + siblingCount);

            // First page
            pages.push(1);

            // Left ellipsis
            if (leftSibling > 2) {
                pages.push('...');
            }

            // Sibling pages
            for (let i = leftSibling; i <= rightSibling; i++) {
                if (i !== 1 && i !== total) {
                    pages.push(i);
                }
            }

            // Right ellipsis
            if (rightSibling < total - 1) {
                pages.push('...');
            }

            // Last page
            if (total > 1) {
                pages.push(total);
            }

            return pages;
        };

        const isFirstPage = current === 1;
        const isLastPage = current === total;

        const buttonBaseClasses = `
            inline-flex items-center justify-center gap-2 px-3 py-2 text-sm
            font-medium rounded-lg transition-all
            border border-border-primary
            hover:border-color-primary hover:text-color-primary
            disabled:opacity-50 disabled:cursor-not-allowed
            ${buttonClass || ''}
        `.trim();

        const getButtonClasses = (isActive: boolean) => {
            if (isActive) {
                return `
                    ${buttonBaseClasses}
                    bg-color-primary text-white border-color-primary
                    ${activeButtonClass || ''}
                `.trim();
            }
            return buttonBaseClasses;
        };

        return (
            <nav
                class={`flex items-center gap-2 justify-center ${className || ''}`}
                role="navigation"
                aria-label="pagination"
                {...restProps}
            >
                {/* Previous button */}
                <button
                    onClick={() => current > 1 && onChange(current - 1)}
                    disabled={isFirstPage}
                    class={getButtonClasses(false)}
                    aria-label="Previous page"
                >
                    ← Previous
                </button>

                {/* First page */}
                {showFirstLast && current > 1 && (
                    <button
                        onClick={() => onChange(1)}
                        class={getButtonClasses(false)}
                        aria-label="First page"
                    >
                        1
                    </button>
                )}

                {/* Page list */}
                <div class="flex items-center gap-1">
                    {generatePages().map((page, index) => {
                        if (page === '...') {
                            return (
                                <span
                                    key={`ellipsis-${index}`}
                                    class="px-2 py-2 text-sm text-primary opacity-60"
                                >
                                    {page}
                                </span>
                            );
                        }

                        const pageNum = page as number;
                        const isActive = pageNum === current;

                        return (
                            <button
                                key={pageNum}
                                onClick={() => onChange(pageNum)}
                                class={getButtonClasses(isActive)}
                                aria-current={isActive ? 'page' : undefined}
                                aria-label={`Page ${pageNum}`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>

                {/* Next button */}
                <button
                    onClick={() => current < total && onChange(current + 1)}
                    disabled={isLastPage}
                    class={getButtonClasses(false)}
                    aria-label="Next page"
                >
                    Next →
                </button>
            </nav>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
