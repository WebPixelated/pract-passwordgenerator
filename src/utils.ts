import { toast } from "react-toastify";

export async function copyPasswordToClipboard(password: string): Promise<void> {
  if (!password) {
    toast.error("Password is empty!");
    return;
  }
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(password);
      toast.success("Password copied!");
    } catch (error) {
      toast.error(`${error}`);
    }
  } else {
    toast.error("Clipboard is unaccessible!");
  }
}
