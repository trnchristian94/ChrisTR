import React, { useState, useEffect } from "react";

import firebase from "src/Firebase/firebase";

export default function User() {
  const nameRef = firebase
    .database()
    .ref()
    .child("object")
    .child("name");
  const [name, setName] = useState("Juan");

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    nameRef.on("value", (snapshot: any) => {
      setName(snapshot.val());
    });
  }, []);

  return <h2>{name}</h2>;
}
