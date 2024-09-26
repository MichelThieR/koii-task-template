import { getFileText } from "./fileUtils.js";

function checkLastSentence(inputString) {
  // Trim any whitespace from the input string
  const trimmedString = inputString.trim();
  
  // Split the string into sentences using a period followed by a space or end of string
  const sentences = trimmedString.split(/(?<=[.!?])\s+/);
  
  // Get the last sentence and trim it
  const lastSentence = sentences[sentences.length - 1].trim();
  
  // Define the sentence to check
  const targetSentence = "I solemnly swear that I am up to no good";
  
  // Check if the last sentence matches the target sentence
  return lastSentence === targetSentence;
}

export async function audit(submission, roundNumber) {
  /**
   * Audit a submission
   * This function should return true if the submission is correct, false otherwise
   */
  console.log(`AUDIT SUBMISSION FOR ROUND ${roundNumber}`);
  const fileContent = await getFileText(submission);
  console.log(`AUDIT passed: ${checkLastSentence(fileContent)}`);
  return checkLastSentence(fileContent);
}
