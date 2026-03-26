<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { Product } from '../data/dashboard'

defineProps<{
  items: Product[]
}>()
</script>

<template>
  <section class="mt-8" aria-labelledby="gallery-heading">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// GALLERY_01</div>
        <h2 id="gallery-heading" class="mt-1.5 text-lg font-semibold font-display">FEATURED PRODUCTS</h2>
      </div>
      <nav class="flex items-center gap-2" aria-label="Gallery navigation">
        <button class="w-9 h-9 flex items-center justify-center border border-line bg-panel text-muted transition-colors" type="button" aria-label="Previous">
          <ChevronLeft :size="14" :stroke-width="1.75" />
        </button>
        <button class="w-9 h-9 flex items-center justify-center border border-accent bg-accent text-bg transition-colors" type="button" aria-label="Next">
          <ChevronRight :size="14" :stroke-width="1.75" />
        </button>
      </nav>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <figure v-for="item in items" :key="item.code" class="m-0 overflow-hidden border border-line bg-panel">
        <div class="grid place-items-center h-[140px] border-b border-line bg-[#0d0d0d]" aria-hidden="true">
          <div class="text-[#4a4a4a] text-[28px] leading-none">◫</div>
        </div>
        <figcaption class="p-4 text-[11px]">
          <div class="text-[10px] tracking-wide font-semibold text-accent">{{ item.code }}</div>
          <h3 class="mt-2 text-xs font-medium font-display">{{ item.name }}</h3>
          <p class="mt-2 m-0 text-[10px] leading-relaxed text-muted">{{ item.description }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
