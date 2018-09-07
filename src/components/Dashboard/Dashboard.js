import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

    class Dashboard extends Component {
        constructor (props) {
            super(props)
        
            this.state = {
                houses: []
            }
        }


        componentDidMount () {
            axios.get('/api/houses').then
            (res => this.setState({houses: res.data}))
        }

        render () {
            console.log('hello',this.state)
            
            let housesToDisplay = this.state.houses.map((e, i) => {
                return (
                    <House 
                    key={e.id}
                    id={e.id}
                    name={e.housename}
                    address={e.houseaddress}
                    city={e.housecity}
                    state={e.housestate}
                    zip={e.housezip}
                    image={e.img}
                    />
                )
            })

            return (
                <div>
                    <h1>Dashboard</h1>
                        <Link to='/wizard'><button>Add New Property</button></Link>
                        <House />
                        {housesToDisplay}
                </div>
            )
        }
    }

export default Dashboard