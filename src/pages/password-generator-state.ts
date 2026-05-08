export type PasswordGeneratorState = {
  characterLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  currentPassword: string;
};

const passwordGeneratorState: PasswordGeneratorState = {
  characterLength: 10,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
  currentPassword: "",
};

export function getPasswordGeneratorState(): PasswordGeneratorState {
  return { ...passwordGeneratorState };
}

export function updatePasswordGeneratorState(
  changes: Partial<PasswordGeneratorState>,
): void {
  Object.assign(passwordGeneratorState, changes);
}
