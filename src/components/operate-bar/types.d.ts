export interface ActionItem<T extends string> {
  key: T;
  icon: string;
  disabled: boolean;
}
