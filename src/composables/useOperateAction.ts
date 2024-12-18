import type { ActionItem } from "@/components";
import { computed, reactive } from "vue";

export type Action =
  | "add"
  | "add-inner"
  | "remove"
  | "rename"
  | "move-top"
  | "move-down"
  | "cut"
  | "paste";

export const useOperateAction = () => {
  const actions = computed(() => {
    const list: ActionItem<Action>[] = [
      { key: "add", icon: "add", disabled: true },
      { key: "add-inner", icon: "diff-added", disabled: true },
      { key: "remove", icon: "trash", disabled: true },
      { key: "rename", icon: "edit", disabled: true },
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
