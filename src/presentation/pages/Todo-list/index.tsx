import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, selectTodos, getTodos, addTodo } from 'store/ducks/todos.duck';
import { Load, Todo, Input, Button } from 'presentation/components';

import emptyList from '../../assets/images/empty-list.svg';
import sadFace from '../../assets/images/sad-face.svg';

import * as S from './styles';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectTodos) as State;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title.length || !description.length) return;
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
  };

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === 'new-todo-title') {
      setTitle(e.target.value);
      return;
    }
    setDescription(e.target.value);
  };

  return (
    <div>
      <S.NewTodo>
        <S.Form onSubmit={handleCreateNewTodo}>
          <S.Label htmlFor="new-todo-title">Titulo:</S.Label>
          <S.InputWrapper>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-title"
              value={title}
            />
          </S.InputWrapper>
          <S.Label htmlFor="new-todo-description">descrição:</S.Label>
          <S.InputWrapper>
            <Input
              onChange={handleNewInputChange}
              id="new-todo-description"
              value={description}
            />
          </S.InputWrapper>
          <Button bgColor="#ff0" color="#333" type="submit">
            Criar
          </Button>
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
        {!list.todos.length && (
          <>
            <S.Image src={emptyList} />
            <strong>Nada por aqui ainda!</strong>
          </>
        )}
        {list.error && (
          <>
            <S.Image src={sadFace} />
            <strong>Algo deu errado! Por favor, tente de novo.</strong>
          </>
        )}
      </S.Body>
    </div>
  );
};

export default TodoList;
