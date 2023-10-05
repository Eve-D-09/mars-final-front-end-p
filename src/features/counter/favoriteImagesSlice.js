import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteImages: JSON.parse(localStorage.getItem("favoriteImages")) || [],
};

export const favoriteImagesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
         setFavoriteImages: (state, action) => {
            state.favoriteImages.push(action.payload);
            localStorage.setItem("favoriteImages",JSON.stringify(state.favoriteImages));
        },

        setTotalLikes: (state, action) => {
            state.totalLikes = action.payload;
            localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
        },

        addLikes: (state, action) => {
            const index = state.favoriteImages.findIndex((image) => {
                return image.id === action.payload;
            });
            state.favoriteImages[index].liked = !state.favoriteImages[index].liked;
            state.favoriteImages[index].totalLikes += 1;
            localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
        },
        removeFavorite: (state, action) => {
            const indexOf = state.favoriteImages.findIndex((image) => {
                return image.id === action.payload;
            });
            state.favoriteImages.splice(indexOf, 1);
            localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
        }
    }
});

export const { setFavoriteImages, setTotalLikes, addlikes, removeFavorite } = favoriteImagesSlice.actions;

export const { selectFavoriteImages } = (state) => state.favorites.favoriteImages;

export default favoriteImagesSlice.reducer;