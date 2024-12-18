<script lang="ts" setup>
import { TreeNode } from "./tree-node";
import type { NodeType } from ".";
import diffAddedIcon from "./diff-added.svg";
import diffRemovedIcon from "./diff-removed.svg";
import circleFilledIcon from "./circle-filled.svg";

defineProps<{ tree: NodeType }>();

const emits = defineEmits<{
  expand: [id: NodeType["id"]];
  collapse: [id: NodeType["id"]];
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
            <img
              class="w-4 h-4"
              :src="diffAddedIcon"
            />
          </button>

          <!-- 收起按钮 -->
          <button
            class="p-1 rounded-sm hover:bg-slate-200"
            @click="emits('collapse', node.id)"
            v-else
          >
            <img
              class="w-4 h-4"
              :src="diffRemovedIcon"
            />
          </button>
        </template>

        <!-- 无 children 时展示指示按钮 -->
        <button
          v-else
          class="p-1 rounded-sm hover:bg-slate-200"
        >
          <img
            class="w-4 h-4"
            :src="circleFilledIcon"
          />
        </button>

        <span> {{ node.name }} </span>
      </template>
    </TreeNode>
  </div>
</template>
