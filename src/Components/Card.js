import react from "react";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    console.log('---------book-------')
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.thumbnail;
                    let amount = 1;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                    {item.shelf_status == 'IN' &&
                                        <img src={thumbnail} alt="" />
                                    }
                                    <div className="bottom">
                                        <h3 className="title">{item.dpp_product_name}</h3>
                                        <p className="amount">{item.dpp_rfid_cd}<span className="in-out">({item.shelf_status})</span></p>

                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>
                        )
                    }

                })
            }

        </>
    )
}
export default Card;