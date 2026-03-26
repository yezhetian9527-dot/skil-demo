<script setup lang="ts">
import { Download } from 'lucide-vue-next'
import type { AnalyticsRow } from '../data/dashboard'

defineProps<{
  rows: AnalyticsRow[]
}>()
</script>

<template>
  <section class="mt-8" aria-labelledby="analytics-table-heading">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// TABLE_01</div>
        <h2 id="analytics-table-heading" class="mt-1.5 text-lg font-semibold font-display">CUSTOMER ANALYTICS</h2>
      </div>
      <button class="inline-flex items-center gap-2 px-3 py-2 min-h-[36px] border border-line bg-panel text-txt text-[10px] font-semibold leading-none transition-colors" type="button">
        <Download :size="12" :stroke-width="1.75" class="text-muted" aria-hidden="true" />
        <span>EXPORT</span>
      </button>
    </div>

    <div class="overflow-x-auto -webkit-overflow-scrolling-touch border border-line bg-panel">
      <table class="w-full border-collapse text-[11px] whitespace-nowrap" aria-label="Customer analytics">
        <thead>
          <tr>
            <th class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line" scope="col">CUSTOMER_ID</th>
            <th class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line" scope="col">REVENUE</th>
            <th class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line" scope="col">STATUS</th>
            <th class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line" scope="col">LAST_SYNC</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.customer">
            <td class="p-3.5 border-b border-line last:border-b-0">{{ row.customer }}</td>
            <td class="p-3.5 border-b border-line last:border-b-0" :class="row.status === 'active' ? 'text-accent' : 'text-txt'">{{ row.revenue }}</td>
            <td class="p-3.5 border-b border-line last:border-b-0">
              <span :class="row.status === 'active' ? 'text-accent' : row.status === 'pending' ? 'text-warn' : 'text-muted'" class="text-[9px] uppercase">
                [{{ row.status.toUpperCase() }}]
              </span>
            </td>
            <td class="p-3.5 border-b border-line last:border-b-0 text-muted">{{ row.lastSync }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
