import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: "A1", gia: 1000 }
    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);

            if (index !== -1) {
                //Ghế đang đặt đã có trong mảng khi người dùng click => remove đi
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhật lại state =. render lại giao diện
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state };
        }

        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);

            if (index !== -1) {
                //Ghế đang đặt đã có trong mảng khi người dùng click => remove đi
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state };
        }
        default: return { ...state }
    }
}

export default BaiTapDatVeReducer;