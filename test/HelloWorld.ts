import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";
import { expect } from "chai";

describe("hello horld", function () {
  it("should say hi", async function () {

    // contract factory
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy(); // puts smart contract to ethereum network
    await hello.deployed(); 
    // waits until smart contract is deployed {Ensure contract has been confirmed byt the nodes}
    // [Ethereum ->  has to be consensus and agreement among nodes]
    // Its kinda cassandra, an eventually consistent machine - things dont happend instantaneously

    expect(await hello.hello()).to.equal("Hello, world!");
  });
})

// setup 
// deploy our contract
// call our functions to test