import { ethers, Contract } from "ethers";
import ERC20ABI from "./ERC20ABI.json";

const NiiFiTokenContract = "0x852e5427c86a3b46dd25e5fe027bb15f53c4bcb8";
const NiiFiVestingContract = "0xfe2b78f173a584e4a1ba378e66eb32ed23e72cec";
let provider;

const getProvider = async () => {
  if (provider) {
    return provider;
  }
  provider = new ethers.providers.InfuraProvider();
  return provider;
};

const getBalance = async (targetAddress, provider) => {
    const contract = new Contract(NiiFiTokenContract, ERC20ABI, provider);
    const balance = await contract.balanceOf(targetAddress);
    return balance;
  };