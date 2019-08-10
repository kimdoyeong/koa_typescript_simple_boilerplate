export default class NotFoundError extends Error {
  name = "NotFoundError";
  status = 404;
  constructor() {
    super("페이지를 찾을 수 없습니다.");
  }
}
