import type { ActionItem } from "@/components";
import { reactive } from "vue";

export type Action = "add-nextsibling" | "add-previoussibling";

export const useOperateAction = () => {
  const actions: ActionItem<Action>[] = [
    { key: "add-nextsibling", icon: "plus" },
    { key: "add-previoussibling", icon: "plus" },
  ];

  const execute = (key: Action) => {
    console.log(key);
  };

  return reactive({
    actions,
    execute,
  });
};
