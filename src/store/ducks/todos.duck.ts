import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TodoModel } from 'domain/models/todo-model';
import { generateId } from 'store/utils/id-generator';

const todosInitialState: TodoModel[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    create: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{ id: number; title: string; description: string }>
      ) => {
        state.push(payload);
      },
      prepare: ({ title, description }: { title: string; description: string }) => ({
        payload: {
          id: generateId(), // GENERATE RANDOM ID HERE
          title,
          description,
        },
      }),
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {
  create: createTodoActionCreator,
  remove: deleteTodoActionCreator,
} = todosSlice.actions;

export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.todos;
