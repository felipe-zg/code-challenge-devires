import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, selectTodos, getTodos } from 'store/ducks/todos.duck';
import { Load, Todo, Input, Button } from 'presentation/components';

import * as S from './styles';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectTodos) as State;
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

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
        <S.Form>
          <S.Label htmlFor="new-todo-title">Titulo:</S.Label>
          <S.InputWrapper>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-title"
              value={newTodoTitle}
            />
          </S.InputWrapper>
          <S.Label htmlFor="new-todo-description">descrição:</S.Label>
          <S.InputWrapper>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-description"
              value={newTodoDescription}
            />
          </S.InputWrapper>
          <Button type="submit">Criar</Button>
        </S.Form>
      </S.NewTodo>
      <S.Body>
        <S.Heading2>Tarefas</S.Heading2>
        <S.List>
          {list.todos?.length ? (
            list.todos.map((item) => <Todo key={item.id} todo={item} />)
          ) : (
            <></>
          )}
        </S.List>
        {list.loading && <Load />}
      </S.Body>
    </div>
  );
};

export default TodoList;
