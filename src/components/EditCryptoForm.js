import React from 'react';
function EditCryptoForm(props) {
    const handleChange = (event) => {
        const updatedCrypto = {
            ...props.crypto,
            [event.currentTarget.name]: event.currentTarget.value,
        };

        props.updateCrypto(props.id, updatedCrypto);
    }

    return (
        <div className="crypto-edit">
            <input name="name" type="text" onChange={handleChange} value={props.crypto.name} placeholder="Name" />
            <input name="price" type="text" onChange={handleChange} value={props.crypto.price} placeholder="Price" />
            <select name="status" onChange={handleChange} value={props.crypto.status} >
                <option value="available">Available</option>
                <option value="unavailable">Sold out!</option>
            </select>
            <textarea name="desc" onChange={handleChange} value={props.crypto.desc} placeholder="Description" />
            <input name="image" type="text"  onChange={handleChange} value={props.crypto.image} placeholder="Image" />
            <button onClick={() => props.deleteCrypto(props.id)}>Delete Crypto</button>
        </div>
    )
}
export default EditCryptoForm;