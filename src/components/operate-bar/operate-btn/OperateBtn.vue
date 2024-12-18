<script lang="ts" setup>
import { CodeIcon } from "@/components";

defineProps<{
  icon: string;
}>();
</script>

<template>
  <button
    class="text-base w-8 h-8 border flex items-center justify-center rounded transition-all hover:bg-slate-100 active:bg-slate-200"
  >
    <CodeIcon :icon="icon"></CodeIcon>
  </button>
</template>
