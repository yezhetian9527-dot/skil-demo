<script setup lang="ts">
import { Download, TrendingDown, TrendingUp } from 'lucide-vue-next'
import ActionChip from '../components/ActionChip.vue'
import { analyticsMetrics, conversionFunnel, trafficSources, weeklyTraffic } from '../data/pages'

const maxTraffic = Math.max(...weeklyTraffic.map((t) => t.value))
</script>

<template>
  <!-- Header -->
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 list-none m-0 p-0">
          <li class="text-[10px] text-muted">SYS</li>
          <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
          <li class="text-[10px] text-muted">DASH</li>
          <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
          <li class="text-[10px] text-accent font-semibold" aria-current="page">ANALYTICS</li>
        </ol>
      </nav>
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_02</div>
        <h1
          class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
        >
          ANALYTICS
        </h1>
        <p class="mt-2.5 text-xs text-muted">Deep dive into traffic patterns and user behavior</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold leading-none transition-colors"
          type="button"
        >
          <Download :size="14" :stroke-width="1.75" aria-hidden="true" />
          <span>EXPORT</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Time range filter -->
  <section class="flex flex-wrap gap-2 mb-8" aria-label="Time range filter">
    <ActionChip label="7 DAYS" active />
    <ActionChip label="30 DAYS" />
    <ActionChip label="90 DAYS" />
    <ActionChip label="CUSTOM" icon="calendar" />
  </section>

  <!-- Metrics -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Analytics metrics">
    <article
      v-for="m in analyticsMetrics"
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

  <!-- Weekly traffic chart -->
  <figure class="p-6 max-md:p-4 border border-line bg-panel mb-8" role="img" aria-label="Weekly traffic bar chart">
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// CHART_02</div>
        <h2 class="mt-1.5 text-lg font-semibold font-display">WEEKLY TRAFFIC</h2>
      </div>
      <div class="text-[10px] tracking-wide text-muted">UNIQUE VISITORS</div>
    </div>
    <div
      class="grid grid-cols-7 gap-3 max-md:gap-1.5 items-end min-h-[160px] border-b border-line pt-2"
      aria-hidden="true"
    >
      <div
        v-for="point in weeklyTraffic"
        :key="point.day"
        class="flex flex-col items-center justify-end gap-2 min-h-[160px]"
      >
        <div class="chart-bar" :style="{ height: `${(point.value / maxTraffic) * 140}px` }"></div>
        <span class="text-[10px] tracking-wide text-muted">{{ point.day }}</span>
      </div>
    </div>
  </figure>

  <!-- Two-col: funnel + traffic sources -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
    <section class="p-6 max-md:p-4 border border-line bg-panel" aria-labelledby="funnel-heading">
      <div class="flex items-center justify-between gap-4 mb-4">
        <div>
          <div class="text-[10px] tracking-wide font-semibold text-accent">// FUNNEL_01</div>
          <h2 id="funnel-heading" class="mt-1.5 text-lg font-semibold font-display">CONVERSION FUNNEL</h2>
        </div>
      </div>
      <ol class="flex flex-col gap-[18px] list-none m-0 p-0">
        <li v-for="(step, i) in conversionFunnel" :key="step.label">
          <div class="flex items-center justify-between mb-1.5 text-[11px]">
            <span class="text-muted">{{ step.label }}</span>
            <output class="text-txt font-semibold">{{ step.value.toLocaleString() }}</output>
          </div>
          <div class="funnel-bar-track" aria-hidden="true">
            <div class="funnel-bar-fill" :style="{ width: `${step.percentage}%`, opacity: 1 - i * 0.15 }"></div>
          </div>
          <span class="text-[10px] tracking-wide text-muted">{{ step.percentage }}%</span>
        </li>
      </ol>
    </section>

    <section class="p-6 max-md:p-4 border border-line bg-panel" aria-labelledby="traffic-heading">
      <div class="flex items-center justify-between gap-4 mb-4">
        <div>
          <div class="text-[10px] tracking-wide font-semibold text-accent">// SOURCE_01</div>
          <h2 id="traffic-heading" class="mt-1.5 text-lg font-semibold font-display">TRAFFIC SOURCES</h2>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-[11px]" aria-label="Traffic sources">
          <thead>
            <tr>
              <th class="p-3 text-left text-[10px] font-semibold text-muted border-b border-line" scope="col">
                SOURCE
              </th>
              <th class="p-3 text-left text-[10px] font-semibold text-muted border-b border-line" scope="col">
                VISITORS
              </th>
              <th class="p-3 text-left text-[10px] font-semibold text-muted border-b border-line" scope="col">SHARE</th>
              <th class="p-3 text-left text-[10px] font-semibold text-muted border-b border-line" scope="col">TREND</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="src in trafficSources" :key="src.source">
              <td class="p-3 border-b border-line last:border-b-0">{{ src.source }}</td>
              <td class="p-3 border-b border-line text-accent">{{ src.visitors.toLocaleString() }}</td>
              <td class="p-3 border-b border-line text-muted">{{ src.percentage }}%</td>
              <td class="p-3 border-b border-line" :class="src.trend === 'up' ? 'text-accent' : 'text-danger'">
                <component
                  :is="src.trend === 'up' ? TrendingUp : TrendingDown"
                  :size="10"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
