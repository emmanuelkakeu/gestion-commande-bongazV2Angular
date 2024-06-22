/* tslint:disable */
import { InputStream } from './input-stream';
export interface Resource {
  open?: boolean;
  file?: Blob;
  readable?: boolean;
  url?: string;
  uri?: string;
  filename?: string;
  description?: string;
  inputStream?: InputStream;
}
