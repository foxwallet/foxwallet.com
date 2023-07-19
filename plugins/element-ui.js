import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import countTo from 'vue-count-to'

Vue.use(Element, { locale })
Vue.component('CountTo', countTo)
