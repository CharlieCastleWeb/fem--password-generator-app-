import type { PasswordGeneratorState } from "../pages/password-generator-state";

const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const MIN_PASSWORD_LENGTH = 1;
const MAX_PASSWORD_LENGTH = 20;

function shuffleValues(values: string[]): string[] {
  const shuffledValues = [...values];
  for (let i = shuffledValues.length - 1; i > 0; i--) {
    const randomArray = new Uint32Array(1);
    crypto.getRandomValues(randomArray);

    const randomIndex = randomArray[0] % (i + 1);

    [shuffledValues[i], shuffledValues[randomIndex]] = [
      shuffledValues[randomIndex],
      shuffledValues[i],
    ];
  }

  return shuffledValues;
}

function getSelectedCharacterGroups(
  passwordState: PasswordGeneratorState,
): string[] {
  const selectedGroups: string[] = [];

  if (passwordState.includeUppercase) selectedGroups.push(UPPERCASE_LETTERS);
  if (passwordState.includeLowercase) selectedGroups.push(LOWERCASE_LETTERS);
  if (passwordState.includeNumbers) selectedGroups.push(NUMBERS);
  if (passwordState.includeSymbols) selectedGroups.push(SYMBOLS);

  return selectedGroups;
}

export function validatePasswordConfig(
  passwordState: PasswordGeneratorState,
): boolean {
  const isValidLength =
    passwordState.characterLength >= MIN_PASSWORD_LENGTH &&
    passwordState.characterLength <= MAX_PASSWORD_LENGTH;

  const hasCharacterTypeSelected =
    getSelectedCharacterGroups(passwordState).length > 0;

  if (!isValidLength) {
    console.log(
      `You must specify a length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}`,
    );
  }

  if (!hasCharacterTypeSelected) {
    console.log("You must select at least one character type");
  }

  return isValidLength && hasCharacterTypeSelected;
}

function getRandomCharacter(availableCharacters: string): string {
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  const randomIndex = randomArray[0] % availableCharacters.length;

  return availableCharacters[randomIndex];
}

export function generatePassword(
  passwordState: PasswordGeneratorState,
): string {
  const selectedCharacterGroups = getSelectedCharacterGroups(passwordState);
  validatePasswordConfig(passwordState);

  const shuffledGroups = shuffleValues(selectedCharacterGroups);
  const availableCharacters = selectedCharacterGroups.join("");
  const password: string[] = [];

  for (const group of shuffledGroups.slice(0, passwordState.characterLength)) {
    password.push(getRandomCharacter(group));
  }

  for (let i = password.length; i < passwordState.characterLength; i++) {
    password.push(getRandomCharacter(availableCharacters));
  }

  return shuffleValues(password).join("");
}
