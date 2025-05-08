let bond = '007';

function oddJob() {
  let AgentinScope = (bond === '007'); //here we are checking if the bond is equal to '007'
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE //The prediction should be true because the bond is equal to '007'

  return AgentinScope === prediction;
}


function goldFinger(bond) {
  let AgentinScope = (bond === '007')
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE //The prdiction should be false because the bond is not equal to '007' within the function, it's undefined.

  return AgentinScope === prediction;
}


function scaramanga(target) {
  target = bond;

  let AgentinScope = (bond === '007')
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE //The prediction should be true because the target is equal to bond which is '007'. 

  return AgentinScope === prediction;
}


function drNo() {
  let bond = 'Body Double';

  let AgentinScope = (bond === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE //The prediction should be false because the bond is not equal to '007' within the function, it's 'Body Double'.

  return AgentinScope === prediction;
}


function jaws(agent) {
  agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = null;

  return AgentinScope === prediction;
}

//explain the jaws function
// The jaws function takes an argument agent and assigns it the value of bond.
// Then it changes the value of bond to 'Body Double'.
// It checks if agent is equal to '007' and assigns the result to AgentinScope.
// Finally, it checks if AgentinScope is equal to prediction.
// The prediction is null, so the function will return false if AgentinScope is true and true if AgentinScope is false.

//what should be the prediction in jaws function?
// The prediction should be null because we don't know if the agent is equal to bond or not.
// But we know that the agent is equal to bond which is '007' considering the global scope. But the bond is changed to 'Body Double' within the function.
// So the agent is not equal to bond anymore.
// The prediction should be null because we don't know if the agent is equal to bond or not.

function elChiffre() {
  let agent = bond;
  bond = 'Body Double';

  let AgentinScope = (agent === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE //The prediction should be false because the agent is not equal to bond anymore. The bond is changed to 'Body Double' within the function.
  // The agent is equal to bond which is '007' considering the global scope. But the bond is changed to 'Body Double' within the function.
  // So the agent is not equal to bond anymore.

  return AgentinScope === prediction;
}
