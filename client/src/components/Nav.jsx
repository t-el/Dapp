import React  from "react";

class Nav extends React.Component {
  state = { crypto_used : "" };
   obj = {
    1:"ETHER",
    80001:"MATIC"
  }
  componentDidMount = () =>{
    this.setState({crypto_used:this.obj});
  }
    constructor(props){
        super(props);
    }
    render() {
      return (
       <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-relative">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dlancing</a>
   
    <div className="" id="navbarText">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ">
        <a type="button" className="nav-link ">
                Orders &nbsp;
                <span class="badge rounded-pill bg-danger">4</span>
              </a>
        </li>
        <li className="nav-item ">
          <span className="nav-link"><kbd>{this.props.balance?this.props.balance:"0"} {this.state.crypto_used[this.props.id]?this.state.crypto_used[this.props.id]:"You have to use Matic or ether"}</kbd></span>
        </li>
      </ul>
      <span className="navbar-text">
        {this.props.account}
      </span>
    </div>
  </div>
</nav>
       </div>

     
          
      );
    }
  }

  export default Nav;