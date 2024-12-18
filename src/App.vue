<script setup lang="ts">
import { DraggableTree, type NodeType } from "./components/draggable-tree";

const treeData: NodeType = {
  id: 1,
  name: "知识库",
  value: "",
  children: [
    {
      id: "1-1",
      name: "JavaScript",
      value: "js",
      children: [
        {
          id: "1-1-1",
          name: "DOM",
          value: "dom",
        },
        {
          id: "1-1-2",
          name: "Browser Object Model",
          value: "bom",
        },
        {
          id: "1-1-3",
          name: "ECMAScript",
          value: "ecma",
        },
      ],
    },
    {
      id: "1-2",
      name: "Node",
      value: "node",
    },
    {
      id: "1-3",
      name: "React",
      value: "react",
    },
  ],
};
</script>

<template>
  <div class="p-3">
    <DraggableTree :tree="treeData"></DraggableTree>
  </div>
</template>
