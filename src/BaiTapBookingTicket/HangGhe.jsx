import React, { Component } from 'react'
import { connect, Connect } from 'react-redux';
import { datGheAction } from '../redux/actions/BaiTapDatVeAction';

class HangGhe extends Component {
    renderGhe = () => {
        let { hangGhe } = this.props;
        return hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = "";
            let disabled = false;
            {/**Trạng Thái ghế đã bị người khác đặt */ }
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }
            //Xét trạng thái chưa đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
                (gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }


            return <button onClick={() => {
                this.props.datGhe(ghe)
            }}
                disabled={disabled}
                className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
                key={index}>
                {ghe.soGhe}
            </button>
        })

    }

    renderSoHang = () => {
        let { hangGhe } = this.props;

        return hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'
                style={{ fontSize: 18, marginLeft: 26 }} key={index}>
                {hang.soGhe}
            </button>
        })


    }
    renderHangGhe = () => {
        let { hangGhe, soHangGhe } = this.props;
        if (soHangGhe === 0) {
            return <div className='     '>
                {hangGhe.hang} {this.renderSoHang()}

            </div>
        } else {
            return <div>
                {hangGhe.hang} {this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div>
                <div className='text-start ms-5 mt-1'
                    style={{ fontSize: 20, color: "yellow" }}>
                    {this.renderHangGhe()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);