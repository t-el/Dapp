import getWeb3 from "./getWeb3";

const  getId = async ()=>{
    try {
    const web3 = await getWeb3();
    web3.eth.getChainId((error,id)=>{
        if(!error){
            return id;
        }else{
            return 0;
        }
    })
} catch (error) {
    alert(error);
}
}

export default getId;


