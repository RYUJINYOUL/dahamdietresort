import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "다함단식하우스",
  headerImageSrc:
    "/Image/high.jpg",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
