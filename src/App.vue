<script setup lang="ts">
import { DraggableTree, useDraggableTree, OperateBar } from "./components";
import { useOperateAction } from "./composables";

const tree = useDraggableTree();
const operate = useOperateAction();
</script>

<template>
  <div class="p-3">
    <header class="mb-3">
      <OperateBar
        :actions="operate.actions"
        @trigger="operate.execute"
      ></OperateBar>
    </header>

    <DraggableTree
      :tree="tree.data"
      :selectedId="tree.selectedId"
      @expand="tree.expand"
      @collapse="tree.collapse"
      @select="tree.select"
    ></DraggableTree>
  </div>
</template>
