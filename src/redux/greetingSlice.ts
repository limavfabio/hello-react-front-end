import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/messages';

const initialState = {
  value: '',
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data.greeting;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSuceed: true,
        value: action.payload,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default greetingSlice.reducer;
