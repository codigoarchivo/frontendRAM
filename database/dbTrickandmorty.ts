import trickandmortyApi from "@/base/trickandmortyApi";

export const postTrickandmorty = async (page: number) => {
  try {
    const { data } = await trickandmortyApi.post(
      `/rick-and-mortys/?page=${page}`
    );

    return data.data;
  } catch (error) {
    return console.log(error);
  }
};
