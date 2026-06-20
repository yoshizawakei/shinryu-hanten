import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Workaround for react-aria@3.50.x missing .mjs files in package exports.
 * @react-aria/focus imports react-aria/* subpaths that Rolldown (Vite 8) can't resolve.
 */
function reactAriaCompat() {
    const base = path.resolve(__dirname, 'node_modules/react-aria/dist')
    return {
        name: 'react-aria-compat',
        resolveId(id) {
            if (!id.startsWith('react-aria/')) return
            const subpath = id.slice('react-aria/'.length)
            if (subpath.startsWith('private/')) {
                return path.join(base, subpath + '.js')
            }
            return path.join(base, 'exports', subpath + '.js')
        },
    }
}

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        reactAriaCompat(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',
        },
    },
})
