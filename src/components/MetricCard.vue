<script setup lang="ts">
import { TrendingDown, TrendingUp } from 'lucide-vue-next'
import type { Metric } from '../data/dashboard'

defineProps<{
  metric: Metric
}>()
</script>

<template>
  <article class="p-5 max-md:p-4 border border-line bg-panel" :aria-label="metric.label">
    <div class="flex items-center justify-between">
      <span class="text-[10px] tracking-wide font-semibold text-muted">{{ metric.label }}</span>
      <span
        v-if="metric.live"
        class="inline-flex items-center gap-1.5 text-accent text-[9px] font-semibold"
        aria-label="Live data"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
        <span>LIVE</span>
      </span>
    </div>
    <output class="block mt-[18px] text-[32px] max-md:text-2xl leading-none font-display">{{ metric.value }}</output>
    <div
      class="flex items-center gap-1.5 mt-4 text-[10px] font-semibold"
      :class="metric.trend === 'up' ? 'text-accent' : 'text-danger'"
      :aria-label="`Trend: ${metric.change}`"
    >
      <component
        :is="metric.trend === 'up' ? TrendingUp : TrendingDown"
        :size="10"
        :stroke-width="1.75"
        aria-hidden="true"
      />
      <span>{{ metric.change }}</span>
    </div>
  </article>
</template>
