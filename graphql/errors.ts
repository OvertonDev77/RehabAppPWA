export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

export class GraphQlError extends Error {
  code?: string;
  constructor(message: string, code?: string) {
    super(message);
    this.name = "GraphQlError";
    if (code) this.code = code;
  }
}
