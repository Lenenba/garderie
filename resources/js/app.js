import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { Head, Link, useForm } from '@inertiajs/vue3';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import 'primeicons/primeicons.css'
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


const Mikoo = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{stone.50}',
            100: '{stone.100}',
            200: '{stone.200}',
            300: '{stone.300}',
            400: '{stone.400}',
            500: '{stone.500}',
            600: '{stone.600}',
            700: '{stone.700}',
            800: '{stone.800}',
            900: '{stone.900}',
            950: '{stone.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{stone.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{stone.900}',
                    activeColor: '{stone.800}'
                },
                highlight: {
                    background: '{stone.950}',
                    focusBackground: '{stone.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{stone.50}',
                    inverseColor: '{stone.950}',
                    hoverColor: '{stone.100}',
                    activeColor: '{stone.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(ToastService)
            .use(PrimeVue, {
                theme: {
                    preset: Mikoo,
                    options: {
                        cssLayer: {
                            name: 'primevue',
                            order: 'tailwind-base, primevue, tailwind-utilities'
                        }
                    }
                },
                ripple: true
            })
            .component('InertiaHead', Head)
            .component('Link', Link)
            .directive('styleclass', StyleClass)
            .directive('ripple', Ripple)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
