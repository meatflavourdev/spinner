const spin = function(input, i) {
  process.stdout.write('\r' + input[i] + '   ');
  i = (i >= input.length - 1) ? 0 : i + 1;
  setTimeout(spin, 200, input, i);
};

const spinnerSequence = ["|", "/", "-", "\\"];
spin(spinnerSequence, 0);