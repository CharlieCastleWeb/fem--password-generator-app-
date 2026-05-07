type PasswordGeneratorState = {
  characterLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  currentPassword: string;
};

const passwordGeneratorState: PasswordGeneratorState = {
  characterLength: 1,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
  //TODO calculate password when app starts
  currentPassword: "asdf",
};

export function getPasswordGeneratorState(): PasswordGeneratorState {
  return { ...passwordGeneratorState };
}

export function updatePasswordGeneratorState(
  changes: Partial<PasswordGeneratorState>,
): void {
  Object.assign(passwordGeneratorState, changes);
}
