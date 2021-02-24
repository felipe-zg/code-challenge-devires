export interface RemoveTodo {
  remove: () => Promise<Record<string, unknown>>;
}
