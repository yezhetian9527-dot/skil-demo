<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
</script>

<template>
  <aside
    v-if="visible"
    class="flex items-center max-md:flex-col max-md:items-start justify-between gap-3 p-3 border border-warn/40 bg-panel"
    role="alert"
    aria-live="polite"
  >
    <div class="flex items-center max-md:flex-col max-md:items-start gap-3">
      <mark class="inline-block px-2 py-1 bg-warn text-bg text-[9px] font-bold">ALERT</mark>
      <p class="m-0 text-xs text-[#8a8a8a]">
        System maintenance scheduled for
        <time datetime="2026-01-08T02:00:00-05:00">Jan 8, 2026 at 02:00 EST</time>
        . Expect brief downtime.
      </p>
    </div>
    <button
      class="p-2 border-0 bg-transparent text-muted min-h-touch"
      type="button"
      aria-label="Dismiss alert"
      @click="visible = false"
    >
      [X]
    </button>
  </aside>
</template>
