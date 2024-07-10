export class VerifyOtpRequest {
  constructor(
    public username: string,
    public otp: string,
    public password: string
  ) {}
}
