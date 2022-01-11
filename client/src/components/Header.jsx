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
       <div  className = "container">
        
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
                  <hr />
                  <div className="mb-3">
                  <p className="alert alert-info ">to use the Website you have to complete the steps bellow </p>
                    </div>
                  <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">FullName *</label>
                      <input required type="text" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address *</label>
                      <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Country *</label>
                      <input required type="text" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Github (optional)</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Bio *</label>
                      <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-auto">
                      <p className="alert alert-warning">
                        this call will cost some gas , be sure your wallet have some ether or matic
                      </p>
                      <button type="submit" class="btn btn-primary mb-3">Send</button>
                      
                    </div>


                </div>
   
    
            </div>
            </nav>
        
                </div>

     
          
      );
    }
  }

  export default Header;