// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//Internal imports
import "@openzeppelin/contracts/utils/Counters.sol"; //track the number of tokens
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    //this gives token id, unique id to nft
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.0015 ether;

    // whoever deploy this smart contract became the owner this contract
    address payable owner;

    // this mapping given with idMarketItem, and it find that NFT in MarketItem(NFT items)
    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    // event when any kind of transaction happend in the followong attributes
    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can change the listing price");
        _;
    }

    //this constructor calling from the contract we are importing from ERC721.sol
    constructor() ERC721("NFT Metaverse Token", "MYNFT") {
        owner == payable(msg.sender);
    }

    // this funtion is to charge creators to list their item in my marketplace
    function updateListingPrice(
        uint256 _listingPrice
    ) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    //fetching listing price
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    //Create NFT tokem function

    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    // creating market items
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be atleast 1");
        require(
            msg.value == listingPrice,
            "price must be equal to listing price"
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            // this is the address of user calling contract
            payable(msg.sender),
            // this address(this) -: this means here address of contract
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    // function for resale token
    function reSellToken(uint256 tokenID, uint256 price) public payable {
        require(
            idMarketItem[tokenID].owner == msg.sender,
            "Only item owner can change the price"
        );

        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        idMarketItem[tokenID].sold = false;
        idMarketItem[tokenID].price = price;
        idMarketItem[tokenID].seller = payable(msg.sender);
        idMarketItem[tokenID].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenID);
    }

    //function to create item sales

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _transfer(address(this), msg.sender, tokenId);

        // every time somebody buy nft fixed amount is transffered to nftmarketplace owner
        payable(owner).transfer(listingPrice);
        // the amount to be paid to be paid by buyer to th owner of the nft
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    // Getting unsold nft data
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        // loop over whole unsold nft and storing in an array
        // initializing array to sotre unsold nfts
        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            // this if condition checks whther owner of the nft is contract itself because they are unsold
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
    }

    //function to purchase item

    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentID = i + 1;
                MarketItem storage currentItem = idMarketItem[currentID];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    /* Returns only items a user has listed */
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            } 
        }
        return items;
    }
}
