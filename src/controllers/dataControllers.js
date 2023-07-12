import axios from "axios";
import { setPicOfDay, setRawImages } from "../features/counter/planetSlice";
import { store } from "../app/store";
import { setToastMessage } from "../features/counter/planetSlice";

export const getData = async (type, verb, url) => {
  try {
    const { data } = await axios[verb](url);
    console.log(type, verb, url, data);
    if (type === `rawImages`) {

      if ( data.photos.length > 0) {
        store.dispatch(setRawImages(data.photos))
      } else {
        store.dispatch(setToastMessage("We are sorry, Rover was on vacations this particular day"));
      }
    } else if (type === `picOfDay`) {
      store.dispatch(setPicOfDay(data));
    }
  } catch (error) {
    console.log(error);
  }
};


