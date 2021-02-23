import React from 'react';
import { TodoList } from '../../../../presentation/pages';
import { makeRemoteLoadTodoList } from 'main/factories/use-cases/load-todo-list/remote-load-todo-list-factory';

export const makeTodoList: React.FC = () => {
  return <TodoList loadTodoList={makeRemoteLoadTodoList()} />;
};
