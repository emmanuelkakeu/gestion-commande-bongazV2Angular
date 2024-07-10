export class RequestResultDto<Body> {
  code: number;
  data: Body;
  message: string;
  status: string;
  timestamp: string;
}
