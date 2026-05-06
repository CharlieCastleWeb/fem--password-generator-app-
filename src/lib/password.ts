const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const MIN_PASSWORD_LENGTH = 1;
const MAX_PASSWORD_LENGTH = 20;

type PasswordOptions = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

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
  passwordOptions: PasswordOptions,
): string[] {
  const selectedGroups: string[] = [];

  if (passwordOptions.uppercase) selectedGroups.push(UPPERCASE_LETTERS);
  if (passwordOptions.lowercase) selectedGroups.push(LOWERCASE_LETTERS);
  if (passwordOptions.numbers) selectedGroups.push(NUMBERS);
  if (passwordOptions.symbols) selectedGroups.push(SYMBOLS);

  return selectedGroups;
}

function validatePasswordConfig(
  length: number,
  passwordOptions: PasswordOptions,
): void {
  const isValidLength =
    length >= MIN_PASSWORD_LENGTH && length <= MAX_PASSWORD_LENGTH;
  const selectedGroups = getSelectedCharacterGroups(passwordOptions);

  if (!isValidLength) {
    throw new Error(
      `You must specify a length between ${MIN_PASSWORD_LENGTH} and  ${MAX_PASSWORD_LENGTH}`,
    );
  }

  if (selectedGroups.length === 0) {
    throw new Error("You must select at least one character type");
  }
}

function getAvailableCharacters(passwordOptions: PasswordOptions): string {
  return getSelectedCharacterGroups(passwordOptions).join("");
}

function getRandomCharacter(availableCharacters: string): string {
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  const randomIndex = randomArray[0] % availableCharacters.length;

  return availableCharacters[randomIndex];
}

export function generatePassword(
  length: number,
  passwordOptions: PasswordOptions,
): string {
  validatePasswordConfig(length, passwordOptions);

  const selectedGroups = shuffleValues(
    getSelectedCharacterGroups(passwordOptions),
  );
  const availableCharacters = getAvailableCharacters(passwordOptions);
  const password: string[] = [];

  for (const group of selectedGroups.slice(0, length)) {
    password.push(getRandomCharacter(group));
  }

  for (let i = password.length; i < length; i++) {
    password.push(getRandomCharacter(availableCharacters));
  }

  return shuffleValues(password).join("");
}
