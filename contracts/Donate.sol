// pragma solidity >=0.4.21 <0.7.0;

// contract Donate{
//     // mapping(address => uint256) public balances;
//     address payable wallet = msg.sender;
//     string public description;
//     bool public metCriteria = false;
//     uint public balance;
//     event Donated(
//         address indexed _buyer,
//         uint256 _amount
//     );
//     event Transfered(
//         address wallet,
//         uint256 _balance
//     );

//     // constructor(address payable _wallet) public {
//     //     wallet = _wallet;
//     // }

//     struct Project {
//       string charityName;
//       string imageUrl;
//       string description;
//       uint256 goal;
//     }

//     Project[] public allProjects;

//     function addProjectStruct(string memory charityName, string memory imageUrl, string memory description, uint goal) public {
//       Donate memory newDonate = Donate({
//         charityName: charityName,
//         imageUrl: imageUrl,
//         description: description,
//         goal: goal
//       });
//     }


//     function donate() public payable {
//         // require(metCriteria == true, 'Fundraiser goal not met');
//         require(msg.value > 0, 'give me some money');
//         balance += msg.value;
//         emit Donated(msg.sender, msg.value);
//     }
//     //third party verification user - this function can only be called by a certain user
//     function endProject() public payable {
//         require(msg.sender == 0x1D6d348cA31Ab1824F59A15E105f72DC9683d548, 'you are not allow to do this');
//         metCriteria = true;
//         wallet.transfer(balance);
//         balance = 0;
//         emit Transfered(wallet, balance);
//     }
// }

pragma solidity >=0.4.21 <0.7.0;
contract Donate {
    struct Project {
        uint id;
        address recipient;
        string projectName;
        string description;
        uint amountNeeded;
        uint amountDonated;
        bool ongoing;
        address[] donorsArray;  // [ {address:donorAddress, amount}  ]
        mapping(address=>uint) donors;
    }
    struct Donor {
        address donorAddress;
        uint amount;
    }
    uint public nextId = 1;
    Donor[] public allDonors;
    Project[] public allProjects;// we keep track of all the fundraisers here.
    function createDonationStruct(uint amount) public {
            Donor memory newDonor = Donor({
                donorAddress: msg.sender,
                amount: amount
            });
            allDonors.push(newDonor);
        }
    function donate(address recipient, uint amount) public {
        //click donate on project
        //find project
    }
    function createProjectStruct (string memory name, string memory description, uint amountNeeded ) public{
        Project memory newProject = Project({
            id: nextId,
            recipient: msg.sender,
            projectName: name,
            description: description,
            amountNeeded: amountNeeded,
            amountDonated: 0,
            ongoing: true,
            donorsArray: new address[](0)//not sure
        });
        allProjects.push(newProject);
        nextId++;
    }
}
// contract Project{
//     //we keep the details of individual donation here, mainly donor's address and amount donated
//     struct Donation{
//         address donor;
//         uint amountDonated;
//     }
//     //address of contract owner,that will be recieving the donations
//     address public recipient;
//     //the reason for creating fundraising campaign
//     string public description;
//     //name of reciepient/chairty name
//     string public name;
//     //amount of fund needed
//     uint public amountNeeded;
//     //mapping of donors to amount contributed for the fundraiser
//     mapping(address=>uint) public donorsAmount;
//     //number of donors in the fundraiser
//     uint public donors;
//     //Amount of money donated to fundraiser.initialized to zero. Because fund can be withdrew anytime,
//     //we use this to track all fund made to the contract so far
//     uint public amountSoFar = 0;
//     //we keep track of all the donations to this fundraiser here
//     Donation[] public donations;
//     //to know whetehr fundraiser is still on going or not
//     bool public ongoing = true;
//     //EVENTS
//     //event for when a contract is created. Shows owner address, contract address and description of fundraiser
//     event Contract_Created(address indexed _from, address indexed _contract, string _desription );
//     // event for when money is donated. Shows address of donor, fundraiser contract donated to and value donated
//     event Funds_Donated(address indexed _from, address indexed _contract, uint _value);
//     //event for when the fundraising goal is reached. Shows recipient address, contract address and amount raised
//     event Goal_Reached(address indexed _from, address indexed _contract, uint _value);
//     //event for when recipient/contract owner ends fundraiser. Shows the owner address, contract address and amount rasied
//     event Fundraiser_Ended(address indexed _from, address indexed _contract, uint _value );
//     //event for when recipient withdraws money from the fundraiser contract. shows the owner address, contract address and amount withdrawn
//     event Fund_Withdrawn(address indexed _from, address indexed _contract, uint _value);
//     ///@notice only fundraiser/recipient can perform action
//     modifier restricted(){
//         require(
//             msg.sender == recipient,
//             "Action can aonly be performed by Contract owner"
//             );
//         _;
//     }
//     ///@notice to check if the fundraiser is still ongoing or ended
//     modifier isLive(){
//         require(
//             ongoing,
//             "This fundraiser has ended"
//             );
//         _;
//     }
//     constructor(string memory _name, string memory _desription, uint _amountNeeded, address _recipient) public {
//         name= _name;
//         description = _desription;
//         amountNeeded = _amountNeeded;
//         recipient = _recipient;
//         emit Contract_Created(_recipient, address(this), _desription);
//     }
//     function donate() public isLive payable{
//         donorsAmount[msg.sender] = msg.value; //keeps track of the amount that each donor contributes;
//         amountSoFar += msg.value;// add amount donated to total contributions
//         donors++;// increment the number of donors
//         _createDonation(msg.sender, msg.value);//create a new donation
//         emit Funds_Donated(msg.sender,address(this), msg.value);//sends out event that funds has been donated to this fundraiser contract
//         // if goal of fundraiser has been reached, end the fundraiser.
//         //This contract does not allow raising more than what was specified from start
//         if (amountSoFar >= amountNeeded){
//             _end();
//         }
//     }
//     function _createDonation(address donor, uint amount) private{
//         Donation memory newDonation = Donation({
//             donor: donor,
//             amountDonated: amount
//         });
//         donations.push(newDonation);
//     }
//     function withdraw() public restricted isLive{
//         //balance stores the amount of money in the contract at this moment
//         uint balance = getBalance();
//         // checks if there is money in the account
//         require(
//             balance != 0,
//             "Contract balance is 0"
//         );
//         emit Fund_Withdrawn(recipient,address(this),balance);//sends out event that contract owner/recipient have withdrew some funds
//         recipient.transfer(address(this).balance);// sends the account balance to recipient
//     }
//     function getBalance() public view isLive returns(uint){
//         return address(this).balance;
//     }
//     function end() public restricted isLive{
//         ongoing = false;
//         emit Fundraiser_Ended(recipient, address(this),amountSoFar); //sends out event that fundraiser has been ended
//         recipient.transfer(address(this).balance);// kills the contract from the blockchain and sends contract balance to recipient
//     }
//     function _end() private {
//         ongoing = false;
//         emit Goal_Reached(recipient, address(this),amountSoFar); //sends out event that fundraisering goal has been reached
//         recipient.transfer(address(this).balance);//ends the fundraiser and sends contract balance to recipient
//     }
// }
