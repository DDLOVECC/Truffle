const mintERC721 = artifacts.require("MintERC721");

module.exports = function (deployer) {
    deployer.deploy(mintERC721,"Mint NFT","MYNFT");
};
