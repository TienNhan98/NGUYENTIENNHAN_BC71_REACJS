import { dataShoe } from "../DataShoe";
import { ADD_SHOE, CHANGE, DELETE } from "./const";
let initialState = {
  cart: [],
  listShoe: dataShoe,
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOE: {
      let dataShoe = action.payload;
      //   console.log("🚀 ~ shoeReducer ~ shoe:", shoe);
      // tìm sp đã có trong giỏ hàng chưa. findIndex
      let cloneCart = [...state.cart];
      // console.log("🚀 ~ ExShoe ~ cloneCart:", cloneCart);
      let index = cloneCart.findIndex(
        (itemShoe) => itemShoe.id === dataShoe.id
      );
      // findIndex: nếu không tìm thấy => trả về -1 nên
      //trường hợp 1: sp đã có trong giỏ hàng => tăng số lượng => Không push
      if (index !== -1) {
        cloneCart[index].total++;
      } // findIndex: nếu tìm thấy =>
      else {
        // trường hợp 2: sp chưa có trong giỏ hàng => thêm vào giỏ hàng => push
        cloneCart.push({ ...dataShoe, total: 1 });
      }
      // update state => render lại ~~ đã thay thế cho this.setState cũ
      return { ...state, cart: cloneCart };
    }
    case DELETE: {
      let idShoe = action.payload;
      //   console.log("🚀 ~ shoeReducer ~ idShoe:", idShoe);
      let cloneCart = [...state.cart];
      let newCart = cloneCart.filter((shoe) => shoe.id !== idShoe);
      return { ...state, cart: newCart };
    }
    case CHANGE: {
      let { idShoe, option } = action.payload;
      // Tìm vị trí
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((itemShoe) => itemShoe.id === idShoe);
      //object.total + với cái option
      cloneCart[index].total += option;
      if (cloneCart[index].total === 0) {
        alert("Bàn muốn xóa sản phẩm này ra khỏi giỏ hàng ?");
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
