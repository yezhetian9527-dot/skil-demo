<script setup lang="ts">
import type { RevenuePoint } from '../data/dashboard'

defineProps<{
  points: RevenuePoint[]
}>()
</script>

<template>
  <figure class="p-6 max-md:p-4 border border-line bg-panel mb-8" role="img" aria-label="Weekly revenue bar chart">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// CHART_01</div>
        <h2 class="mt-1.5 text-lg font-semibold font-display">WEEKLY REVENUE</h2>
      </div>
      <div class="text-[10px] tracking-wide text-muted">LAST 7 DAYS</div>
    </div>

    <div class="grid grid-cols-7 gap-3 max-md:gap-1.5 items-end min-h-[160px] border-b border-line pt-2" aria-hidden="true">
      <div v-for="point in points" :key="point.day" class="flex flex-col items-center justify-end gap-2 min-h-[160px]">
        <div class="chart-bar" :style="{ height: `${point.value}px` }"></div>
        <span class="text-[10px] tracking-wide text-muted">{{ point.day }}</span>
      </div>
    </div>
  </figure>
</template>
