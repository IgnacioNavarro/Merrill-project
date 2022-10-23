// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

contract AquaTokens is ERC721, Ownable {
    uint256 public totalSupply;
    string internal baseTokenUri;
    //address payable public withdrawWallet;
    //uint256 public maxSupply;

    //the nft can give perks but without being tradeable
    mapping(uint256 => bool) isTradeable;
    //the token can be burned in order to receive the soulbound token
    mapping(uint256 => bool) isBurned;
    //Gewt the specific hash from a token
    mapping(uint256 => string) tokenHashes;


    constructor() payable ERC721('Aqua Tokens', 'AQUA') {
        totalSupply = 0;
        //maxSupply = 1000;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), "Token does not exist!");
        return string.concat(baseTokenUri, tokenHashes[tokenId_]);
    }

    function _beforeTokenTransfer(address from, address to, uint256 id) view override internal {
        //address(0) indicates that the action is minting
        if(from != address(0)){
            require(isTradeable[id], "This a Soulbound token. It cannot be transferred. It can only be burned by the token owner.");
            require(!isBurned[id], "This token is already burned. It cannot be transferred.");
        }
    }

    function burnToken(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender);
        isBurned[tokenId] = true;
    }


    //The owner mints the NFT pointing to the receiver
    function mint(address receiver, bool tradeable, string memory tokenHash) payable external onlyOwner{
        uint256 newTokenId = totalSupply + 1;
        totalSupply++;
        //0x66E30Ce4FB76f08C431080B1C1C95d97311a4526 -> usuario final -> 666666666
        _safeMint(receiver, newTokenId);
        isTradeable[newTokenId] = tradeable;
        isBurned[newTokenId] = false;
        tokenHashes[newTokenId] = tokenHash;
    }

    //The commerce will mint a batch of NFT that will receive in their own wallet
    function commerceMint(address commerceWallet, uint256 quantity_, bool tradeable, string memory tokenHash) payable external onlyOwner{
        for(uint256 i = 0; i < quantity_; i++){
                uint256 newTokenId = totalSupply + 1;
                totalSupply++;
                _safeMint(commerceWallet, newTokenId);
                isTradeable[newTokenId] = tradeable;
                isBurned[newTokenId] = false;
                tokenHashes[newTokenId] = tokenHash;
        }
        
        
    }

    function getTokensFromUser(address addr) public view returns(uint256[] memory)
    {
        uint256 userBalance = balanceOf(addr);
        uint256[] memory tokenIds = new uint256[](userBalance);
        uint256 cont = 0;
        for(uint256 i = 1; i < totalSupply+1; i++){
            address owner = ownerOf(i);
            if(owner == addr) {
                tokenIds[cont] = i;
                cont++;
                if(tokenIds[userBalance-1] != 0){
                    break;
                }
            }
        }
        return tokenIds;
    }
}
