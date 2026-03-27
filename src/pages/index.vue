<script setup lang="ts">
import ActionChip from '../components/ActionChip.vue'
import ActivityList from '../components/ActivityList.vue'
import AlertBanner from '../components/AlertBanner.vue'
import AnalyticsTable from '../components/AnalyticsTable.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import MetricCard from '../components/MetricCard.vue'
import ProductGallery from '../components/ProductGallery.vue'
import RevenueChart from '../components/RevenueChart.vue'
import { activities, analyticsRows, metrics, products, revenue } from '../data/dashboard'
</script>

<template>
  <DashboardHeader title="OVERVIEW" />

  <section class="flex flex-wrap gap-2 mb-8" aria-label="Filters">
    <ActionChip label="FILTER" icon="sliders" />
    <ActionChip label="DATE RANGE" icon="calendar" />
    <ActionChip label="REFRESH" icon="refresh" />
    <ActionChip label="SHARE" icon="share" />
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Key metrics">
    <MetricCard v-for="metric in metrics" :key="metric.label" :metric="metric" />
  </section>

  <RevenueChart :points="revenue" />
  <ActivityList :items="activities" />
  <AlertBanner />
  <AnalyticsTable :rows="analyticsRows" />
  <ProductGallery :items="products" />
</template>
