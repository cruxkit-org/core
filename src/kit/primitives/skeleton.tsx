// src/kit/primitives/skeleton.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SkeletonProps {
        width?: string;
        height?: string;
        variant?: 'text' | 'circular' | 'rectangular';
        animate?: boolean;
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Skeleton(props: SkeletonProps): JSXElement {
        const {
            width,
            height,
            variant = 'text',
            animate = true,
            class: className
        } = props;

        const variantClasses = {
            text: 'rounded h-4',
            circular: 'rounded-full',
            rectangular: 'rounded-md'
        };

        const classes = [
            'bg-raised',
            animate && 'animate-pulse',
            variantClasses[variant],
            className
        ]
            .filter(Boolean)
            .join(' ');

        const style = {
            width: width || (variant === 'text' ? '100%' : undefined),
            height: height || (variant === 'text' ? undefined : '100%')
        };

        return <div class={classes} style={style} />;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Skeleton;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
