var VoteCount = artifacts.require("./voteCount.sol");

module.exports = function(deployer) {
  deployer.deploy(VoteCount);
};