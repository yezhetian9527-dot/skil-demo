<script setup lang="ts">
import { Clock, Download, FileText, Plus, TrendingDown, TrendingUp } from 'lucide-vue-next'
import { reportMetrics, reports } from '../data/pages'

const typeColors: Record<string, string> = {
  financial: '#00ff88',
  usage: '#6c8cff',
  audit: '#ff8800',
  performance: '#c084fc',
}

const statusLabels: Record<string, string> = {
  ready: 'READY',
  generating: 'GENERATING',
  scheduled: 'SCHEDULED',
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
          <li class="text-[10px] text-accent font-semibold" aria-current="page">REPORTS</li>
        </ol>
      </nav>
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_05</div>
        <h1
          class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
        >
          REPORTS
        </h1>
        <p class="mt-2.5 text-xs text-muted">Generate, schedule, and download system reports</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold leading-none transition-colors"
          type="button"
        >
          <Plus :size="14" :stroke-width="1.75" aria-hidden="true" />
          <span>NEW REPORT</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Metrics -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Report metrics">
    <article
      v-for="m in reportMetrics"
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

  <!-- Report grid -->
  <section class="mt-8" aria-labelledby="report-archive-heading">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// TABLE_04</div>
        <h2 id="report-archive-heading" class="mt-1.5 text-lg font-semibold font-display">REPORT ARCHIVE</h2>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <article v-for="r in reports" :key="r.id" class="flex flex-col gap-3 p-5 max-md:p-4 border border-line bg-panel">
        <div class="flex items-center justify-between">
          <mark class="text-[10px] font-bold bg-transparent" :style="{ color: typeColors[r.type] }">
            [{{ r.type.toUpperCase() }}]
          </mark>
          <span class="text-[10px] tracking-wide text-muted">{{ r.id }}</span>
        </div>
        <h3 class="m-0 text-[13px] font-semibold font-display">{{ r.title }}</h3>
        <dl class="flex flex-col gap-1.5 m-0">
          <div class="flex items-center gap-1.5 text-[10px] text-muted">
            <dt class="sr-only">Generated</dt>
            <dd class="flex items-center gap-1.5 m-0">
              <Clock :size="10" :stroke-width="1.75" aria-hidden="true" />
              <time :datetime="r.generated">{{ r.generated }}</time>
            </dd>
          </div>
          <div class="flex items-center gap-1.5 text-[10px] text-muted">
            <dt class="sr-only">Size</dt>
            <dd class="flex items-center gap-1.5 m-0">
              <FileText :size="10" :stroke-width="1.75" aria-hidden="true" />
              <span>{{ r.size }}</span>
            </dd>
          </div>
        </dl>
        <footer class="flex items-center justify-between mt-auto pt-3 border-t border-line">
          <span
            class="text-[10px] font-semibold"
            :class="{
              'text-accent': r.status === 'ready',
              'text-warn': r.status === 'generating',
              'text-muted': r.status === 'scheduled',
            }"
            role="status"
          >
            {{ statusLabels[r.status] }}
          </span>
          <button
            v-if="r.status === 'ready'"
            class="inline-flex items-center gap-2 px-3 py-2 min-h-[36px] border border-line bg-panel text-txt text-[10px] font-semibold leading-none transition-colors"
            type="button"
          >
            <Download :size="12" :stroke-width="1.75" class="text-muted" aria-hidden="true" />
            <span>GET</span>
          </button>
        </footer>
      </article>
    </div>
  </section>
</template>
