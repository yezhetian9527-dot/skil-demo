<script setup lang="ts">
import { Download, Plus, Search } from 'lucide-vue-next'
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
          <li class="text-[10px] text-accent font-semibold" aria-current="page">OVERVIEW</li>
        </ol>
      </nav>
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
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_01</div>
        <div class="flex items-center gap-3 mt-2">
          <h1
            class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
          >
            OVERVIEW
          </h1>
        </div>
        <p class="mt-2.5 text-xs text-muted">Track performance metrics and key business insights</p>
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
          <span>NEW REPORT</span>
        </button>
      </div>
    </div>
  </header>
</template>
