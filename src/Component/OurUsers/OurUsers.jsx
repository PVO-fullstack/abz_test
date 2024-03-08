"use client";

import React, { useEffect, useState } from "react";
import styles from "./OurUsers.module.css";
import { getUsers } from "@/utils/user";
import { UserCard } from "../UserCard/UserCard";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";

export const OurUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(6);

  useEffect(() => {
    (async () => {
      const get = await getUsers(page, count);
      setUsers([...users, ...get]);
      console.log("page", page, get);
    })();
  }, [page]);

  // const users = use(getUsers());

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <Section id="users" title="Working with GET request">
      <ul className={styles.list}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
      <Button
        onClick={showMore}
        className={styles.btn}
        type="button"
        name="Show more"
      />
    </Section>
  );
};
