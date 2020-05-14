

pragma solidity >=0.4.21 <0.7.0;

contract Donate {
    struct Project {
        uint id;
        address payable recipient;
        string projectName;
        string description;
        uint amountNeeded;
        uint amountDonated;
        bool ongoing;
    }


    struct Donor {
        address donorAddress;
        uint amount;
        uint projectID;
    }


    uint public nextId = 1;
    Donor[] public allDonors;
    Project[] public allProjects;// we keep track of all the fundraisers here.


    function createDonationStruct(uint amount, uint id) internal {
            Donor memory newDonor = Donor({
                donorAddress: msg.sender,
                amount: amount,
                projectID: id
            });
            allDonors.push(newDonor);
        }


    function donate(uint id) public payable{
        //click donate on project
        //find project
        require(msg.value > 0, 'Please donote more then 0 amount');
        uint i = find(id);
        createDonationStruct(msg.value, id);
        allProjects[i].amountDonated += msg.value;

        emit Funds_Donated(msg.sender, address(this), msg.value);
        if (allProjects[i].amountDonated >= allProjects[i].amountNeeded){
            //run function to end the project
            endProject(allProjects[i].id);
            emit Goal_Reached(allProjects[i].recipient, address(this), allProjects[i].amountDonated);
        }
    }


    function createProjectStruct (string memory name, string memory description, uint amountNeeded ) public{
        Project memory newProject = Project({
            id: nextId,
            recipient: msg.sender,
            projectName: name,
            description: description,
            amountNeeded: amountNeeded,
            amountDonated: 0,
            ongoing: true
        });
        allProjects.push(newProject);
        nextId++;

        emit Project_Created(msg.sender, address(this), description);
    }

    function find(uint id) internal view returns(uint) {
        for(uint i = 0; i < allProjects.length; i++) {
            if(allProjects[i].id == id) {
            return i;
            }
        }
        revert('Project does not exist!');
    }

     function getAllProjectsLength() public view returns (uint) {
        return allProjects.length;
    }


    function endProject(uint id) public payable {
        uint i = find(id);
        require(allProjects[i].amountDonated >= allProjects[i].amountNeeded, 'This project has not rasied enough money');

        emit Goal_Reached(allProjects[i].recipient, address(this), allProjects[i].amountDonated);
        allProjects[i].ongoing = false;
        emit Project_Ended(allProjects[i].recipient, address(this), allProjects[i].amountDonated);
        allProjects[i].recipient.transfer(allProjects[i].amountDonated);// sends the account balance to recipient
    }



    //use this to render single project view
    function readSingleProject(uint id) public view returns(uint, address, string memory, string memory, uint, uint) {
    uint i = find(id);
    return(
        allProjects[i].id,
        allProjects[i].recipient,
        allProjects[i].projectName,
        allProjects[i].description,
        allProjects[i].amountNeeded,
        allProjects[i].amountDonated);
    }

//    fallback()public {
//        revert('not sure what you are doing');
//    }
    // function () public {
    //     revert('not sure what you are doing');
    // }
//     //EVENTS
    //event for when a contract is created. Shows owner address, contract address and description of fundraiser
    event Project_Created(address indexed _from, address indexed _project, string _desription );
    // event for when money is donated. Shows address of donor, fundraiser contract donated to and value donated
    event Funds_Donated(address indexed _from, address indexed _contract, uint _value);
    //event for when the fundraising goal is reached. Shows recipient address, contract address and amount raised
    event Goal_Reached(address indexed _from, address indexed _contract, uint _value);
    //event for when recipient/contract owner ends fundraiser. Shows the owner address, contract address and amount rasied
    event Project_Ended(address indexed _from, address indexed _contract, uint _value );


}
