import React, { Component } from "react";
//import MADT from "./contracts/MADT.json";
import getWeb3 from "./getWeb3";
import Nav from "./components/Nav";
import Header from "./components/Header";

import "./App.css";
//import id from "./ETherOrMatic";
class App extends Component {
  state = { id: 0, web3: null, accounts: null, balance: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
       this.setState({web3:web3});
       if(await web3.eth.getChainId() === 1 ){
             // ethereum network
       }else if(await web3.eth.getChainId() === 3){
            //Polygon network
       }else{
        this.setState({web3:null});
       }
       this.setState({id: await web3.eth.getChainId()});
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      this.setState({accounts:accounts});
      // Get the contract instance.
      //instance.options.address = ;
       web3.eth.getBalance(this.state.accounts[0],(err,bal)=>{
        this.setState({balance:web3.utils.fromWei(bal)});
       })

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
 
    } catch (error) {
      // Catch any errors for any of the above operations.
     
      console.error(error);
    }
  };



  render() {
    if (!this.state.web3) {
      return (
      <div className="card p-3 m-4 " >
        <h1> You have to install and connect with Metamask and You have to use ETHER Or MATIC</h1>
        </div>
        );
    }
    return (
      <div className="App">
       <Nav id={this.state.id} balance = {this.state.balance} account= {this.state.accounts} />
       <Header />
      </div>
    );
  }
}

export default App;
