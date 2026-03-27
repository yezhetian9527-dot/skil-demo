<script setup lang="ts">
import { Download, Plus, Search } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import MetricCard from '../components/MetricCard.vue'
import { customerMetrics, customers } from '../data/pages'

const search = ref('')
const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return customers
  return customers.filter(
    (c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.email.toLowerCase().includes(q),
  )
})
</script>

<template>
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <Breadcrumb current="CUSTOMERS" />
      <label
        class="inline-flex items-center gap-2.5 min-w-[200px] max-md:w-full border border-line bg-panel px-3.5 py-2.5 text-muted text-[10px] leading-none cursor-text"
      >
        <Search :size="14" :stroke-width="1.75" aria-hidden="true" />
        <input
          v-model="search"
          type="search"
          placeholder="SEARCH CUSTOMERS..."
          class="border-0 bg-transparent text-txt text-[10px] outline-none w-full min-h-[20px] placeholder:text-muted"
        />
      </label>
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_03</div>
        <h1
          class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
        >
          CUSTOMERS
        </h1>
        <p class="mt-2.5 text-xs text-muted">Manage customer relationships and track retention</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap max-md:w-full">
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-line bg-panel text-txt leading-none transition-colors max-md:flex-1 max-md:justify-center"
          type="button"
        >
          <Download :size="14" :stroke-width="1.75" class="text-muted" aria-hidden="true" />
          <span>EXPORT</span>
        </button>
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold leading-none transition-colors max-md:flex-1 max-md:justify-center"
          type="button"
        >
          <Plus :size="14" :stroke-width="1.75" aria-hidden="true" />
          <span>ADD CUSTOMER</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Metrics -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Customer metrics">
    <MetricCard v-for="m in customerMetrics" :key="m.label" :metric="m" />
  </section>

  <!-- Customer table -->
  <section class="mt-8" aria-labelledby="customer-table-heading">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// TABLE_02</div>
        <h2 id="customer-table-heading" class="mt-1.5 text-lg font-semibold font-display">CUSTOMER DIRECTORY</h2>
      </div>
      <button
        class="inline-flex items-center gap-2 px-3 py-2 min-h-[36px] border border-line bg-panel text-txt text-[10px] font-semibold leading-none transition-colors"
        type="button"
      >
        <Download :size="12" :stroke-width="1.75" class="text-muted" aria-hidden="true" />
        <span>CSV</span>
      </button>
    </div>
    <div class="overflow-x-auto border border-line bg-panel">
      <table class="w-full border-collapse text-[11px] whitespace-nowrap" aria-label="Customer directory">
        <thead>
          <tr>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              ID
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              NAME
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              PLAN
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              REVENUE
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              STATUS
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              JOINED
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in filtered" :key="c.id">
            <td class="p-3.5 border-b border-line text-muted">{{ c.id }}</td>
            <td class="p-3.5 border-b border-line">{{ c.name }}</td>
            <td class="p-3.5 border-b border-line">
              <span
                class="text-[10px] font-semibold"
                :class="c.plan === 'enterprise' ? 'text-accent' : c.plan === 'pro' ? 'text-warn' : 'text-muted'"
              >
                [{{ c.plan.toUpperCase() }}]
              </span>
            </td>
            <td class="p-3.5 border-b border-line" :class="c.status === 'churned' ? 'text-txt' : 'text-accent'">
              {{ c.revenue }}
            </td>
            <td class="p-3.5 border-b border-line">
              <span
                class="text-[9px] uppercase"
                :class="c.status === 'active' ? 'text-accent' : c.status === 'trial' ? 'text-warn' : 'text-muted'"
              >
                [{{ c.status.toUpperCase() }}]
              </span>
            </td>
            <td class="p-3.5 border-b border-line text-muted">
              <time :datetime="c.joinDate">{{ c.joinDate }}</time>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
