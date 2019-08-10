export default class ServerError extends Error {
  name = "ServerError";
  status = 500;
  constructor() {
    super("서버에서 오류가 발생했습니다.");
  }
}
