// src/kit/layout/container.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface ContainerProps {
        // Size
        maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

        // Padding
        px?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
        py?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;

        // Center content
        centerContent?: boolean;

        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Container(props: ContainerProps): JSXElement {
        const {
            maxWidth = 'xl',
            px = 4,
            py,
            centerContent = false,
            children,
            class: className,
            as: Tag = 'div',
            ...restProps
        } = props;

        // Max width classes
        const maxWidthClasses = {
            xs: 'max-w-xs',      // 320px
            sm: 'max-w-sm',      // 384px
            md: 'max-w-md',      // 448px
            lg: 'max-w-lg',      // 512px
            xl: 'max-w-xl',      // 576px
            '2xl': 'max-w-2xl',  // 672px
            full: 'max-w-full'
        };

        // Padding classes
        const pxClasses = {
            0: 'px-0',
            1: 'px-1',
            2: 'px-2',
            3: 'px-3',
            4: 'px-4',
            6: 'px-6',
            8: 'px-8',
            12: 'px-12'
        };

        const pyClasses = py !== undefined ? {
            0: 'py-0',
            1: 'py-1',
            2: 'py-2',
            3: 'py-3',
            4: 'py-4',
            6: 'py-6',
            8: 'py-8',
            12: 'py-12'
        }[py] : '';

        // Base classes
        const baseClasses = [
            'w-full',
            'mx-auto',
            maxWidthClasses[maxWidth],
            pxClasses[px],
            pyClasses,
            centerContent && 'flex items-center justify-center',
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <Tag class={baseClasses} {...restProps}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
