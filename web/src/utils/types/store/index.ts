export type AlertType = "failure" | "gray" | "info" | "success" | "warning";

export type Alert = {
  id: string;
  msg: string;
  type: AlertType;
  duration?: number;
};
