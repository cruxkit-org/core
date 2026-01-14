// src/kit/layout/stack.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface StackProps {
        // Spacing
        gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

        // Alignment
        align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
        justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

        // Direction
        reverse?: boolean;

        // Layout
        wrap?: boolean;

        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Stack(props: StackProps): JSXElement {
        const {
            gap = 4,
            align = 'stretch',
            justify = 'start',
            reverse = false,
            wrap = false,
            children,
            class: className,
            as: Tag = 'div',
            ...restProps
        } = props;

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

        // Align classes
        const alignClasses = {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
            baseline: 'items-baseline'
        };

        // Justify classes
        const justifyClasses = {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly'
        };

        const classes = [
            'flex',
            reverse ? 'flex-col-reverse' : 'flex-col',
            gapClasses[gap],
            alignClasses[align],
            justifyClasses[justify],
            wrap && 'flex-wrap',
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <Tag class={classes} {...restProps}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
