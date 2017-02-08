export interface DataStore{
  filename?: string;
  inMemoryOnly?: boolean;
  autoload?: boolean;
  timestampData?: boolean;
  nodeWebKitAppName?: string;
  corruptAlertThreshold?: number;
  onload?: any;                   // function
  afterSerialization?: any;       // function
  beforeSerialization?: any;      // function
  compareStrings?: any;           // function
  [propName: string]: any;        // just in case there is an extra
}
