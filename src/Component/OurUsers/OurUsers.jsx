"use client";

import React, { useEffect, useState } from "react";
import styles from "./OurUsers.module.css";
import { getUsers } from "@/utils/user";
import { UserCard } from "../UserCard/UserCard";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";

export const OurUsers = ({ newUser, change }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(6);
  const [totalPages, setTotalPages] = useState();
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (newUser) {
      setPage(1);
      (async () => {
        const get = await getUsers(1, count);
        const sortedUsers = get.users.sort(
          (a, b) => b.registration_timestamp - a.registration_timestamp
        );
        setUsers(sortedUsers);
        setTotalPages(get.total_pages);
      })();
      setFirst(true);
      change();
      return;
    }
    if (!first) {
      (async () => {
        const get = await getUsers(page, count);
        const sortedUsers = get.users.sort(
          (a, b) => b.registration_timestamp - a.registration_timestamp
        );
        setUsers([...users, ...sortedUsers]);
        setTotalPages(get.total_pages);
      })();
    }
    setFirst(false);
  }, [page, newUser]);

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
      {page !== totalPages && (
        <Button
          onClick={showMore}
          className={styles.btn}
          type="button"
          name="Show more"
        />
      )}
    </Section>
  );
};
