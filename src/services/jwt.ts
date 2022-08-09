class JwtService {
  async getJwt(user: any): Promise<any> {
    return {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjAwNDg2NjcsImV4cCI6MTY5MTU4NDY2NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5pY2tuYW1lIjoiU2VyZ28yMjgiLCJlbWFpbCI6ImJyeWtzZXJ5aUBnbWFpbC5jb20iLCJhZGRyZXNzIjoiRGF4bm92a2EiLCJwaG9uZSI6IjEyMzEyMzEyMzEyMzIxIiwiZmlyc3ROYW1lIjoiTW9uc3RlciIsImxhc3ROYW1lIjoiMjI4In0.NsZ1PaaDqf5aB0yOfUSP-NMqx6aAWUD_7tpC0iR56Dk",
    };
  }
}

export const jwtService = new JwtService();
