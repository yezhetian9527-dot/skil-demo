<script setup lang="ts">
import { Download, Plus, Search } from 'lucide-vue-next'
import Breadcrumb from './Breadcrumb.vue'

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    moduleCode?: string
  }>(),
  {
    subtitle: 'Track performance metrics and key business insights',
    moduleCode: '// MODULE_01',
  },
)
</script>

<template>
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <Breadcrumb :current="title" />
      <label
        class="inline-flex items-center gap-2.5 min-w-[200px] max-md:w-full border border-line bg-panel px-3.5 py-2.5 text-muted text-[10px] leading-none cursor-text"
      >
        <Search :size="14" :stroke-width="1.75" aria-hidden="true" />
        <input
          type="search"
          placeholder="SEARCH..."
          class="border-0 bg-transparent text-txt text-[10px] outline-none w-full min-h-[20px] placeholder:text-muted"
        />
      </label>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">{{ moduleCode }}</div>
        <div class="flex items-center gap-3 mt-2">
          <h1
            class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
          >
            {{ title }}
          </h1>
        </div>
        <p class="mt-2.5 text-xs text-muted">{{ subtitle }}</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap max-md:w-full">
        <slot name="actions">
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
            <span>NEW REPORT</span>
          </button>
        </slot>
      </div>
    </div>
  </header>
</template>
