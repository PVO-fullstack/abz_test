"use client";

import React, { useEffect, useState } from "react";
import styles from "./OurUsers.module.css";
import { getUsers } from "@/utils/user";
import { UserCard } from "../UserCard/UserCard";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";

export const OurUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const get = await getUsers();
      setUsers(get);
    })();
  }, []);

  // const users = use(getUsers());

  return (
    <Section id="users" title={"Working with GET request"}>
      <ul className={styles.list}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
      <Button className={styles.btn} type={"button"} name={"Show more"} />
    </Section>
  );
};
