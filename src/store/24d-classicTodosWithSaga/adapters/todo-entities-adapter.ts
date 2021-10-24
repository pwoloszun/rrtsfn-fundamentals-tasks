import { createEntityAdapter, EntityState, Update } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export const todoEntitiesAdapter = createEntityAdapter<Todo>();

export type TodoEntityState = EntityState<Todo>;

export type TodoUpdate = Update<Todo>;

export type TodoParams = Omit<Todo, 'id'>;
