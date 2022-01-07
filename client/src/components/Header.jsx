import React  from "react";

class Header extends React.Component {
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
       <div >
        
        <nav className="navbar-light bg-light  shadow mt-3">
            <div className="container-fluid">
                
                <div className="row">
                  <div className="col-md-2">
                  
                    <p>
                    </p>
                  </div>

                  <div className="col-md-2">
                    <h4>Orders</h4>
                    <p>
                      lorem
                    </p>
                  </div>

                  <div className="col-md-2">
                    <h4>Orders</h4>
                    <p>
                      lorem

                    </p>
                  </div>


                </div>
   
    
            </div>
            </nav>
        
                </div>

     
          
      );
    }
  }

  export default Header;