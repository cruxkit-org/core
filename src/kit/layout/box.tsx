// src/kit/layout/box.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface BoxProps {
        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav' | 'span';

        // Events
        onClick?: (e: MouseEvent) => void;

        // Accessibility
        role?: string;
        'aria-label'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Box(props: BoxProps): JSXElement {
        const {
            children,
            class: className,
            as: Tag = 'div',
            ...restProps
        } = props;

        return <Tag class={className} {...restProps}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
