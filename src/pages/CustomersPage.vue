<script setup lang="ts">
import { Download, Plus, Search, TrendingDown, TrendingUp } from 'lucide-vue-next'
import { ref } from 'vue'
import { customerMetrics, customers } from '../data/pages'

const search = ref('')
const filtered = ref(customers)

const planColors: Record<string, string> = {
  enterprise: 'var(--tw-accent, #00ff88)',
  pro: 'var(--tw-warn, #ff8800)',
  free: 'var(--tw-muted, #6a6a6a)',
}
</script>

<template>
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 list-none m-0 p-0">
          <li class="text-[10px] text-muted">SYS</li>
          <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
          <li class="text-[10px] text-muted">DASH</li>
          <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
          <li class="text-[10px] text-accent font-semibold" aria-current="page">CUSTOMERS</li>
        </ol>
      </nav>
      <label
        class="inline-flex items-center gap-2.5 min-w-[200px] max-md:w-full border border-line bg-panel px-3.5 py-2.5 text-muted text-[10px] leading-none cursor-text"
      >
        <Search :size="14" :stroke-width="1.75" aria-hidden="true" />
        <input
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
    <article
      v-for="m in customerMetrics"
      :key="m.label"
      class="p-5 max-md:p-4 border border-line bg-panel"
      :aria-label="m.label"
    >
      <div class="flex items-center justify-between">
        <span class="text-[10px] tracking-wide font-semibold text-muted">{{ m.label }}</span>
      </div>
      <output class="block mt-[18px] text-[32px] max-md:text-2xl leading-none font-display">{{ m.value }}</output>
      <div
        class="flex items-center gap-1.5 mt-4 text-[10px] font-semibold"
        :class="m.trend === 'up' ? 'text-accent' : 'text-danger'"
      >
        <component
          :is="m.trend === 'up' ? TrendingUp : TrendingDown"
          :size="10"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        <span>{{ m.change }}</span>
      </div>
    </article>
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
