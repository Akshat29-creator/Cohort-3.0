// index.js

// Import libraries
import { Command } from "commander";
import fs from "fs";

// Create a new command instance
const program = new Command();

// Define the CLI structure
program
  .name("word-counter")
  .description("Counts the number of words in a file")
  .argument("<filePath>", "Path of the file to count words from")
  .action((filePath) => {
    // Read the file content
    try {
      const data = fs.readFileSync(filePath, "utf-8");

      // Split text into words (by spaces, newlines, etc.)
      const words = data.trim().split(/\s+/);

      // If the file is empty, handle that too
      const wordCount = data.trim() === "" ? 0 : words.length;

      console.log(`You have ${wordCount} words in this file`);
    } catch (err) {
      console.error("Error reading file:", err.message);
    }
  });

// Parse command line arguments
program.parse();
