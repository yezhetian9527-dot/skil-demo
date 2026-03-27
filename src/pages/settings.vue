<script setup lang="ts">
import { Key, Save } from 'lucide-vue-next'
import { ref } from 'vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { apiKeys, settingSections } from '../data/pages'

const toggles = ref<Record<string, boolean>>(
  Object.fromEntries(
    settingSections.flatMap((s) => s.items.filter((i) => i.type === 'toggle').map((i) => [i.label, i.value === 'ON'])),
  ),
)
</script>

<template>
  <header class="flex flex-col gap-6 mb-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <Breadcrumb current="SETTINGS" />
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// MODULE_06</div>
        <h1
          class="text-[clamp(28px,5vw,48px)] max-md:text-[clamp(24px,8vw,36px)] leading-none -tracking-[0.04em] font-display"
        >
          SETTINGS
        </h1>
        <p class="mt-2.5 text-xs text-muted">Configure system preferences and manage access</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <button
          class="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold leading-none transition-colors"
          type="button"
        >
          <Save :size="14" :stroke-width="1.75" aria-hidden="true" />
          <span>SAVE ALL</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Settings grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <fieldset
      v-for="section in settingSections"
      :key="section.title"
      class="p-6 max-md:p-4 m-0 border border-line bg-panel"
    >
      <legend class="text-[10px] tracking-wide font-semibold text-accent mb-5 p-0">// {{ section.title }}</legend>
      <div class="flex flex-col">
        <div
          v-for="item in section.items"
          :key="item.label"
          class="flex items-center justify-between gap-4 py-3.5 border-b border-line-soft last:border-b-0"
        >
          <label class="text-[10px] font-semibold text-muted cursor-pointer" :for="`setting-${item.label}`">
            {{ item.label }}
          </label>
          <button
            v-if="item.type === 'toggle'"
            :id="`setting-${item.label}`"
            type="button"
            class="p-0 border-0 bg-transparent min-h-touch flex items-center cursor-pointer"
            role="switch"
            :aria-checked="toggles[item.label]"
            @click="toggles[item.label] = !toggles[item.label]"
          >
            <span class="toggle-track" :class="{ 'toggle-track--on': toggles[item.label] }">
              <span class="toggle-thumb"></span>
            </span>
          </button>
          <select
            v-else-if="item.type === 'select'"
            :id="`setting-${item.label}`"
            class="text-[11px] text-txt py-1.5 px-2.5 border border-line bg-panel-2 cursor-pointer"
            :value="item.value"
          >
            <option v-for="opt in (item.options ?? [item.value])" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <input
            v-else
            :id="`setting-${item.label}`"
            type="text"
            class="text-[11px] text-txt bg-transparent border border-line py-1.5 px-2.5 text-right max-w-[160px]"
            :value="item.value"
            readonly
          />
        </div>
      </div>
    </fieldset>
  </div>

  <!-- API Keys table -->
  <section class="mt-8" aria-labelledby="apikeys-heading">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
      <div>
        <div class="text-[10px] tracking-wide font-semibold text-accent">// API_KEYS</div>
        <h2 id="apikeys-heading" class="mt-1.5 text-lg font-semibold font-display">ACCESS TOKENS</h2>
      </div>
      <button
        class="inline-flex items-center gap-2 px-3 py-2 border border-accent bg-accent text-[#02150d] font-bold text-[10px] leading-none transition-colors"
        type="button"
      >
        <Key :size="12" :stroke-width="1.75" aria-hidden="true" />
        <span>GENERATE KEY</span>
      </button>
    </div>
    <div class="overflow-x-auto border border-line bg-panel">
      <table class="w-full border-collapse text-[11px] whitespace-nowrap" aria-label="API access tokens">
        <thead>
          <tr>
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
              KEY
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              CREATED
            </th>
            <th
              class="sticky top-0 p-3.5 text-left text-[10px] font-semibold text-muted bg-panel border-b border-line"
              scope="col"
            >
              LAST_USED
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
          <tr v-for="k in apiKeys" :key="k.name">
            <td class="p-3.5 border-b border-line">{{ k.name }}</td>
            <td class="p-3.5 border-b border-line text-muted text-[10px]">
              <code>{{ k.key }}</code>
            </td>
            <td class="p-3.5 border-b border-line text-muted">
              <time :datetime="k.created">{{ k.created }}</time>
            </td>
            <td class="p-3.5 border-b border-line text-muted">{{ k.lastUsed }}</td>
            <td class="p-3.5 border-b border-line">
              <span class="text-[9px] uppercase" :class="k.status === 'active' ? 'text-accent' : 'text-muted'">
                [{{ k.status.toUpperCase() }}]
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
