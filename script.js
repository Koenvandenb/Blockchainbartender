function log(logstr) {
  document.getElementById("js-output").innerHTML += logstr + "\n";
}

web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(contractABI, contractAddress);
web3.extend({ // web3.eth.requestAccounts() isn't available (yet)
    methods: [{
        name: 'eth_requestAccounts',
        call: 'eth_requestAccounts',
        params: 0
    }]
});

async function makedrink(drink, cost)
{
  log("Pay the transaction and your drink is on your way!");
  console.log(drink,cost);
  await contract.methods.makedrink(drink).send({from:`${await web3.eth_requestAccounts()}`,value:cost});
}








function listPastEvents() {           //This function logs all events to the console.
  contract.getPastEvents("allEvents", {
      fromBlock: 0,
      toBlock: 'latest'
    }) //, function(error, events){console.log(events);}) //Callback is optional.
    .then(function(events) {
      log('These are all smart contract events \n' + JSON.stringify(events));
    });
}
