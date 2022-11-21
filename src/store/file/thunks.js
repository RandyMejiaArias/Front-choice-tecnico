import { choiceTecApi } from "../../api/choiceTecApi";
import { setFiles, startLoadingFiles } from "./fileSlice"

export const getFiles = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingFiles());

    const { data } = await choiceTecApi.get(
      '/files/data'
    );
    console.log(data);
    dispatch(setFiles({ files: data }));
  }
}