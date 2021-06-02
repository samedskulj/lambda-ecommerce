import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Samed",
    email: "samed@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ahmed",
    email: "ahmed@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
