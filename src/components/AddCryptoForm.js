import React from 'react';
function AddCryptoForm(props) {
    const nameRef = React.createRef();
    const priceRef = React.createRef();
    const statusRef = React.createRef();
    const descRef = React.createRef();
    const imageRef = React.createRef();

    const createCrypto = (event) => {
        event.preventDefault();

        const crypto = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value),
            status: statusRef.current.value,
            desc: descRef.current.value,
            image: imageRef.current.value,
        }

        props.addCrypto(crypto);

        // refresh the form
        event.currentTarget.reset();
    }

    return (
        <form className="crypto-edit" onSubmit={createCrypto}>
            <input name="name" ref={nameRef} type="text" placeholder="Name" />
            <input name="price" ref={priceRef} type="text" placeholder="Price" />
            <select name="status" ref={statusRef}>
                <option value="available">Available</option>
                <option value="unavailable">Sold out!</option>
            </select>
            <textarea name="desc" ref={descRef} placeholder="Description" />
            <input name="image" ref={imageRef} type="text" placeholder="Image" />
            <button type="submit">+ Add Crypto</button>
        </form>
    )
}
export default AddCryptoForm;