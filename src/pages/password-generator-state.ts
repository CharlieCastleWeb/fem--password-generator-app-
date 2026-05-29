import type { PasswordGeneratorConfig } from "../lib/password";

const passwordGeneratorState: PasswordGeneratorConfig = {
  characterLength: 10,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
};

export function getPasswordGeneratorState(): PasswordGeneratorConfig {
  return { ...passwordGeneratorState };
}

export function updatePasswordGeneratorState(
  changes: Partial<PasswordGeneratorConfig>,
): void {
  Object.assign(passwordGeneratorState, changes);
  passwordGeneratorStateSubscribers.forEach((subscriber) => {
    subscriber();
  });
}

const passwordGeneratorStateSubscribers: Array<() => void> = [];

export function subscribeToPasswordGeneratorState(
  subscriber: () => void,
): void {
  passwordGeneratorStateSubscribers.push(subscriber);
}
