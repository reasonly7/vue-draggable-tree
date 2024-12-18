<script lang="ts" setup>
import { TreeNode } from "./tree-node";
import type { NodeType } from ".";
import { CodeIcon } from "./code-icon";

type NodeId = NodeType["id"];

defineProps<{
  tree: NodeType;
  selectedId?: NodeId;
}>();

const emits = defineEmits<{
  expand: [id: NodeId];
  collapse: [id: NodeId];
}>();
</script>

<template>
  <div class="text-sm">
    <TreeNode :node="tree">
      <template #="{ node, hasChildren }">
        <!-- 有 children 时显示展开/收起按钮 -->
        <template v-if="hasChildren">
          <!-- 展开按钮 -->
          <button
            class="p-1 rounded-sm hover:bg-slate-200"
            v-if="node.collapse"
            @click="emits('expand', node.id)"
          >
            <CodeIcon icon="diff-added"></CodeIcon>
          </button>

          <!-- 收起按钮 -->
          <button class="p-1 rounded-sm hover:bg-slate-200">
            <CodeIcon icon="diff-removed"></CodeIcon>
          </button>
        </template>

        <!-- 无 children 时展示指示按钮 -->
        <button
          v-else
          class="w-5 h-5 pointer-events-none"
        ></button>

        <button
          class="rounded-sm hover:bg-slate-200 px-1 py-0.5"
          :class="{ 'bg-black text-white': selectedId === node.id }"
        >
          {{ node.name }}
        </button>
      </template>
    </TreeNode>
  </div>
</template>
