import React, { Component } from 'react'
import { connect } from 'react-redux';
import { huyGheAction } from "../redux/actions/BaiTapDatVeAction";

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon mb-3'></button>
                    <span className='text-light ms-4' style={{ fontSize: '18px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon mb-3'></button>
                    <span className='text-light ms-4' style={{ fontSize: '18px' }}>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button>
                    <span className='text-light ms-4' style={{ fontSize: '18px' }}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table table-bordered" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: 18 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button className='btn btn-danger'
                                        onClick={() => {
                                            this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                        }}>x</button></td>
                                </tr>
                            })
                            }
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce(
                                    (tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    }, 0).toLocaleString()}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>

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

export default connect(mapStateToProps)(ThongTinDatGhe);