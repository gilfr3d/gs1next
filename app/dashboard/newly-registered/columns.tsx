type Member = {
    id: string
    gcp: string
    category: string
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
   
  export const members: Member[] = [
    {
      id: "1",
      gcp: "Tailor",
      status: "pending",
      category: "Member",
      email: "m@example.com",
    },
    {
        id: "2",
        gcp: "Manufacturing",
        status: "pending",
        category: "Member",
        email: "m@example.com",
      },
    // ...
  ]