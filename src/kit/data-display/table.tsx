/* eslint-disable @typescript-eslint/no-explicit-any */
// src/kit/data-display/table.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TableColumn<T = any> {
        key: keyof T;
        label: string;
        width?: string | number;
        align?: 'left' | 'center' | 'right';
        sortable?: boolean;
        render?: (value: any, row: T, index: number) => JSXElement | string;
    }

    export interface TableProps<T = any> {
        // Data
        data: T[];
        columns: TableColumn<T>[];

        // Behavior
        striped?: boolean;
        bordered?: boolean;
        hoverable?: boolean;
        compact?: boolean;

        // Sorting
        sortBy?: keyof T;
        sortOrder?: 'asc' | 'desc';
        onSort?: (column: keyof T, order: 'asc' | 'desc') => void;

        // Styling
        class?: string;
        headerClass?: string;
        rowClass?: string;
        cellClass?: string;
    }

    export interface TableHeaderProps<T = any> {
        columns: TableColumn<T>[];
        sortBy?: keyof T;
        sortOrder?: 'asc' | 'desc';
        onSort?: (column: keyof T, order: 'asc' | 'desc') => void;
        headerClass?: string;
        cellClass?: string;
    }

    export interface TableBodyProps<T = any> {
        data: T[];
        columns: TableColumn<T>[];
        striped?: boolean;
        hoverable?: boolean;
        rowClass?: string;
        cellClass?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Table<T = any>(props: TableProps<T>): JSXElement {
        const {
            data,
            columns,
            striped = false,
            hoverable = false,
            sortBy,
            sortOrder = 'asc',
            onSort,
            class: className,
            headerClass,
            rowClass,
            cellClass,
            ...restProps
        } = props;

        return (
            <div
                class={`
                    w-full overflow-x-auto rounded-lg border border-border-primary
                    ${className || ''}
                `.trim()}
                {...restProps}
            >
                <table class="w-full border-collapse">
                    <TableHeader
                        columns={columns}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        onSort={onSort}
                        headerClass={headerClass}
                        cellClass={cellClass}
                    />
                    <TableBody
                        data={data}
                        columns={columns}
                        striped={striped}
                        hoverable={hoverable}
                        rowClass={rowClass}
                        cellClass={cellClass}
                    />
                </table>
            </div>
        );
    }

    export function TableHeader<T = any>(props: TableHeaderProps<T>): JSXElement {
        const {
            columns,
            sortBy,
            sortOrder = 'asc',
            onSort,
            headerClass,
            cellClass,
        } = props;

        return (
            <thead class={`bg-surface-subtle border-b border-border-primary ${headerClass || ''}`}>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={String(column.key)}
                            class={`
                                px-4 py-3 text-left font-semibold text-sm
                                ${column.align === 'center' ? 'text-center' : ''}
                                ${column.align === 'right' ? 'text-right' : ''}
                                ${column.sortable && onSort ? 'cursor-pointer hover:bg-surface-hover' : ''}
                                ${cellClass || ''}
                            `.trim()}
                            style={{
                                width: column.width ? (typeof column.width === 'number' ? `${column.width}px` : column.width) : undefined,
                            }}
                            onClick={() => {
                                if (column.sortable && onSort) {
                                    const newOrder = sortBy === column.key && sortOrder === 'asc' ? 'desc' : 'asc';
                                    onSort(column.key, newOrder);
                                }
                            }}
                        >
                            <div class="flex items-center gap-2">
                                <span>{column.label}</span>
                                {column.sortable && sortBy === column.key && (
                                    <span class="text-xs">
                                        {sortOrder === 'asc' ? '↑' : '↓'}
                                    </span>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }

    export function TableBody<T = any>(props: TableBodyProps<T>): JSXElement {
        const {
            data,
            columns,
            striped = false,
            hoverable = false,
            rowClass,
            cellClass,
        } = props;

        return (
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        class={`
                            border-b border-border-primary
                            ${striped && rowIndex % 2 !== 0 ? 'bg-surface-subtle' : ''}
                            ${hoverable ? 'hover:bg-surface-subtle transition-colors' : ''}
                            ${rowClass || ''}
                        `.trim()}
                    >
                        {columns.map((column) => {
                            const value = row[column.key];
                            const rendered = column.render
                                ? column.render(value, row, rowIndex)
                                : value;

                            return (
                                <td
                                    key={String(column.key)}
                                    class={`
                                        px-4 py-3 text-sm text-primary
                                        ${column.align === 'center' ? 'text-center' : ''}
                                        ${column.align === 'right' ? 'text-right' : ''}
                                        ${cellClass || ''}
                                    `.trim()}
                                >
                                    {rendered}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
