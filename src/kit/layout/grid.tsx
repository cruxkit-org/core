// src/kit/layout/grid.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface GridProps {
        // Columns
        cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

        // Responsive columns
        colsSm?: GridProps['cols'];
        colsMd?: GridProps['cols'];
        colsLg?: GridProps['cols'];
        colsXl?: GridProps['cols'];

        // Rows
        rows?: 1 | 2 | 3 | 4 | 5 | 6;

        // Gap
        gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
        gapX?: GridProps['gap'];
        gapY?: GridProps['gap'];

        // Alignment
        align?: 'start' | 'center' | 'end' | 'stretch';
        justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

        // Flow
        flow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';

        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        as?: 'div' | 'section' | 'article' | 'ul' | 'ol';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Grid(props: GridProps): JSXElement {
        const {
            cols,
            colsSm,
            colsMd,
            colsLg,
            colsXl,
            rows,
            gap,
            gapX,
            gapY,
            align,
            justify,
            flow,
            children,
            class: className,
            as: Tag = 'div',
            ...restProps
        } = props;

        // Columns classes
        const getColsClass = (num?: number) =>
            num ? `grid-cols-${num}` : '';

        // Gap classes
        const gapClasses = {
            0: 'gap-0',
            1: 'gap-1',
            2: 'gap-2',
            3: 'gap-3',
            4: 'gap-4',
            5: 'gap-5',
            6: 'gap-6',
            8: 'gap-8',
            10: 'gap-10',
            12: 'gap-12',
            16: 'gap-16',
            20: 'gap-20',
            24: 'gap-24'
        };

        const gapXClasses = gapX !== undefined ? {
            0: 'gap-x-0',
            1: 'gap-x-1',
            2: 'gap-x-2',
            3: 'gap-x-3',
            4: 'gap-x-4',
            5: 'gap-x-5',
            6: 'gap-x-6',
            8: 'gap-x-8',
            10: 'gap-x-10',
            12: 'gap-x-12',
            16: 'gap-x-16',
            20: 'gap-x-20',
            24: 'gap-x-24'
        }[gapX] : '';

        const gapYClasses = gapY !== undefined ? {
            0: 'gap-y-0',
            1: 'gap-y-1',
            2: 'gap-y-2',
            3: 'gap-y-3',
            4: 'gap-y-4',
            5: 'gap-y-5',
            6: 'gap-y-6',
            8: 'gap-y-8',
            10: 'gap-y-10',
            12: 'gap-y-12',
            16: 'gap-y-16',
            20: 'gap-y-20',
            24: 'gap-y-24'
        }[gapY] : '';

        // Align & Justify
        const alignClasses = align ? {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch'
        }[align] : '';

        const justifyClasses = justify ? {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly'
        }[justify] : '';

        // Flow
        const flowClasses = flow ? {
            row: 'grid-flow-row',
            col: 'grid-flow-col',
            dense: 'grid-flow-dense',
            'row-dense': 'grid-flow-row-dense',
            'col-dense': 'grid-flow-col-dense'
        }[flow] : '';

        // Rows
        const rowsClass = rows ? `grid-rows-${rows}` : '';

        const classes = [
            'grid',
            getColsClass(cols),
            colsSm && `sm:${getColsClass(colsSm)}`,
            colsMd && `md:${getColsClass(colsMd)}`,
            colsLg && `lg:${getColsClass(colsLg)}`,
            colsXl && `xl:${getColsClass(colsXl)}`,
            rowsClass,
            gap !== undefined ? gapClasses[gap] : '',
            gapXClasses,
            gapYClasses,
            alignClasses,
            justifyClasses,
            flowClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <Tag class={classes} {...restProps}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
