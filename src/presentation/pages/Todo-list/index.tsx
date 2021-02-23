import React, { useEffect, useState } from 'react';

import { LoadTodoList } from 'domain/use-cases/load-todo-list';
import { TodoModel } from 'domain/models/todo-model';
import { Load, Todo } from 'presentation/components';

type Props = {
  loadTodoList: LoadTodoList;
};

const TodoList: React.FC<Props> = ({ loadTodoList }: Props) => {
  const [list, setList] = useState({
    todos: [] as TodoModel[] | undefined,
  });

  useEffect(() => {
    loadTodoList.loadAll().then((todos) => setList({ todos }));
  }, [loadTodoList]);

  return (
    <div>
      <h2>Todolist</h2>
      {list.todos?.length ? (
        list.todos.map((item) => <Todo key={item.id} todo={item} />)
      ) : (
        <Load />
      )}
    </div>
  );
};

export default TodoList;
