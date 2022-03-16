import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
    odataString = "/v1/recipe";
    currentIp = process.env.REACT_APP_RRR_API;
    // the init function
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            recipes: [],
            mystatus:"",
            json:""
        };
    }

    // this is where we call the api just one time
    // more times would be using a method like did update
    componentDidMount() {
        // this is our fetch string, it depends on the servers current ip
        // the current ip is set in RRR_FRONTEND/.env, same folder as readme
        // it also depends on the desired odata search, view above
        let fetchString = "http://"+this.currentIp+this.odataString;

        // encapsulate into fetch object because why not
        let myRequest = new Request(fetchString);

        // run the fetch, set 'cors' to on
        // if cors means nothing to you just ignore it
        fetch(myRequest, {mode:"cors"})
        // we want json so parse immediately to it
        .then(res => res.json())
        .then(result => {
            // looking at the console our list is in result.value
            this.setState({recipes: result.value, isLoaded: true});
            console.log(result);
        },
        // on error set the state to reflect
        (error) => {
            this.setState({isLoaded:true,error});
        })
    }

    // render method for putting things to page
    render () {
        // some shorthands from the this.state
        const {error, isLoaded, recipes, mystatus} = this.state;

        // if error, display
        if (error) {
            return <div>Error: {error.message} {mystatus}</div>;
        } 
        // if loading, display
        else if (!isLoaded) {
            return <div>Loading...</div>;
        } 
        // if fine return a list of recipes
        else {
            // for this use json map and key in the values set
            // jsons object.map is like a foreach
            return (
                <div className='contents'>
                <h1>Our Favorite Recipes</h1>
                <p>IP: {this.currentIp}</p>
                <ul>
                    {recipes.map(value => (
                        <li key={value.Id}>
                            {value.Id} {value.Name}
                        </li>
                    ))}
                </ul>
                </div>
            );
        }
    }
}

export default Home;