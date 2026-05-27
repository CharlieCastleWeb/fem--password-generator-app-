export type PasswordGeneratorConfig = {
  characterLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

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
  passwordState: PasswordGeneratorConfig,
): string[] {
  const selectedGroups: string[] = [];

  if (passwordState.includeUppercase) selectedGroups.push(UPPERCASE_LETTERS);
  if (passwordState.includeLowercase) selectedGroups.push(LOWERCASE_LETTERS);
  if (passwordState.includeNumbers) selectedGroups.push(NUMBERS);
  if (passwordState.includeSymbols) selectedGroups.push(SYMBOLS);

  return selectedGroups;
}

export function validatePasswordConfig(
  passwordState: PasswordGeneratorConfig,
): boolean {
  const isValidLength =
    passwordState.characterLength >= MIN_PASSWORD_LENGTH &&
    passwordState.characterLength <= MAX_PASSWORD_LENGTH;

  const hasCharacterTypeSelected =
    getSelectedCharacterGroups(passwordState).length > 0;

  return isValidLength && hasCharacterTypeSelected;
}

function getRandomCharacter(availableCharacters: string): string {
  if (availableCharacters.length === 0) {
    throw new Error("Available characters doesn't contain any characters");
  }
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  const randomIndex = randomArray[0] % availableCharacters.length;

  return availableCharacters[randomIndex];
}

export function generatePassword(
  passwordState: PasswordGeneratorConfig,
): string {
  const selectedCharacterGroups = getSelectedCharacterGroups(passwordState);

  if (!validatePasswordConfig(passwordState)) {
    throw new Error("Invalid password");
  }

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
