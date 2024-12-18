<script lang="ts" setup>
import { TreeNode } from "./tree-node";
import type { NodeType } from ".";
import diffAddedIcon from "./diff-added.svg";

defineProps<{ tree: NodeType }>();
</script>

<template>
  <div class="text-sm">
    <TreeNode :node="tree" class="cursor-pointer hover:bg-zinc-200">
      <template #="{ node }">
        <img class="w-3 h-3" :src="diffAddedIcon" v-if="node.children?.length"/>
        <span>
          {{ node.name }}
        </span>
      </template>
    </TreeNode>
  </div>
</template>
