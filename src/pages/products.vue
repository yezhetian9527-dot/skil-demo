<script setup lang="ts">
import { Download, Plus } from 'lucide-vue-next'
import Breadcrumb from '../components/Breadcrumb.vue'
import MetricCard from '../components/MetricCard.vue'
import ProductGallery from '../components/ProductGallery.vue'
import { products } from '../data/dashboard'
import { productInventory, productMetrics } from '../data/pages'
</script>

<template>
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <Breadcrumb current="PRODUCTS" />
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_04</div>
        <h1
          class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
        >
          PRODUCTS
        </h1>
        <p class="mt-2.5 text-xs text-muted">Product catalog, inventory, and subscription management</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold leading-none transition-colors"
          type="button"
        >
          <Plus :size="14" :stroke-width="1.75" aria-hidden="true" />
          <span>NEW PRODUCT</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Metrics -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Product metrics">
    <MetricCard v-for="m in productMetrics" :key="m.label" :metric="m" />
  </section>

  <ProductGallery :items="products" />

  <!-- Inventory table -->
  <section class="mt-8" aria-labelledby="inventory-heading">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// TABLE_03</div>
        <h2 id="inventory-heading" class="mt-1.5 text-lg font-semibold font-display">PRODUCT INVENTORY</h2>
      </div>
      <button
        class="inline-flex items-center gap-2 px-3 py-2 min-h-[36px] border border-line bg-panel text-txt text-[10px] font-semibold leading-none transition-colors"
        type="button"
      >
        <Download :size="12" :stroke-width="1.75" class="text-muted" aria-hidden="true" />
        <span>EXPORT</span>
      </button>
    </div>
    <div class="overflow-x-auto border border-line bg-panel">
      <table class="w-full border-collapse text-[11px] whitespace-nowrap" aria-label="Product inventory">
        <thead>
          <tr>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              CODE
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
              STOCK
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              PRICE
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in productInventory" :key="p.code">
            <td class="p-3.5 border-b border-line text-[10px] tracking-wide font-semibold text-accent">{{ p.code }}</td>
            <td class="p-3.5 border-b border-line">{{ p.name }}</td>
            <td class="p-3.5 border-b border-line text-muted">{{ p.stock }}</td>
            <td class="p-3.5 border-b border-line text-accent">{{ p.price }}</td>
            <td class="p-3.5 border-b border-line">
              <span class="text-[9px] uppercase" :class="p.status === 'active' ? 'text-accent' : 'text-warn'">
                [{{ p.status.toUpperCase() }}]
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
