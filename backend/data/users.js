import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Daniel Viana",
    email: "dan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "João",
    email: "jo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
