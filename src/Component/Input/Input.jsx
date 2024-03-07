"use client";

import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({
  type,
  placeholder,
  className = "",
  value,
  name,
  change,
  radio_name,
  setValue,
  errors,
  register,
  errorMessages,
}) => {
  const [noFile, setNoFile] = useState(null);

  const nameRegisterValidation = {
    required: errorMessages?.required || "Required",
    minLength: {
      value: 2,
      message: errorMessages?.minLength || "MinLength 2",
    },
    maxLength: {
      value: 60,
      message: errorMessages?.maxLength || "MaxLength 60",
    },
  };

  const telRegisterValidation = {
    required: errorMessages?.required || "Required'",
    pattern: {
      value: /^[\+]{0,1}380([0-9]{9})$/,
      message: errorMessages?.minLength || "Can be 11 number",
    },
  };

  const emailRegisterValidation = {
    required: errorMessages?.required || "Required",
    pattern: {
      value:
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      message: errorMessages?.pattern || "Invalid email",
    },
    maxLength: {
      value: 100,
      message: errorMessages?.maxLength || "MaxLength 100",
    },
  };

  const positionRegisterValidation = {
    require: true || "Required",
  };

  const fileRegisterValidation = {
    require: errorMessages?.required || "Required",
    // validate: {
    //   fileType: (file) =>
    //     file?.type.split("/")[1].toLowerCase() === "jpeg" ||
    //     file?.type.split("/")[1].toLowerCase() === "jpg" ||
    //     "The file type should be JPG/JPEG",

    //   fileSize: (file) =>
    //     file?.size / (1024 * 1024) < 5 ||
    //     "The file size should be less than 5MB",
    // },
  };

  const getHandleChange = () => {
    const fn = (event) => {
      if (name === "photo" && event.target.files) {
        const file = event.target.files[0];
        setNoFile(file.name);
        // setValue(name, file, {
        //   shouldValidate: true,
        // });
        return;
      }
      setValue(name, event.target.value, {
        shouldValidate: true,
      });
    };
    return fn;
  };
  const onChangeProps = {
    onChange: getHandleChange(),
  };

  return (
    <label
      className={classNames(
        (type === "radio" && styles.label) ||
          (type === "file" && styles.file_label) ||
          (type === "phone" && styles.phone_label)
      )}
    >
      {type === "file" && <span className={styles.btn}>Upload</span>}
      <input
        className={classNames(
          (type === "radio" && styles.radio) ||
            (type === "file" && styles.file) ||
            styles.input,
          errors[name] && styles.error,
          className
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={change}
        {...register(
          name,
          (type === "phone" && { ...telRegisterValidation }) ||
            (type === "email" && { ...emailRegisterValidation }) ||
            (type === "name" && { ...nameRegisterValidation }) ||
            (type === "file" && { ...fileRegisterValidation }) ||
            (type === "position_id" && { ...positionRegisterValidation })
        )}
        {...onChangeProps}
        autoComplete="off"
      />
      {type === "file" && noFile === null ? (
        <span className={styles.file_name}>Upload your photo</span>
      ) : (
        type === "file" && <span className={styles.file_name}>{noFile}</span>
      )}
      {type === "phone" && (
        <span className={styles.phone_example}>+38 (XXX) XXX-XX-XX</span>
      )}
      <span
        className={
          errors[name]?.type === "required" ? styles.text : styles.error_text
        }
      >
        {errors[name]?.message}
      </span>
      {radio_name}
    </label>
  );
};
