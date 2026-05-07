type PasswordGeneratorState = {
  characterLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

const passwordGeneratorState: PasswordGeneratorState = {
  characterLength: 1,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
};

export function getPasswordGeneratorState(): PasswordGeneratorState {
  return { ...passwordGeneratorState };
}

export function updatePasswordGeneratorState(
  changes: Partial<PasswordGeneratorState>,
): void {
  Object.assign(passwordGeneratorState, changes);
}
