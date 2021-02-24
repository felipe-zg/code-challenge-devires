import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadTodoList } from 'domain/use-cases/load-todo-list';
import { Load, Todo } from 'presentation/components';

import { selectTodos, createTodoActionCreator } from 'store/ducks/todos.duck';

type Props = {
  loadTodoList: LoadTodoList;
};

const TodoList: React.FC<Props> = ({ loadTodoList }: Props) => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');

  useEffect(() => {
    loadTodoList.loadAll();
  }, [loadTodoList]);

  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newTodoTitle.length || !newTodoDescription.length) return;

    dispatch(
      createTodoActionCreator({
        title: newTodoTitle,
        description: newTodoDescription,
      })
    );
    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === 'new-todo-title') {
      setNewTodoTitle(e.target.value);
      return;
    }
    setNewTodoDescription(e.target.value);
  };

  return (
    <div>
      <h2>Todolist</h2>
      {todos?.length ? (
        todos.map((item) => <Todo key={item.id} todo={item} />)
      ) : (
        <Load />
      )}
      <h1>Novo item</h1>
      <form onSubmit={handleCreateNewTodo}>
        <label htmlFor="new-todo-title">Titulo:</label>
        <input
          onChange={handleNewInputChange}
          id="new-todo-title"
          value={newTodoTitle}
        />
        <label htmlFor="new-todo-description">descrição:</label>
        <input
          onChange={handleNewInputChange}
          id="new-todo-description"
          value={newTodoDescription}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default TodoList;
