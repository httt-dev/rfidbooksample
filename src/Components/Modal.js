import react from 'react';
const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = 'https://cover.openbd.jp/9784780802047.jpg';
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.dpp_product_name}</h1>
                            <h3>{item.dpp_rfid_cd}</h3>
                            <h4>{item.shelf_status}<span>{item.dpp_isbn}</span></h4><br />
                            <a href={item.dpp_rfid_cd}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.dpp_rfid_cd}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;