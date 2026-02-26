import type { User } from "./types";

export const apiResponse: any[] = [ // unknown
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  // return apiResponse as User[]; // intentionally unsafe
  const agesInt = formatAges(apiResponse)
  const tempLst: User[] = []
  for (let i = 0; i < apiResponse.length; i++) {
    let user = apiResponse[i]
    const tempUser: User = {name: "", age: 0}
    // tempUser.age = Number(user.age.toFixed(0))
    tempUser.age = Number(agesInt[i])
    tempUser.name = user.name
    tempLst.push(tempUser)
  }  

  return tempLst
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => Number(u.age).toFixed(0));
}