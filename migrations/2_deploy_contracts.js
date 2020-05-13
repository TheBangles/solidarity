const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const Donate = artifacts.require("Donate")

module.exports = function(deployer) {
  // deployer.deploy(SimpleStorage);
  // deployer.deploy(TutorialToken);
  // deployer.deploy(ComplexStorage);

  // deployer.deploy(Donate, '0x0ecE39E1Aa515f80d32fcCAed079d460eDBb4139');
  deployer.deploy(Donate);
};
