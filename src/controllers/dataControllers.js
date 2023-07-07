import axios from "axios";
import { setPicOfDay, setRawImages } from "../features/counter/planetSlice";
import { store } from "../app/store";

export const getData = async (type, verb, url) => {
  try {
    const { data } = await axios[verb](url);
    console.log(type, verb, url, data);
    if (type === `rawImages`) {
      store.dispatch(setRawImages(data.photos));
    } else if (type === `picOfDay`) {
      store.dispatch(setPicOfDay(data));
    }
  } catch (error) {
    console.log(error);
  }
};


