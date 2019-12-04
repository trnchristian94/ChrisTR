import React, { useState, useEffect } from "react";

import firebase from "src/Firebase/firebase";

export default function User() {
  const nameRef = firebase
    .database()
    .ref()
    .child("object")
    .child("names");
  const [names, setNames] = useState("");
  let createTable = (): any => {
    let table: any = [];
    //Step 2:
    Object.keys(names).forEach((key: any) => {
      let obj = names[key];
      table.push(<p key={key}>{obj}</p>);
      // do something with obj
    });
    return table;
  };

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    nameRef.on("value", (snapshot: any) => {
      setNames(snapshot.val());
    });
  }, []);

  return <div>{createTable()}</div>;
}
