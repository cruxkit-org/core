// src/kit/layout/spacer.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SpacerProps {
        // Size
        size?: 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

        // Direction
        axis?: 'x' | 'y' | 'both';

        // Flex grow
        flex?: boolean;

        // Styling
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Spacer(props: SpacerProps): JSXElement {
        const {
            size,
            axis = 'both',
            flex = false,
            class: className
        } = props;

        const sizeClasses = size ? {
            x: {
                1: 'w-1',
                2: 'w-2',
                3: 'w-3',
                4: 'w-4',
                6: 'w-6',
                8: 'w-8',
                10: 'w-10',
                12: 'w-12',
                16: 'w-16',
                20: 'w-20',
                24: 'w-24'
            },
            y: {
                1: 'h-1',
                2: 'h-2',
                3: 'h-3',
                4: 'h-4',
                6: 'h-6',
                8: 'h-8',
                10: 'h-10',
                12: 'h-12',
                16: 'h-16',
                20: 'h-20',
                24: 'h-24'
            },
            both: {
                1: 'size-1',
                2: 'size-2',
                3: 'size-3',
                4: 'size-4',
                6: 'size-6',
                8: 'size-8',
                10: 'size-10',
                12: 'size-12',
                16: 'size-16',
                20: 'size-20',
                24: 'size-24'
            }
        }[axis][size] : '';

        const classes = [
            flex && 'flex-1',
            !flex && sizeClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <div class={classes} aria-hidden="true" />;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
