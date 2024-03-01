import React from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormBtn() {
  return (
    <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-purple-600">
      <MdOutlinePublish className="h-4 w-4" />
      Publish
    </Button>
  );
}

export default PublishFormBtn;
