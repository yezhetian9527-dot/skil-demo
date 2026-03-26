<script setup lang="ts">
import { Calendar, RefreshCw, Share2, SlidersHorizontal } from 'lucide-vue-next'

const ICON_MAP = {
  sliders: SlidersHorizontal,
  calendar: Calendar,
  refresh: RefreshCw,
  share: Share2,
} as const

defineProps<{
  label: string
  icon?: keyof typeof ICON_MAP
  active?: boolean
}>()
</script>

<template>
  <button
    class="inline-flex items-center gap-2 px-3 py-2 min-h-[36px] border border-line bg-panel text-txt text-[9px] font-semibold leading-none tracking-wide transition-colors duration-200"
    :class="active ? 'bg-accent border-accent text-[#02150d] font-bold' : ''"
  >
    <component
      :is="ICON_MAP[icon!]"
      v-if="icon && ICON_MAP[icon]"
      :size="12"
      :stroke-width="1.75"
      :class="active ? 'text-[#02150d]' : 'text-muted'"
    />
    <span>{{ label }}</span>
  </button>
</template>
