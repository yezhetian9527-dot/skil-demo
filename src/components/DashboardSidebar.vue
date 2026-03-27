<script setup lang="ts">
import { Activity, Box, FileText, QrCode, Settings, Users, X, Zap } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  items: string[]
  systemStats: [string, string][]
  open?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', v: boolean): void
}>()

const router = useRouter()
const route = useRoute()

const NAV_ICONS: Record<string, typeof QrCode> = {
  OVERVIEW: QrCode,
  ANALYTICS: Activity,
  CUSTOMERS: Users,
  PRODUCTS: Box,
  REPORTS: FileText,
  SETTINGS: Settings,
}

const NAV_ROUTES: Record<string, string> = {
  OVERVIEW: '/',
  ANALYTICS: '/analytics',
  CUSTOMERS: '/customers',
  PRODUCTS: '/products',
  REPORTS: '/reports',
  SETTINGS: '/settings',
}

const navIcon = (item: string) => NAV_ICONS[item] ?? QrCode

const isActive = (item: string) => {
  const target = NAV_ROUTES[item] ?? '/'
  if (target === '/') return route.path === '/'
  return route.path.startsWith(target)
}

const navigate = (item: string) => {
  router.push(NAV_ROUTES[item] ?? '/')
  emit('update:open', false)
}
</script>

<template>
  <!-- Overlay -->
  <div
    v-if="open"
    class="hidden max-lg:block fixed inset-0 z-overlay bg-black/60 backdrop-blur-sm"
    @click="emit('update:open', false)"
  ></div>

  <!-- Sidebar -->
  <aside
    class="flex flex-col justify-between py-6 px-5 border-r border-line bg-[#090909] overflow-y-auto max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bottom-0 max-lg:w-[min(280px,85vw)] max-lg:z-drawer max-lg:border-r max-lg:border-line max-lg:-translate-x-full max-lg:transition-transform max-lg:duration-300 max-lg:ease-[cubic-bezier(0.4,0,0.2,1)] max-lg:will-change-transform"
    :class="{ 'max-lg:translate-x-0': open }"
    aria-label="Main navigation"
  >
    <div class="flex flex-col gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-3 px-5">
        <div class="grid place-items-center w-8 h-8 shrink-0 bg-accent text-bg text-base font-bold" aria-hidden="true">
          A
        </div>
        <strong class="text-txt text-[13px] tracking-widest">ACME</strong>
        <button
          class="hidden max-lg:flex ml-auto p-1 border-0 bg-transparent text-muted"
          aria-label="Close menu"
          @click="emit('update:open', false)"
        >
          <X :size="18" :stroke-width="1.75" />
        </button>
      </div>

      <!-- System status -->
      <div class="-mx-5 px-5 py-5 border border-line bg-panel border-l-0">
        <div class="text-[10px] tracking-wide font-semibold text-accent mb-3">// SYSTEM STATUS</div>
        <dl class="flex flex-col gap-2.5 m-0">
          <div
            v-for="([label, value], i) in props.systemStats"
            :key="label"
            class="flex items-center justify-between pb-2 text-muted text-[11px]"
            :class="{ 'border-b border-line-soft': i < props.systemStats.length - 1 }"
          >
            <dt>{{ label }}</dt>
            <dd :class="i === 0 ? 'text-accent' : 'text-txt'" class="m-0 text-[11px] font-bold">{{ value }}</dd>
          </div>
        </dl>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-0.5" aria-label="Dashboard navigation">
        <a
          v-for="item in props.items"
          :key="item"
          :href="NAV_ROUTES[item] ?? '/'"
          class="flex items-center gap-3 w-full -ml-5 px-5 py-3 min-h-touch border-0 border-l-2 border-transparent bg-transparent text-left text-muted no-underline transition-colors"
          :class="
            isActive(item)
              ? 'bg-accent/[0.06] border-l-accent shadow-[inset_2px_0_0_theme(colors.accent)] text-txt font-semibold'
              : ''
          "
          :aria-current="isActive(item) ? 'page' : undefined"
          @click.prevent="navigate(item)"
        >
          <component
            :is="navIcon(item)"
            class="text-current"
            :class="isActive(item) ? 'text-accent' : ''"
            :size="16"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          <span>{{ item }}</span>
        </a>
      </nav>
    </div>

    <!-- Bottom -->
    <footer class="flex flex-col gap-6">
      <div class="px-5">
        <div class="p-4 border border-accent/25 bg-panel">
          <div class="flex items-center gap-2 text-accent text-[11px] font-semibold">
            <Zap :size="14" :stroke-width="1.75" aria-hidden="true" />
            <span>UPGRADE_PRO</span>
          </div>
          <p class="my-3 text-[10px] leading-relaxed text-muted">Unlock advanced modules and system controls.</p>
          <button
            class="w-full py-2.5 min-h-touch border border-accent bg-accent text-[#02150d] font-bold transition-colors"
          >
            ACTIVATE
          </button>
        </div>
      </div>

      <div class="flex items-center gap-3 px-5 pt-4 border-t border-line">
        <div
          class="grid place-items-center w-9 h-9 shrink-0 border border-[#3f3f3f] bg-[#1a1a1a] text-accent text-[10px] font-semibold"
          aria-hidden="true"
        >
          MR
        </div>
        <div>
          <div class="text-xs">M.REYNOLDS</div>
          <div class="text-[10px] tracking-wide text-muted">ADMIN::L3</div>
        </div>
      </div>
    </footer>
  </aside>
</template>
