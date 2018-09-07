import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

    class Wizard extends Component {
        constructor (props) {
            super(props)

            this.state = {
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: ''
            }

            this.handlePropertyName = this.handlePropertyName.bind(this);
            this.handleAddress = this.handleAddress.bind(this);
            this.handleCity = this.handleCity.bind(this);
            this.handleState = this.handleState.bind(this);
            this.handleZip = this.handleZip.bind(this);
            this.handleAddHouse = this.handleAddHouse.bind(this)

        }

        handlePropertyName (e) {
            this.setState({name: e.target.value})
        }

        handleAddress (e) {
            this.setState({address: e.target.value})
        }

        handleCity (e) {
            this.setState({city: e.target.value})
        }

        handleState (e) {
            this.setState({state: e.target.value})
        }

        handleZip (e) {
            this.setState({zip: e.target.value})
        }

        handleAddHouse () {
            axios.post('/api/house/', {
                housename: this.state.name,
                houseaddress: this.state.address,
                housecity: this.state.city,
                housestate: this.state.state,
                housezip: this.state.zipcode
            }).then(res =>
                this.setState({ 
                    houses: res.data,
                    name: '',
                    address: '',
                    city: '',
                    state: '',
                    zipcode: ''
                }))
        }

        render () {
            console.log(this.state)
            return (
                <div>
                    <h1>Wizard</h1>
                    <Link to='/'><button>Cancel</button></Link>
                    <div>
                        <h2>Property Name</h2>
                        <input onChange={this.handlePropertyName} type="text"/>
                    </div>
                    <div>
                        <h2>Address</h2>
                        <input onChange={this.handleAddress} type="text"/>
                    </div>
                    <div>
                        <h2>City</h2>
                        <input onChange={this.handleCity} type="text"/>
                    </div>
                    <div>
                        <h2>State</h2>
                        <input onChange={this.handleState} type="text"/>
                    </div>
                    <div>
                        <h2>Zip</h2>
                        <input onChange={this.handleZip} type="text"/>
                    </div>
                    <div>
                        <button onClick={this.handleAddHouse}>Complete</button>
                    </div>
                </div>
            )
        }
}

export default Wizard