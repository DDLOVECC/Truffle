// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintERC721 is ERC721URIStorage, Ownable {
    uint256 public tokenId;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){
    }

    function mint(address[] calldata receiver, string[] calldata uris) external onlyOwner{
        require(receiver.length == uris.length, "parameter not correctly");
        for (uint256 i = 0; i < receiver.length; i++) {
            _safeMint(receiver[i], tokenId);
            _setTokenURI(tokenId, uris[i]);
            tokenId = tokenId + 1;
        }
    }

}
