import axios from "axios";
import { setPicOfDay } from "../features/counter/planetSlice";
import { setRawImages } from "../features/counter/rawImagesSlice";
import { store } from "../app/store";
import { setToastMessage } from "../features/counter/planetSlice";
import { setLatestPhotos } from "../features/counter/latestPhotosSlice";

export const getData = async (type, verb, url) => {
  try {
    const { data } = await axios[verb](url);
    console.log(type, verb, url, data);
    // if (type === `rawImages`) {

    //   if ( data.photos.length > 0) {
    //     store.dispatch(setRawImages(data.photos))
    //   } else {
    //     store.dispatch(setToastMessage("We are sorry, Rover was on holidays today"));
    //   }
    // } else if (type === `picOfDay`) {
    //   store.dispatch(setPicOfDay(data));
    // } else if ( type === `latestPhotos`) {
    //    store.dispatch(setLatestPhotos(data));
    // }
    switch (type) {
      case "rawImages":
        if (data.photos.length > 0) {
          store.dispatch(setRawImages(data.photos));
        } else {
          store.dispatch(
            setToastMessage("We are sorry, Rover was on holidays today")
          );
        }
        break;
      case "picOfDay":
        store.dispatch(setPicOfDay(data));
        break;
      case "latestPhotos":
        store.dispatch(setLatestPhotos(data));
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
