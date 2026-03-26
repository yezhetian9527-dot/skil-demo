<script setup lang="ts">
import { ArrowUpRight, CreditCard, User } from 'lucide-vue-next'
import type { ActivityItem } from '../data/dashboard'

defineProps<{
  items: ActivityItem[]
}>()

const LABEL_MAP = {
  completed: 'OK',
  pending: 'PEND',
} as const

const ITEM_ICONS = [CreditCard, ArrowUpRight, User] as const

const itemIcon = (index: number) => ITEM_ICONS[index] ?? CreditCard
</script>

<template>
  <section class="mt-8" aria-labelledby="activity-heading">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// LOG_01</div>
        <h2 id="activity-heading" class="mt-1.5 text-lg font-semibold font-display">RECENT TRANSACTIONS</h2>
      </div>
      <a href="#" class="text-[10px] tracking-wide font-semibold text-accent">VIEW ALL &gt;&gt;</a>
    </div>

    <ol class="overflow-hidden m-0 p-0 list-none border border-line bg-panel" role="list">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        class="flex items-center max-md:flex-col max-md:items-start justify-between gap-4 max-md:gap-3 px-4 py-3.5 border-b border-line last:border-b-0"
      >
        <div class="flex items-center gap-3">
          <div
            class="grid place-items-center w-9 h-9 shrink-0 border border-line bg-[#141414] text-accent"
            aria-hidden="true"
          >
            <component :is="itemIcon(index)" :size="16" :stroke-width="1.75" />
          </div>
          <div>
            <div class="text-xs">{{ item.title }}</div>
            <time class="text-[10px] tracking-wide text-muted" :datetime="item.subtitle">{{ item.subtitle }}</time>
          </div>
        </div>
        <div class="flex items-center gap-5 max-md:w-full max-md:justify-between">
          <mark
            class="inline-flex items-center justify-center min-w-[46px] px-2 py-1 text-[9px] uppercase border-transparent"
            :class="item.status === 'completed' ? 'text-accent bg-accent/[0.12]' : 'text-warn bg-warn/[0.12]'"
          >
            {{ LABEL_MAP[item.status] }}
          </mark>
          <output class="text-xs font-semibold" :class="item.status === 'pending' ? 'text-muted' : 'text-accent'">
            {{ item.value }}
          </output>
        </div>
      </li>
    </ol>

    <nav class="flex justify-center mt-6 mb-9" aria-label="Pagination">
      <div class="flex items-center gap-1">
        <button
          class="w-9 h-9 flex items-center justify-center border border-accent bg-accent text-bg leading-none"
          aria-current="page"
        >
          1
        </button>
        <button class="w-9 h-9 flex items-center justify-center border border-line bg-panel text-muted leading-none">
          2
        </button>
        <button class="w-9 h-9 flex items-center justify-center border border-line bg-panel text-muted leading-none">
          3
        </button>
      </div>
    </nav>
  </section>
</template>
