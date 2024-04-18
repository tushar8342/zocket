import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    adBgColor: "#0369A1",
    adImage: "",
    adText: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
    adCTA: "Shop Now",
};

export const adSlice = createSlice({
    name: "ad",
    initialState,
    reducers: {
        adBgColor: (state, action) => {
            state.adBgColor = action.payload;
        },
        adImage: (state, action) => {
            state.adImage = action.payload;
        },
        adText: (state, action) => {
            state.adText = action.payload
        },
        adCTA: (state, action) => {
            state.adCTA = action.payload;
        },
    },
});

export const { adBgColor, adImage, adText, adCTA } = adSlice.actions;

export const store = configureStore({
    reducer: {
        ad: adSlice.reducer
    }
});
