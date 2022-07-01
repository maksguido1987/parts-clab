import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../../shared/api';

export interface ISuggestionItems {
  id: number;
  conditions: string[];
  parentId?: number;
  slug: string;
}

export interface ISuggestions {
  loading: boolean;
  brand: ISuggestionItems[];
  model: ISuggestionItems[];
  generation: ISuggestionItems[];
  modification: ISuggestionItems[];
  category: ISuggestionItems[];
  details: ISuggestionItems[]; // TODO: нужно подумать нужен ли он тут, или сделать отдельно
  vin: ISuggestionItems[]; // TODO: нужно подумать нужен ли он тут, или сделать отдельно
}

export const initialSuggestions: ISuggestions = {
  loading: true,
  brand: [],
  model: [],
  generation: [],
  modification: [],
  category: [],
  details: [],
  vin: [],
};

export enum ESuggestionKeys {
  brand = 'brand',
  model = 'model',
  generation = 'generation',
  modification = 'modification',
  category = 'category',
  detail = 'detail',
  vin = 'vin',
}

type BaseSuggestionsType = Pick<ISuggestions, 'brand' | 'model' | 'category'>;

export const loadBaseSuggestions = createAsyncThunk(
  'suggestion/base',
  async () => {
    const { data } = await api.get<BaseSuggestionsType>('suggestions/base');
    return data;
  }
);
export const loadGenerationSuggestions = createAsyncThunk(
  'suggestion/generations',
  async () => {
    const { data } = await api.get<ISuggestionItems[]>(
      'suggestions/generation'
    );
    return data;
  }
);
export const loadModificationSuggestions = createAsyncThunk(
  'suggestion/modifications',
  async () => {
    const { data } = await api.get<ISuggestionItems[]>(
      'suggestions/modifications'
    );
    return data;
  }
);

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState: initialSuggestions,
  reducers: {
    setLoadingState: (store, { payload }: PayloadAction<boolean>) => {
      store.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBaseSuggestions.fulfilled, (store, { payload }) => {
        store.brand = payload.brand;
        store.model = payload.model;
        store.category = payload.category;
      })
      .addCase(loadGenerationSuggestions.fulfilled, (store, { payload }) => {
        store.generation = payload;
      })
      .addCase(loadModificationSuggestions.fulfilled, (store, { payload }) => {
        store.modification = payload;
      });
  },
});

export const { setLoadingState } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
