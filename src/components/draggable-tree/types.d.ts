export interface NodeType<ValueType = string> {
  id: string | number;
  name: string;
  value: ValueType;
  collapse?: boolean; // 是否收起
  children?: NodeType<ValueType>[];
}
