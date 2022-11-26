#!/usr/bin/env node

let fileSystem = require('fs');
let readLine = require('readline');
let path = require('path');

// Output file path
let MAP_FILE_NAME = 'MaterialIcons-Regular.ijmap';

// Create a file streaming interface
let readLineHandle = readLine.createInterface({
  input: fileSystem.createReadStream('codepoints'),
  output: process.stdout,
  terminal: false
});

// Read each line by line from the file codepoints file
let json = {icons: {}};
readLineHandle.on('line', function(line) {
  // Match the name, space then any unicode after it
  let nameCodepointPair = line.split(' ');

  // Titleize the glyph name
  let codepoint = nameCodepointPair[1];
  let name = nameCodepointPair[0].toLowerCase().trim()
      .replace(/[^0-9a-z]+/gi, ' ')
      .replace(/\b[a-z]/g, function(char) {
        return char.toUpperCase();
      });

  // Assign the codepoint to the name for IconJar
  json.icons[codepoint] = {name: name};
});

readLineHandle.on('close', function() {
  // Once reading has finished here we can write the file
  fileSystem.writeFileSync(MAP_FILE_NAME, JSON.stringify(json));
});
