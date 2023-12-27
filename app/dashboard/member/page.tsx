import React from "react";
import MemberDataTable from "./data-table";
import { columns } from "./columns";
import { member } from "@/member";

type Props = {};

const Member = (props: Props) => {
  return  <MemberDataTable columns={columns} data={member} />
  // return (

  //   <div className="">
     
  //   </div>

  // );
};

export default Member;
