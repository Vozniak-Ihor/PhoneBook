import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  favorite: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    deleteContactById: (state, action) => {
      const idToDelete = action.payload;
      state.items = state.items.filter(({ id }) => id !== idToDelete);
    },
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(item => item._id !== action.payload._id);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        handleFulfilled(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        handleFulfilled(state);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        const dd = state.items.filter(item => item._id !== payload);
        console.log(dd);
        state.items = dd;
        handleFulfilled(state);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const { deleteContactById, addFavorite, removeFavorite } =
  contactSlice.actions;
