export interface NodeType<ValueType = string> {
  id: string | number;
  name: string;
  value: ValueType;
  children?: NodeType<ValueType>[];
}
