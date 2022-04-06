import axios from "axios";

export const AddtoWishlist = async (product, user) => {
  try {
    const { data } = await axios.post(
      "api/user/wishlist",
      { product },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Wishlist error", error);
  }
};