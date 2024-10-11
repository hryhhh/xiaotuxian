<template>
  <div class="app">
    <layout-fixed/>
    <layout-nav />
    <layout-header />
    <RouterView />
    <!-- :key="$route.fullPath" -->
    
    <layout-footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import { useCategoryStore } from "@/stores/categoryStore";
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>