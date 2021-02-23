import { TodoModel } from 'domain/models/todo-model';
import React from 'react';
import { Container } from './styles';

type Props = {
  todo: TodoModel;
};

const Todo: React.FC<Props> = ({ todo }: Props) => {
  return (
    <Container>
      <h3>{todo.title}</h3>
      <h3>{todo.description}</h3>
    </Container>
  );
};

export default Todo;
