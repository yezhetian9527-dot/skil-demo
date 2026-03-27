<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
router.replace('/')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <div class="text-[10px] tracking-wide font-semibold text-accent">// ERROR_404</div>
    <h1 class="text-[clamp(28px,5vw,48px)] leading-none -tracking-[0.04em] font-display">PAGE NOT FOUND</h1>
    <p class="text-xs text-muted">Redirecting to overview...</p>
  </div>
</template>
