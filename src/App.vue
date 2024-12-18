<script setup lang="ts">
import { DraggableTree, useDraggableTree } from "./components/draggable-tree";

const tree = useDraggableTree();
</script>

<template>
  <div class="p-3">
    <DraggableTree
      :tree="tree.data"
      @expand="tree.expand"
      @collapse="tree.collapse"
    ></DraggableTree>
  </div>
</template>
