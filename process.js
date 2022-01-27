
// Main function

// function runProgram(input){
//     var input = input.split("\n");
//      var N = Number(input[0]);
//  var arr = input[1].split(" ").map(Number);
// }

// returns a stream connected to stdin (fd 0), the value of underlying file descriptor of process.stdin
// According to Node documentation, In "old" streams mode the stdin stream is paused by default,
//  so one must call process.stdin.resume() to read from it
process.stdin.resume();

// Sets encoding to ascii
process.stdin.setEncoding("ascii");

// Initializing read to an empty string
let read = "";

// On the event "data", append input to the read string.

process.stdin.on("data", function (input) {
   read += input;
});

// On the event "end", apply some regex for replacing new lines and then run the main program on the input

process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

// On SIGINT event which is usually triggered by CTRL + C, end the process. It is using a 0 to 
// test for the existence of a process

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});