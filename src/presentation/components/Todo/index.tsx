import React, { useCallback } from 'react';
import { TodoModel } from 'domain/models/todo-model';
import { removeTodo } from 'store/ducks/todos.duck';

import * as S from './styles';
import { Button } from 'presentation/components';
import { useDispatch } from 'react-redux';

type Props = {
  todo: TodoModel;
};

const Todo: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <S.Container>
      <div>
        <strong>{todo.title}</strong>
        <p>{todo.description}</p>
      </div>
      <Button
        bgColor="#ff2400"
        color="#fff"
        type="button"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Deletar
      </Button>
    </S.Container>
  );
};

export default Todo;
