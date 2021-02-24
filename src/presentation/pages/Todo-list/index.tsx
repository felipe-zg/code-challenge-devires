import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadTodoList } from 'domain/use-cases/load-todo-list';
import { Load, Todo, Input, Button } from 'presentation/components';

import { selectTodos, createTodoActionCreator } from 'store/ducks/todos.duck';

import * as S from './styles';

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
      <S.NewTodo>
        <S.Form onSubmit={handleCreateNewTodo}>
          <label htmlFor="new-todo-title">Titulo:</label>
          <div>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-title"
              value={newTodoTitle}
            />
          </div>
          <label htmlFor="new-todo-description">descrição:</label>
          <div>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-description"
              value={newTodoDescription}
            />
          </div>
          <Button type="submit">Criar</Button>
        </S.Form>
      </S.NewTodo>
      <S.Body>
        <S.Heading2>Tarefas</S.Heading2>
        <S.List>
          {todos?.length ? (
            todos.map((item) => <Todo key={item.id} todo={item} />)
          ) : (
            <></>
          )}
        </S.List>
        {!todos.length && <Load />}
      </S.Body>
    </div>
  );
};

export default TodoList;
