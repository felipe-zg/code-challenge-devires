import faker from 'faker';
import { TodoModel } from 'domain/models/todo-model';

export const mockTodoListModel = (): TodoModel[] => [
  {
    id: faker.random.number(),
    title: faker.random.words(3),
    description: faker.random.words(8),
  },
  {
    id: faker.random.number(),
    title: faker.random.words(3),
    description: faker.random.words(8),
  },
];
