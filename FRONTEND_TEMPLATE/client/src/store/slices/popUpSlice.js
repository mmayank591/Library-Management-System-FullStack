import { createSlice } from "@reduxjs/toolkit"

const popupSlice = createSlice({
    name:"popup",
    initialState: {
        settingPopup: false,
        addBookPopup: false,
        readBookPopup: false,
        recordBookPopup: false,
        returnBookPopup: false,
        addNewAdminPopup: false,
    },
    reducers: {
        toggleSettingPopup(state)
        {
            state.settingPopup=!state.settingPopup;
        },
        toggleAddBookPopup(state)
        {
            state.addBookPopup=!state.addBookPopup;
        },
        toggleReadBookPopup(state)
        {
            state.readBookPopup=!state.readBookPopup;
        },
        toggleRecordBookPopup(state)
        {
            state.recordBookPopup=!state.recordBookPopup;
        },
        toggleAddNewAdminPopup(state)
        {
            state.addNewAdminPopup=!state.addNewAdminPopup;
        },
        toggleReturnBookPopup(state)
        {
            state.returnBookPopup=!state.returnBookPopup;
        },
        closeAllPopup(state)
        {
            state.addBookPopup=false;
            state.readBookPopup=false;
            state.returnBookPopup=false;
            state.addNewAdminPopup=false;
            state.settingPopup=false;
            state.recordBookPopup=false;
        },
    },
});

export const {
    closeAllPopup,
    toggleAddBookPopup,
    toggleAddNewAdminPopup,
    toggleReadBookPopup,
    toggleRecordBookPopup,
    toggleReturnBookPopup,
    toggleSettingPopup,
} = popupSlice.actions;

export default popupSlice.reducer;