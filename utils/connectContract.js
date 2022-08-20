import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
    const contractAddress = "0x5796c7e2Dcca0930e783BDc0215A5CC8108579ea";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
      const { ethereum } = window;
  
      if (ethereum.chainId === "0x13881") {
        //checking for eth object in the window, see if they have wallet connected to Polygon Mumbai network
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
    return rsvpContract;
  }
  
  export default connectContract;