import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoActionCreator } from 'store/ducks/todos.duck';
import { TodoModel } from 'domain/models/todo-model';
import { Container } from './styles';

type Props = {
  todo: TodoModel;
};

const Todo: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteTodoActionCreator({ id: todo.id }));
  };

  return (
    <Container>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleDelete}>Deletar</button>
    </Container>
  );
};

export default Todo;
