<script setup lang="ts">
defineProps<{
  current: string
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 list-none m-0 p-0">
      <li class="text-[10px] text-muted">SYS</li>
      <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
      <li class="text-[10px] text-muted">DASH</li>
      <li class="text-[10px] text-[#2a2a2a]" aria-hidden="true">&gt;</li>
      <li class="text-[10px] text-accent font-semibold" aria-current="page">{{ current }}</li>
    </ol>
  </nav>
</template>
