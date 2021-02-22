import { TodoModel } from '@/domain/models/todo-model';

export interface LoadTodoList {
  loadAll: () => Promise<TodoModel[]>;
}
