// src/kit/primitives/text.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TextProps {
        // Typography
        as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'small' | 'strong' | 'em';
        size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
        weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
        align?: 'start' | 'center' | 'end' | 'justify';

        // Colors
        color?: '1' | '2' | '3' | '4' | 'inverse' | 'brand' | 'success' | 'warning' | 'error';

        // Style
        italic?: boolean;
        underline?: boolean;
        lineThrough?: boolean;
        truncate?: boolean;
        noWrap?: boolean;

        // Layout
        display?: 'block' | 'inline' | 'inline-block';

        // Content
        children?: JSXElement | string | number;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        title?: string;

        // Accessibility
        'aria-label'?: string;
        role?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Text(props: TextProps): JSXElement {
        const {
            as: Tag = 'p',
            size = 'base',
            weight = 'normal',
            align = 'start',
            color = '1',
            italic = false,
            underline = false,
            lineThrough = false,
            truncate = false,
            noWrap = false,
            display,
            children,
            class: className,
            ...restProps
        } = props;

        // Size classes
        const sizeClasses = {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl'
        };

        // Weight classes
        const weightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        // Align classes
        const alignClasses = {
            start: 'text-start',
            center: 'text-center',
            end: 'text-end',
            justify: 'text-justify'
        };

        // Color classes
        const colorClasses = {
            '1': 'text-1',
            '2': 'text-2',
            '3': 'text-3',
            '4': 'text-4',
            'inverse': 'text-inverse',
            'brand': 'text-brand',
            'success': 'text-success',
            'warning': 'text-warning',
            'error': 'text-error'
        };

        // Display classes
        const displayClasses = display ? {
            block: 'block',
            inline: 'inline',
            'inline-block': 'inline-block'
        }[display] : '';

        // Style classes
        const styleClasses = [];
        if (italic) styleClasses.push('italic');
        if (underline) styleClasses.push('underline');
        if (lineThrough) styleClasses.push('line-through');
        if (truncate) styleClasses.push('truncate');
        if (noWrap) styleClasses.push('whitespace-nowrap');

        // Combine classes
        const classes = [
            sizeClasses[size],
            weightClasses[weight],
            alignClasses[align],
            colorClasses[color],
            displayClasses,
            ...styleClasses,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <Tag class={classes} {...restProps}>{children}</Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export default Text;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
