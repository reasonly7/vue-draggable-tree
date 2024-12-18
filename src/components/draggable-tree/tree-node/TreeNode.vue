<script lang="ts" setup generic="T extends { children?: T[] }">
import { computed, useSlots } from "vue";

const props = withDefaults(
  defineProps<{
    level?: number;
    offset?: number;
    node: T;
  }>(),
  {
    level: 0,
    offset: 1.25,
  },
);

const offsetStyle = computed(() => {
  const { level, offset } = props;
  return level <= 0 ? {} : { paddingLeft: `${level * offset}rem` };
});
const slots = useSlots();
const SlotComponent = computed(() => slots?.default);
</script>

<template>
  <div
    class="flex items-center gap-1"
    :style="offsetStyle"
    v-bind="$attrs"
  >
    <slot
      :node="node"
      :level="level"
      :offset="offset"
    ></slot>
  </div>

  <TreeNode
    v-for="node in node.children"
    :node="node"
    :level="level + 1"
    v-bind="$attrs"
  >
    <template #="{ node, level, offset }">
      <SlotComponent
        :node="node"
        :level="level"
        :offset="offset"
      ></SlotComponent>
    </template>
  </TreeNode>
</template>
