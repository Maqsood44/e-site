import { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartGlobalContext } from '../Context/Cart/Context'
import { MdDeleteForever } from "react-icons/md"
import { FaShoppingCart } from 'react-icons/fa';


function Cart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { state, dispatch } = useContext(CartGlobalContext)



    const deletCartItem = (item) => {
        dispatch({
            type: "REMOVE_CART_ITEM",
            payload: item.id

        })

    }

    return (
        <>


            <button type="button" className="btn btn-dark mx-4 position-relative" onClick={handleShow}>
                <FaShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cart.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>


            <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {
                        state.cart.map((val, key) =>
                            <div className="card my-4" key={key}>
                                <div className="card-body d-flex">
                                    <img src={val.image} className='mx-2' style={{ width: "100px", height: "100px" }} alt="" />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            {val.title} - {val.price}$  <span className="badge bg-secondary">{val.count}</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark text-white " onClick={() => deletCartItem(val)}><MdDeleteForever /></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;