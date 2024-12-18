<script lang="ts" setup>
import { TreeNode } from "./tree-node";
import type { NodeType } from ".";

defineProps<{ tree: NodeType }>();
</script>

<template>
  <div class="text-sm">
    <TreeNode></TreeNode>
  </div>
</template>
