<script lang="ts" setup generic="T extends string">
import { OperateBtn } from ".";
import { ActionItem } from "./types";

defineProps<{
  actions: ActionItem<T>[];
}>();

defineEmits<{
  trigger: [key: T];
}>();
</script>

<template>
  <ul class="flex gap-3">
    <li
      class=""
      v-for="action in actions"
    >
      <OperateBtn
        :icon="action.icon"
        @click="$emit('trigger', action.key)"
      ></OperateBtn>
    </li>
  </ul>
</template>
