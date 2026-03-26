<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import DashboardSidebar from '../components/DashboardSidebar.vue'
import { sidebarSections } from '../data/dashboard'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="grid grid-cols-[260px_minmax(0,1fr)] max-lg:grid-cols-1 min-h-screen">
    <!-- Mobile menu button -->
    <button
      class="hidden max-lg:flex fixed top-3 left-3 z-menu w-11 h-11 items-center justify-center border border-line bg-panel text-txt"
      aria-label="Open menu"
      @click="sidebarOpen = true"
    >
      <Menu :size="20" :stroke-width="1.75" />
    </button>

    <DashboardSidebar v-model:open="sidebarOpen" :items="sidebarSections.nav" :system-stats="sidebarSections.system" />

    <main
      class="p-8 px-10 max-lg:pt-[68px] max-md:px-4 max-md:pt-[68px] max-md:pb-8 max-[480px]:px-3 max-[480px]:pt-16 max-[480px]:pb-6"
    >
      <RouterView />
    </main>
  </div>
</template>
