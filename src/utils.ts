export function copyPasswordToClipboard(password: string): void {
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
}
