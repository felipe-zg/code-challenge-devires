import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TodoModel } from 'domain/models/todo-model';
import { makeRemoteLoadTodoList } from 'main/factories/use-cases/load-todo-list/remote-load-todo-list-factory';
import { makeRemoteAddTodo } from 'main/factories/use-cases/add-todo/remote-add-todo-factory';
import { AddTodoModel } from 'domain/models/add-todo-model';

export interface State {
  loading: boolean;
  error: string | null;
  todos: TodoModel[];
}

const todosInitialState: State = {
  loading: false,
  error: null,
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    setLoading: (state: State, { payload }: PayloadAction<boolean>) => ({
      ...state,
      loading: payload,
    }),
    setTodos: (state: State, { payload }: PayloadAction<TodoModel[]>) => ({
      ...state,
      todos: payload,
    }),
    setError: (state: State, { payload }: PayloadAction<string | null>) => ({
      ...state,
      error: payload,
    }),
  },
});

export const { setLoading, setError, setTodos } = todosSlice.actions;

export default todosSlice.reducer;

const loadList = (dispatch: Dispatch) => {
  makeRemoteLoadTodoList()
    .loadAll()
    .then((todos) => {
      dispatch(setError(null));
      dispatch(setTodos(todos as TodoModel[]));
      dispatch(setLoading(false));
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};

export const addTodo = (todo: AddTodoModel) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  getState();
  dispatch(setLoading(true));
  makeRemoteAddTodo()
    .add(todo)
    .then(() => {
      loadList(dispatch);
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};

export const getTodos = () => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  getState();
  dispatch(setLoading(true));
  loadList(dispatch);
};

export const selectTodos = (state: RootState) => state.todos;
