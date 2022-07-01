import { toast } from "react-toastify";

export enum EToastType {
  info = "info",
  success = "success",
  warn = "warn",
  error = "error",
}

export function showNotice(type: EToastType, message: string) {
  switch (type) {
    case EToastType.info:
      toast.info(message);
      break;
    case EToastType.success:
      toast.success(message);
      break;
    case EToastType.warn:
      toast.warn(message);
      break;
    case EToastType.error:
      toast.error(message);
      break;
  }
}
