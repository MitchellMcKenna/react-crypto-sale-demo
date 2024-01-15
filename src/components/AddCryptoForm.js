import React from 'react';
class AddCryptoForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createCrypto = (event) => {
        event.preventDefault();

        const crypto = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }

        this.props.addCrypto(crypto);

        // refresh the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="crypto-edit" onSubmit={this.createCrypto}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Available</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Crypto</button>
            </form>
        )
    }
}
export default AddCryptoForm;