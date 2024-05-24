
import Web3 from "web3";

import { ethers } from "ethers";

import abi from "./abi.json";

import nametoageabi from "./nametoageabi.json"



const isBrowser = () => typeof window !== "undefined";

const {ethereum } = isBrowser();


if (ethereum){
    isBrowser().web3 = new Web3(ethereum);
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}


const contract_address = "0x0C11A23444720a485dB9b5c772bA2147c7e94e77";

const nametoagecontract = "0xa023Fd22e6c03c10F92dc146493D3eAF8433b59c";

export const Increment = async () => {


    // provider
    const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
console.log("provider",provider)

    //signer

    const signer = provider.getSigner();

console.log("signer",signer)
    // contract instance

    const contract = new ethers.Contract(contract_address, abi, signer);

    console.log("contract",contract)

    const tx = await contract.increment();

    await tx.wait();

    console.log("tx", tx)

    return tx;



}
export const Decrement = async () => {


    // provider
    const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
console.log("provider",provider)

    //signer

    const signer = provider.getSigner();

console.log("signer",signer)
    // contract instance

    const contract = new ethers.Contract(contract_address, abi, signer);

    console.log("contract",contract)

    const tx = await contract.decrement();

    await tx.wait();

    console.log("tx", tx)

    return tx;



}
export const GetCounter = async () => {


    // provider
    const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
console.log("provider",provider)

    //signer

    const signer = provider.getSigner();

console.log("signer",signer)
    // contract instance

    const contract = new ethers.Contract(contract_address, abi, signer);

    console.log("contract",contract)

    const tx = await contract.getCounter();



    console.log("tx", tx)

    return tx;



}



export const SetNameToAge = async({name, age}) => {

    console.log(name,age)
        // provider
        const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
        console.log("provider",provider)
        
            //signer
        
            const signer = provider.getSigner();
        
        console.log("signer",signer)
            // contract instance
        
            const contract = new ethers.Contract(nametoagecontract, nametoageabi, signer);
        
            console.log("contract",contract)
        
            const tx = await contract.setNametoAge(name, age);

            tx.wait()

            console.log(tx)

            return tx

}

export const GetNameToAge = async({name}) => {

    console.log(name)
        // provider
        const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
        console.log("provider",provider)
        
            //signer
        
            const signer = provider.getSigner();
        
        console.log("signer",signer)
            // contract instance
        
            const contract = new ethers.Contract(nametoagecontract, nametoageabi, signer);
        
            console.log("contract",contract)
        
            const tx = await contract.getNameToAge(name);

           

            console.log(tx)

            return tx

}