// src/kit/layout/divider.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface DividerProps {
        // Orientation
        orientation?: 'horizontal' | 'vertical';

        // Variant
        variant?: 'solid' | 'dashed' | 'dotted';

        // Thickness
        thickness?: 'thin' | 'medium' | 'thick';

        // Color
        color?: '1' | '2' | '3' | 'brand' | 'current';

        // Label
        label?: string | JSXElement;
        labelPosition?: 'start' | 'center' | 'end';

        // Spacing
        spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;

        // Styling
        class?: string;

        // Accessibility
        role?: string;
        'aria-orientation'?: 'horizontal' | 'vertical';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Divider(props: DividerProps): JSXElement {
        const {
            orientation = 'horizontal',
            variant = 'solid',
            thickness = 'thin',
            color = '2',
            label,
            labelPosition = 'center',
            spacing,
            class: className,
            role = 'separator',
            ...restProps
        } = props;

        // Thickness classes
        const thicknessClasses = {
            horizontal: {
                thin: 'border-t',
                medium: 'border-t-2',
                thick: 'border-t-4'
            },
            vertical: {
                thin: 'border-s',
                medium: 'border-s-2',
                thick: 'border-s-4'
            }
        };

        // Variant classes
        const variantClasses = {
            solid: 'border-solid',
            dashed: 'border-dashed',
            dotted: 'border-dotted'
        };

        // Color classes
        const colorClasses = {
            '1': 'border-1',
            '2': 'border-2',
            '3': 'border-3',
            'brand': 'border-brand',
            'current': 'border-current'
        };

        // Spacing classes
        const spacingClasses = spacing !== undefined ? {
            horizontal: {
                0: 'my-0',
                1: 'my-1',
                2: 'my-2',
                3: 'my-3',
                4: 'my-4',
                6: 'my-6',
                8: 'my-8',
                12: 'my-12'
            },
            vertical: {
                0: 'mx-0',
                1: 'mx-1',
                2: 'mx-2',
                3: 'mx-3',
                4: 'mx-4',
                6: 'mx-6',
                8: 'mx-8',
                12: 'mx-12'
            }
        }[orientation][spacing] : '';

        // Base classes
        const baseClasses = [
            thicknessClasses[orientation][thickness],
            variantClasses[variant],
            colorClasses[color],
            spacingClasses,
            orientation === 'horizontal' ? 'w-full' : 'h-full',
            className
        ]
            .filter(Boolean)
            .join(' ');

        // If no label, simple divider
        if (!label) {
            return (
                <div
                    class={baseClasses}
                    role={role}
                    aria-orientation={orientation}
                    {...restProps}
                />
            );
        }

        // With label
        const containerClasses = orientation === 'horizontal'
            ? 'flex items-center w-full'
            : 'flex flex-col items-center h-full';

        const labelPositionClasses = {
            horizontal: {
                start: 'justify-start',
                center: 'justify-center',
                end: 'justify-end'
            },
            vertical: {
                start: 'justify-start',
                center: 'justify-center',
                end: 'justify-end'
            }
        };

        return (
            <div
                class={`${containerClasses} ${labelPositionClasses[orientation][labelPosition]} ${spacingClasses}`}
                role={role}
                aria-orientation={orientation}
                {...restProps}
            >
                {labelPosition !== 'start' && (
                    <div class={`flex-1 ${baseClasses}`} />
                )}
                <span class={`${orientation === 'horizontal' ? 'px-3' : 'py-3'} text-2 text-sm`}>
                    {label}
                </span>
                {labelPosition !== 'end' && (
                    <div class={`flex-1 ${baseClasses}`} />
                )}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
