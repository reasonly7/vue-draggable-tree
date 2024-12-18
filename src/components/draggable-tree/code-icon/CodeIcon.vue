<script lang="ts" setup>
import codiconSvg from "@vscode/codicons/dist/codicon.svg";
import { computed } from "vue";

const props = defineProps<{
  icon: string;
}>();

const href = computed(() => `${codiconSvg}#${props.icon}`);
</script>

<template>
  <svg class="w-4 h-4">
    <use :xlink:href="href"></use>
  </svg>
</template>
