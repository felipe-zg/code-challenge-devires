import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoActionCreator } from 'store/ducks/todos.duck';
import { TodoModel } from 'domain/models/todo-model';

import * as S from './styles';
import { Button } from 'presentation/components';

type Props = {
  todo: TodoModel;
};

const Todo: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteTodoActionCreator({ id: todo.id }));
  };

  return (
    <S.Container>
      <div>
        <strong>{todo.title}</strong>
        <p>{todo.description}</p>
      </div>
      <Button bgColor="#ff2400" color="#fff" type="button" onClick={handleDelete}>
        Deletar
      </Button>
    </S.Container>
  );
};

export default Todo;
