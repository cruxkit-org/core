// src/kit/forms/slider.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SliderProps {
        // Value
        value?: number;
        onChange?: (value: number) => void;

        // Range
        min?: number;
        max?: number;
        step?: number;

        // Label
        label?: string | JSXElement;
        showValue?: boolean;

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

    export function Slider(props: SliderProps): JSXElement {
        const {
            value: initialValue = 50,
            onChange,
            min = 0,
            max = 100,
            step = 1,
            label,
            showValue = true,
            disabled = false,
            class: className,
            ...restProps
        } = props;

        const sliderValue = signal(initialValue);

        const handleChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            const newValue = parseFloat(target.value);
            sliderValue.set(newValue);
            onChange?.(newValue);
        };

        const percentage = ((sliderValue() - min) / (max - min)) * 100;

        return (
            <div class={`flex flex-col gap-3 ${className || ''}`}>
                {(label || showValue) && (
                    <div class="flex items-center justify-between">
                        {label && (
                            <span class="text-sm font-semibold text-primary">
                                {label}
                            </span>
                        )}
                        {showValue && (
                            <span class="text-sm font-medium text-primary">
                                {sliderValue()}
                            </span>
                        )}
                    </div>
                )}

                <div class="relative w-full">
                    {/* Background track */}
                    <div
                        class={`
                            absolute top-1/2 -translate-y-1/2 left-0 h-2
                            rounded-full bg-color-primary
                        `.trim()}
                        style={{ width: `${percentage}%` }}
                    />

                    {/* Full track */}
                    <div class="absolute top-1/2 -translate-y-1/2 w-full h-2 rounded-full bg-border-primary" />

                    {/* Slider input */}
                    <input
                        type="range"
                        value={sliderValue()}
                        onChange={handleChange}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        class={`
                            relative w-full h-2 rounded-full appearance-none
                            bg-transparent cursor-pointer z-5
                            accent-color-primary
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:w-5
                            [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:rounded-full
                            [&::-webkit-slider-thumb]:bg-color-primary
                            [&::-webkit-slider-thumb]:cursor-pointer
                            [&::-webkit-slider-thumb]:shadow-md
                            [&::-webkit-slider-thumb]:border-2
                            [&::-webkit-slider-thumb]:border-white
                            [&::-moz-range-thumb]:w-5
                            [&::-moz-range-thumb]:h-5
                            [&::-moz-range-thumb]:rounded-full
                            [&::-moz-range-thumb]:bg-color-primary
                            [&::-moz-range-thumb]:cursor-pointer
                            [&::-moz-range-thumb]:border-2
                            [&::-moz-range-thumb]:border-white
                            [&::-moz-range-thumb]:shadow-md
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        `.trim()}
                        {...restProps}
                    />
                </div>
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
