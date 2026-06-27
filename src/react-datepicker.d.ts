// Minimal ambient types for react-datepicker (its shipped types don't resolve
// under our bundler moduleResolution; the lib is externalized at build time).
declare module "react-datepicker" {
  import * as React from "react";
  const DatePicker: React.FC<{ [prop: string]: any }>;
  export default DatePicker;
}
