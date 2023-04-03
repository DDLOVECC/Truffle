const mintERC721 = artifacts.require("MintERC721");

contract("MintERC721", accounts => {
    it("MINTNFT", async () => {
        const erc721 = await mintERC721.deployed();
        const name = await erc721.name.call();
        assert.equal(name, "Mint NFT");
        let receivers = [
            accounts[1],
            accounts[1],
            accounts[2],
            accounts[3],
        ]
        let uris = [
            "ipfs://QmTy2Tej3LN3PVDnNtJV3Ec6zsdVGFGpTFF3ogCjrpdU7N",
            "ipfs://QmTy2Tej3LN3PVDnNtJV3Ec6zsdVGFGpTFF3ogCjrpdU7N",
            "ipfs://QmTy2Tej3LN3PVDnNtJV3Ec6zsdVGFGpTFF3ogCjrpdU7N",
            "ipfs://QmTy2Tej3LN3PVDnNtJV3Ec6zsdVGFGpTFF3ogCjrpdU7N",

        ]
        await erc721.mint(receivers, uris);
        const account_one_balance = await erc721.balanceOf.call(accounts[1]);
        assert.equal(account_one_balance.toNumber(), 2);

        const owner_of = await erc721.ownerOf.call(2);
        assert.equal(owner_of, accounts[2])

        const nextTokenI = await erc721.tokenId.call();
        assert.equal(nextTokenI.toNumber(), 4)
    })
})