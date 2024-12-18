<script setup lang="ts">
import { DraggableTree, useDraggableTree, OperateBar } from "./components";

const tree = useDraggableTree();
</script>

<template>
  <div class="p-3">
    <header class="mb-3">
      <OperateBar></OperateBar>
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
