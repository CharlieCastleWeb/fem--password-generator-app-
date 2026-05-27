import type { PasswordGeneratorConfig } from "../lib/password";

export type PasswordGeneratorState = PasswordGeneratorConfig & {
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
