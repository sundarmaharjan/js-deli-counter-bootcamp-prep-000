var KatzDeliLine = [];

function takeANumber(KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "welcome " + name + " . you are number 1 " + KatzDeliLine.length + "in line." ;
}

function nowServing(KatzDeliLine) {
  if(KatzDeliLine.length === 0 ){
    return "there is nobody is waiting to be served, Mate!!"
  } else {
    var customer = KatzDeliLine.shift(0);
    return"currently serving " + name + "." ;
  }
}