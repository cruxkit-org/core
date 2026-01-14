// src/kit/layout/center.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface CenterProps {
        // Inline (horizontal only)
        inline?: boolean;

        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        as?: 'div' | 'section' | 'article';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Center(props: CenterProps): JSXElement {
        const {
            inline = false,
            children,
            class: className,
            as: Tag = 'div',
            ...restProps
        } = props;

        const classes = inline
            ? ['flex', 'justify-center', className].filter(Boolean).join(' ')
            : ['flex', 'items-center', 'justify-center', className].filter(Boolean).join(' ');

        return <Tag class={classes} {...restProps}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
