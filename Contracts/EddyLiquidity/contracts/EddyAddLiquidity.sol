// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EddyFinanceAddLiquidity{
    address feeTo; // Address to which the fee will be transferred
    address routerAddress; // Address of the Uniswap router
    uint256 feeAmount; // In basis points, 1% = 100, 0.5% = 50
    bool private _locked;

    modifier noReentrant() {
        require(!_locked, "No re-entrancy");
        _locked = true;
        _;
        _locked = false;
    }
    constructor(address _routerAddress, uint256 _fee) {
        feeTo = msg.sender;
        routerAddress = _routerAddress;
        feeAmount = _fee;
    }

    function addLiquidityEddy(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external noReentrant {
        address _routerAddress = routerAddress;
        uint256 _fee = feeAmount;
        address _feeTo = feeTo;

        // Check if the caller has approved the tokens
        require(IERC20(tokenA).allowance(msg.sender, address(this)) >= amountADesired, "Allowance not set for tokenA");
        require(IERC20(tokenB).allowance(msg.sender, address(this)) >= amountBDesired, "Allowance not set for tokenB");

        // Transfer the tokens to this contract
        require(IERC20(tokenA).transferFrom(msg.sender, address(this), amountADesired), "TokenA transfer to wrapper contract failed");
        require(IERC20(tokenB).transferFrom(msg.sender, address(this), amountBDesired), "TokenB transfer to wrapper contract failed");

        // Calculate the fee amount
        uint256 feeAmountA = amountADesired * _fee / 10000;
        uint256 feeAmountB = amountBDesired * _fee / 10000;
        
        amountADesired -= feeAmountA;
        amountBDesired -= feeAmountB;
        amountAMin -= feeAmountA;
        amountBMin -= feeAmountB;

        // Transfer the fee to the feeTo address (contract deployer)
        require(IERC20(tokenA).transfer(_feeTo, feeAmountA), "Fee transfer for A failed");
        require(IERC20(tokenB).transfer(_feeTo, feeAmountB), "Fee transfer for B failed");

        // Approve the Uniswap router to spend the tokens
        require(IERC20(tokenA).approve(_routerAddress, amountADesired), "TokenA approve failed");
        require(IERC20(tokenB).approve(_routerAddress, amountBDesired), "TokenB approve failed");

        // Call the Uniswap router to add liquidity
        IUniswapV2Router02(_routerAddress).addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline
        );
    }
}
