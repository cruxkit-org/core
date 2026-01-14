/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { type Signal }  from '@minejs/signals';
    import { JSXElement  }  from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    /**
     * AppKit component props
     * Simple wrapper config - page content comes via children
     */
    export interface AppKitProps {
        // Page content (injected by framework/router)
        children?: JSXElement | JSXElement[]

        // Global loader configuration
        showLoader?: boolean | Signal<boolean>
        loaderMessage?: string | Signal<string>

        // Global modal configuration
        modal?: {
            isOpen?: boolean | Signal<boolean>
            children?: JSXElement | JSXElement[]
            onClose?: () => void
            backdrop?: boolean
        }

        // App-level styling
        appId?: string
        appStyle?: Record<string, any>
    }

    // Page context types
    export type PageContext     = 'auth' | 'dashboard' | 'home' | 'profile' | 'admin' | 'default';

    // Page layout types
    export type PageLayout      = 'blank' | 'app' | 'dashboard' | 'split' | 'landing' | 'custom';

    // Zone definition for different layouts
    export interface PageZones {
        // Blank layout: no predefined zones
        // App layout zones
        header?                 : JSXElement | JSXElement[]
        main?                   : JSXElement | JSXElement[]
        footer?                 : JSXElement | JSXElement[]

        // Dashboard layout zones
        sidebar?                : JSXElement | JSXElement[]
        topbar?                 : JSXElement | JSXElement[]

        // Split layout zones
        left?                   : JSXElement | JSXElement[]
        right?                  : JSXElement | JSXElement[]

        // Landing layout zones
        hero?                   : JSXElement | JSXElement[]
        content?                : JSXElement | JSXElement[]

        // Custom zones
        [key: string]           : JSXElement | JSXElement[] | undefined
    }

    // Page metadata
    export interface PageMeta {
        title?                  : string
        description?            : string
        keywords?               : string[]
        og?                     : {
            title?              : string
            description?        : string
            image?              : string
            url?                : string
            type?               : string
        }
    }

    // Page component props
    export interface PageKitProps {
        // Context: affects all children via data-page attribute
        context?                : PageContext   | Signal<PageContext>

        // Layout: defines zone structure
        layout?                 : PageLayout    | Signal<PageLayout>

        // Zones: content for each region (layout-specific)
        zones?                  : PageZones     | Signal<PageZones>

        // Composition: alternative to zones
        children?               : JSXElement    | JSXElement[]

        // Meta information
        meta?                   : PageMeta | Signal<PageMeta>

        // Lifecycle
        onMount?                : () => void | Promise<void>
        onUnmount?              : () => void

        // Responsive options
        responsive?             : {
            mobileLayout?       : PageLayout
            tabletLayout?       : PageLayout
            collapseAt?         : string
        }

        // Styling
        className?              : string
        style?                  : Record<string, any>
    }

    // Zone renderer config
    export interface ZoneConfig {
        name                    : string
        element?                : JSXElement | JSXElement[]
        className?              : string
        style?                  : Record<string, any>
    }

    // Layout structure definition
    export interface LayoutDefinition {
        name                    : PageLayout
        zones                   : string[]
        structure               : string  // ASCII representation
        responsive?: {
            mobile?             : string[]
            tablet?             : string[]
        }
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝