import React from 'react';
class EditCryptoForm extends React.Component {
    handleChange = (event) => {
        const updatedCrypto = {
            ...this.props.crypto,
            [event.currentTarget.name]: event.currentTarget.value,
        };

        this.props.updateCrypto(this.props.id, updatedCrypto);
    }

    render() {
        return (
            <div className="crypto-edit">
                <input name="name" type="text" onChange={this.handleChange} value={this.props.crypto.name} placeholder="Name" />
                <input name="price" type="text" onChange={this.handleChange} value={this.props.crypto.price} placeholder="Price" />
                <select name="status" onChange={this.handleChange} value={this.props.crypto.status} >
                    <option value="available">Available</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.crypto.desc} placeholder="Description" />
                <input name="image" type="text"  onChange={this.handleChange} value={this.props.crypto.image} placeholder="Image" />
            </div>
        )
    }
}
export default EditCryptoForm;