// src/kit/forms/switch.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SwitchProps {
        // Value
        checked?: boolean;
        onChange?: (checked: boolean) => void;

        // Label
        label?: string | JSXElement;

        // States
        disabled?: boolean;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        name?: string;

        // Accessibility
        'aria-label'?: string;
        'aria-describedby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Switch(props: SwitchProps): JSXElement {
        const {
            checked: initialChecked = false,
            onChange,
            label,
            disabled = false,
            class: className,
            ...restProps
        } = props;

        const isChecked = signal(initialChecked);

        const handleChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            isChecked.set(target.checked);
            onChange?.(target.checked);
        };

        return (
            <label class={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}>
                <div class="relative inline-block">
                    <input
                        type="checkbox"
                        checked={isChecked()}
                        onChange={handleChange}
                        disabled={disabled}
                        class="sr-only"
                        {...restProps}
                    />
                    <div
                        class={`
                            w-11 h-6 rounded-full transition-colors
                            ${isChecked() ? 'bg-color-primary' : 'bg-border-primary'}
                            ${disabled ? 'opacity-50' : ''}
                        `.trim()}
                    />
                    <div
                        class={`
                            absolute top-0.5 left-0.5 w-5 h-5 rounded-full
                            bg-white shadow-md transition-transform
                            ${isChecked() ? 'translate-x-5' : 'translate-x-0'}
                        `.trim()}
                    />
                </div>
                {label && (
                    <span class="text-sm text-primary font-medium">
                        {label}
                    </span>
                )}
            </label>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
