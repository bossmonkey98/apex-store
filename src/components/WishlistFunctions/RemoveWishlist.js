import axios from "axios";

export const RemoveFromWishlist = async (id, user) => {
  try {
    const { data } = await axios.delete(`api/user/wishlist/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("wishlist error", error);
  }
};
