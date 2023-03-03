import { ethers, utils } from 'ethers';
import omitDeep from 'omit-deep'; 


export const getAddress = async () => {
    if (!window.ethereum) return;
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  export const signedTypeData = (domain, types, value) => {
    const signer = getSigner(); 
    return signer._signTypedData(
      omitDeep(domain, '__typename'),
      omitDeep(types, '__typename'),
      omitDeep(value, '__typename')
    );
  }

  export const splitSignature = (signature) => {
    return utils.splitSignature(signature)
}

  export const getSigner = () => {
    const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      return ethersProvider.getSigner();
  }

  export const signText = (text) => {
    const signer = getSigner();
    return signer.signMessage(text);
  };

  export const getAddressFromSigner = () => { 
    return getSigner().address;
  }
  