import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  favoriteImages: JSON.parse(localStorage.getItem("favoriteImages")) || [],
};

export const rawImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setRawImages: (state, action) => {
      state.rawImages = action.payload;
    },
    toggleFavoriteImage: (state, action) => {
      console.log(action);
      const indexOf = state.rawImages.findIndex((image, index) => {
        return image.id === action.payload;
      });
      state.rawImages[indexOf].liked = !state.rawImages[indexOf].liked;
    },
    setFavoriteImages: (state, action) => {
      state.favoriteImages.push(action.payload);
      localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
      // ----------------------------------------------------------------------------
    },
    removeFavorite: (state, action) => {
      console.log(action);
      const indexOf = state.favoriteImages.findIndex((image) => {
        return image.id === action.payload;
      });
      state.favoriteImages.splice(indexOf, 1);
      localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
    },

    // --------------------------------------------------------------------------------
    // working 02/10/2023
    setTotalLikes: ( state, action ) => {
      state.totalLikes = action.payload;
      localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
    },

    addLikes: (state, action) => {
      const index = state.favoriteImages.findIndex((image) => {
        return image.id === action.payload;
      });
      state.favoriteImages[index].liked = !state.favoriteImages[index].liked;
      // --------------------------------------------------------------------
      state.favoriteImages[index].totalLikes += 1;
      localStorage.setItem("favoriteImages", JSON.stringify(state.favoriteImages));
    },

    
    
  },
});

export const {
  setRawImages,
  toggleFavoriteImage,
  setFavoriteImages,
  removeFavorite,
  addLikes,
  setTotalLikes,
} = rawImagesSlice.actions;

export const selectRawImages = (state) => state.images.rawImages;
export const selectFavoriteImages = (state) => state.images.favoriteImages;








export default rawImagesSlice.reducer;

// localStorage links:
// https://stackoverflow.com/questions/73130905/why-local-storage-does-not-work-with-useeffect
// https://stackoverflow.com/questions/70856630/rendering-items-array-in-localstorage-to-unordered-list
// https://dev-academy.com/react-localstorage/
// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
