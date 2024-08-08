import './bootstrap'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import { createPinia } from 'pinia'
import { Tooltip } from 'bootstrap'

import router from './router'
import ElementPlus from 'element-plus'
import i18n from '@/core/plugins/i18n'

//imports for app initialization
import ApiService from '@/core/services/ApiService'
import { initApexCharts } from '@/core/plugins/apexcharts'
import { initInlineSvg } from '@/core/plugins/inline-svg'
import { initVeeValidate } from '@/core/plugins/vee-validate'
import { initKtIcon } from '@/core/plugins/keenthemes'

import '@/core/plugins/prismjs'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

const app = createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),
    setup ({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(createPinia())
            .use(router)
            .use(ElementPlus)
            .use(i18n)
            .directive('tooltip', el => {
                new Tooltip(el)
            })
            .mount(el)
    },
    progress: {
        color: '#4B5563'
    }
})

ApiService.init(app)
initApexCharts(app)
initInlineSvg(app)
initKtIcon(app)
initVeeValidate()
