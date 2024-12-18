import type { ActionItem } from "@/components";
import { computed, reactive } from "vue";

export type Action =
  | "add"
  | "add-inner"
  | "remove"
  | "rename"
  | "edit"
  | "move-up"
  | "move-down"
  | "move-top"
  | "move-bottom"
  | "cut"
  | "paste"
  | "undo"
  | "redo"
  | "save";

export const useOperateAction = () => {
  const actions = computed(() => {
    const list: ActionItem<Action>[] = [
      { key: "add", icon: "add", disabled: true },
      { key: "add-inner", icon: "diff-added", disabled: true },
      { key: "remove", icon: "trash", disabled: true },
      { key: "rename", icon: "symbol-parameter", disabled: true },
      { key: "edit", icon: "edit", disabled: true },
      { key: "move-up", icon: "arrow-up", disabled: true },
      { key: "move-down", icon: "arrow-down", disabled: true },
      { key: "move-top", icon: "fold-up", disabled: true },
      { key: "move-bottom", icon: "fold-down", disabled: true },
      { key: "cut", icon: "remote", disabled: true },
      { key: "paste", icon: "copy", disabled: true },
      { key: "undo", icon: "discard", disabled: true },
      { key: "redo", icon: "redo", disabled: true },
      { key: "save", icon: "save", disabled: true },
    ];
    return list;
  });

  const execute = (key: Action) => {
    console.log(key);
  };

  return reactive({
    actions,
    execute,
  });
};
