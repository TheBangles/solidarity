pragma solidity >=0.4.21 <0.7.0;


contract Donate {
    struct Project {
        uint256 id;
        address payable recipient;
        string projectName;
        string description;
        uint256 amountNeeded;
        uint256 amountDonated;
        bool ongoing;
        address projectAddress;
    }
    struct Donor {
        address donorAddress;
        uint256 amount;
        uint256 projectID;
    }
    uint256 public nextId = 1;
    Donor[] public allDonors;
    Project[] public allProjects; // we keep track of all the fundraisers here.

    function createDonationStruct(uint256 amount, uint256 id) internal {
        Donor memory newDonor = Donor({
            donorAddress: msg.sender,
            amount: amount,
            projectID: id
        });
        allDonors.push(newDonor);
    }

    function donate(uint256 id) public payable {
        //click donate on project
        //find project
        require(msg.value > 0, 'Please donote more then 0 amount');
        uint256 i = find(id);
        require(
            allProjects[i].recipient != msg.sender,
            'Please donate from another wallet'
        );
        require(
            allProjects[i].amountDonated < allProjects[i].amountNeeded,
            'the project already raised enough money'
        );
        createDonationStruct(msg.value, id);
        // this.balance.transfer(msg.value);
        allProjects[i].amountDonated += msg.value;
        emit Funds_Donated(msg.sender, address(this), msg.value);
        if (allProjects[i].amountDonated >= allProjects[i].amountNeeded) {
            //run function to end the project
            endProject(allProjects[i].id);
            emit Goal_Reached(
                allProjects[i].recipient,
                address(this),
                allProjects[i].amountDonated
            );
        }
    }

    function createProjectStruct(
        string memory name,
        string memory description,
        uint256 amountNeeded
    ) public {
        Project memory newProject = Project({
            id: nextId,
            recipient: msg.sender,
            projectName: name,
            description: description,
            amountNeeded: amountNeeded,
            amountDonated: 0,
            ongoing: true,
            projectAddress: address(this)
        });
        allProjects.push(newProject);
        nextId++;
        emit Project_Created(msg.sender, address(this), description);
    }

    function find(uint256 id) internal view returns (uint256) {
        for (uint256 i = 0; i < allProjects.length; i++) {
            if (allProjects[i].id == id) {
                return i;
            }
        }
        revert('Project does not exist!');
    }

    function getAllProjectsLength() public view returns (uint256) {
        return allProjects.length;
    }

    function endProject(uint256 id) public payable {
        uint256 i = find(id);
        require(
            allProjects[i].amountDonated >= allProjects[i].amountNeeded,
            'This project has not rasied enough money'
        );
        emit Goal_Reached(
            allProjects[i].recipient,
            address(this),
            allProjects[i].amountDonated
        );
        allProjects[i].ongoing = false;
        emit Project_Ended(
            allProjects[i].recipient,
            address(this),
            allProjects[i].amountDonated
        );
        allProjects[i].recipient.transfer(allProjects[i].amountDonated); // sends the account balance to recipient
    }

    //use this to render single project view
    function readSingleProject(uint256 id)
        public
        view
        returns (
            uint256,
            address,
            string memory,
            string memory,
            uint256,
            uint256,
            address
        )
    {
        uint256 i = find(id);
        return (
            allProjects[i].id,
            allProjects[i].recipient,
            allProjects[i].projectName,
            allProjects[i].description,
            allProjects[i].amountNeeded,
            allProjects[i].amountDonated,
            allProjects[i].projectAddress
        );
    }

    //     //EVENTS
    //event for when a contract is created. Shows owner address, contract address and description of fundraiser
    event Project_Created(
        address indexed _from,
        address indexed _project,
        string _desription
    );
    // event for when money is donated. Shows address of donor, fundraiser contract donated to and value donated
    event Funds_Donated(
        address indexed _from,
        address indexed _contract,
        uint256 _value
    );
    //event for when the fundraising goal is reached. Shows recipient address, contract address and amount raised
    event Goal_Reached(
        address indexed _from,
        address indexed _contract,
        uint256 _value
    );
    //event for when recipient/contract owner ends fundraiser. Shows the owner address, contract address and amount rasied
    event Project_Ended(
        address indexed _from,
        address indexed _contract,
        uint256 _value
    );
}
