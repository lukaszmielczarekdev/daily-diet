import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreData, notify } from "./utils";
import * as api from "../api";

const INITIAL_STATE = {
  status: null,
  diaries: [],
};

export const getDiaries = createAsyncThunk("diaries/getDiaries", async () => {
  try {
    const { data } = await api.fetchDiaries();
    return data;
  } catch (error) {
    console.log(error);
    notify(error.response.data.message);
  }
});

export const createDiary = createAsyncThunk(
  "diaries/createDiary",
  async (diary) => {
    try {
      const { data } = await api.createDiary(diary);
      notify("Diary created");
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const updateDiary = createAsyncThunk(
  "diaries/updateDiary",
  async ({ id, diary }) => {
    try {
      const { data } = await api.updateDiary(id, diary);
      notify("Diary updated");
      return data;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

export const deleteDiary = createAsyncThunk(
  "diaries/deleteDiary",
  async (id) => {
    try {
      await api.deleteDiary(id);
      notify("Diary deleted");
      return id;
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  }
);

const slice = createSlice({
  name: "diaries",
  initialState: getStoreData("resources.diaries", INITIAL_STATE),
  reducers: {
    diariesRemoved: (state) => {
      state.diaries = [];
    },
  },
  extraReducers: {
    [getDiaries.pending]: (state) => {
      state.status = "loading";
    },
    [getDiaries.fulfilled]: (state, action) => {
      state.diaries = action.payload;
      state.status = "success";
    },
    [getDiaries.rejected]: (state) => {
      state.status = "failed";
    },
    [createDiary.pending]: (state) => {
      state.status = "loading";
    },
    [createDiary.fulfilled]: (state, action) => {
      state.diaries.push(action.payload);
      state.status = "success";
    },
    [createDiary.rejected]: (state) => {
      state.status = "failed";
    },
    [updateDiary.pending]: (state) => {
      state.status = "loading";
    },
    [updateDiary.fulfilled]: (state, action) => {
      state.diaries = state.diaries.map((diary) =>
        diary._id === action.payload._id ? action.payload : diary
      );
      state.status = "success";
    },
    [updateDiary.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteDiary.pending]: (state) => {
      state.status = "loading";
    },
    [deleteDiary.fulfilled]: (state, action) => {
      state.diaries = state.diaries.filter(
        (diary) => diary._id !== action.payload
      );
      state.status = "success";
    },
    [deleteDiary.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { diariesRemoved } = slice.actions;

export default slice.reducer;
