import Vue from 'vue'
import { viewRecord, download } from '@/mixins'

export default function() {
  Vue.mixin({
    methods: {
      viewRecord,
      download
    }
  })
}
