"use client";

import React, { useEffect, useState } from "react";
import styles from "./PostForm.module.css";
import { Section } from "../Section/Section";
import { Input } from "../Input/Input";
import { getPosition, sign_in } from "@/utils/user";
import { Button } from "../Button/Button";
import { Controller, useForm } from "react-hook-form";
import registerData from "@/data/register.json";
import { Success } from "../Success/Success";

export const PostForm = ({ newUser }) => {
  const [success, setSuccess] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    (async () => {
      const get = await getPosition();
      setPositions(get);
    })();
  }, []);

  const { name, email, phone } = registerData;

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      photo: null,
    },
  });

  const formData = new FormData();

  const onSubmit = async (data) => {
    const { name, email, phone, position_id, photo } = data;
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position_id);
    formData.append("photo", photo);

    await sign_in(formData).then((res) => {
      if (res.status === 201) {
        setSuccess(true);
        newUser();
        reset();
      }
    });
  };

  const close = () => {
    setSuccess(false);
  };

  return (
    <>
      <Section id="post" title={"Working with POST request"}>
        <form
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.inputs_conteiner}>
            <Input
              type="name"
              name="name"
              placeholder="Name"
              setValue={setValue}
              register={register}
              errors={errors}
              errorMessages={name.errorMessages}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              setValue={setValue}
              register={register}
              errors={errors}
              errorMessages={email.errorMessages}
            />
            <Input
              type="phone"
              name="phone"
              placeholder="Phone"
              setValue={setValue}
              register={register}
              errors={errors}
              errorMessages={phone.errorMessages}
            />
          </div>
          <p className={styles.position}>Select your position</p>
          <ul className={styles.radio_list}>
            {positions.map((position) => (
              <li key={position.id}>
                <Input
                  name="position_id"
                  className={styles.radio}
                  type="radio"
                  value={position.id}
                  radio_name={position.name}
                  setValue={setValue}
                  register={register}
                  errors={errors}
                />
              </li>
            ))}
          </ul>
          <Controller
            name="photo"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Input
                  className={styles.file_input}
                  noFile={value}
                  id="file"
                  change={(e) => onChange(e.target.files[0])}
                  type="file"
                  name="photo"
                  setValue={setValue}
                  register={register}
                  errors={errors}
                />
              );
            }}
          />
          <Button
            className={styles.submit}
            disabled={!isValid}
            type="submit"
            name="Sign Up"
          />
        </form>
      </Section>
      {success && <Success close={close} />}
    </>
  );
};
