// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract UserContract {


struct user{
    string fullname;
    string country;
    string email;
    string bio;
    string github;
}
  mapping (address => user) _users;


function isready(address Meta_account) public  view returns(bool) {
  bytes memory fullname = bytes(_users[Meta_account].fullname); 
   
  bytes memory country = bytes(_users[Meta_account].country); 
    
  bytes memory email = bytes(_users[Meta_account].email); 
    
  bytes memory bio = bytes(_users[Meta_account].bio); 
   
  bytes memory github = bytes(_users[Meta_account].github); 

    if(fullname.length > 0 &&  country.length > 0 && email.length > 0 && bio.length > 0 && github.length > 0 ){
             return true;
    }else{
      return false;
    }

    
}

function creat_user(string memory fullname ,string memory country,string memory email,string memory bio,string memory github) public  {
  user memory u =  user(fullname,country,email,bio,github);
  _users[msg.sender] = u;
}
  
}
