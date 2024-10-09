"use client";

import { useAuthTokenHandler } from "@/components/_auth/useAuthTokenHandler ";
import { STYLES } from "@/global/CONSTS";
import { useMutationNotifications } from "@/hooks/useNotifications";
import { useChangePasswordMutation } from "@/rtk/queries/authApi";
import {
  Button,
  PasswordInput,
  Stack,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import * as React from "react";

type TProps = {
  onSuccess?: (refetchFunction: () => void) => void;
};

export const NewPasswordInput = ({ onSuccess = () => {} }: TProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [
    changePassword,
    { isLoading: loading_change, error: error_change, data: data_change },
  ] = useChangePasswordMutation();
  const { handleToken } = useAuthTokenHandler();

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
    color:
      colorScheme === "dark"
        ? "var(--mantine-color-custom-grey-3)"
        : "var(--mantine-color-custom-grey-5)",
  };

  const form = useForm({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validate: (values) => ({
      new_password:
       values.new_password.length < 8
          ? "Пароль должен содержать хотя бы 8 знаков"
          : null,
      confirm_password:
        
        values.confirm_password.length < 8 &&
        values.confirm_password !== values.new_password
          ? "Подтверждающий пароль должен содержать хотя бы 8 знаков и совпадать с паролем"
          : null,
    }),
  });

  const handleChange = async () => {
    try {
      const result = await changePassword(form.values).unwrap();
      console.log("result", result);
      // handleToken(result.jwt_token); // Pass token to hook for handling
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  const onSubmit = (values: any) => {
    console.log('values', values);
    //!!changePassword();
    handleChange();
  };

  useMutationNotifications({
    text: "Готово!",
    data: data_change,
    data_details: (data_change as any)?.msg
      ? (data_change as any)?.msg
      : "Пароль успешно обновлен",
    error: error_change,
  });

  /*    useMutationNotifications({
        text: 'Подтвердите код',
        data: data_change,
        data_code: data_change?.changePasswordByPhone?.statusCode,
        data_details: data_change?.changePasswordByPhone?.detailsRu ||  data_change?.changePasswordByPhone?.details,
        error: error_change,
        traceId: data_change?.changePasswordByPhone?.traceId,
        onSuccess: () => {
          passwordVar(form.values.password);
          onSuccess(changePassword)
        },
      });
      */

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Stack maw={320}>
        {/*  <PasswordInput label="Старый пароль" placeholder="Ваш пароль" required mt={'-.25rem'} /> */}
        <PasswordInput
          // form={form}
         
          labelProps={{ style: customLabelStyle }}
          //  formField="password"
          label="Новый пароль (минимум 8 символов)"
          placeholder="Новый пароль"
          required
          {...form.getInputProps("new_password")}
          // mt="md"
        />

        <PasswordInput
         
          //form={form}
          //formField="passwordConfirm"
          placeholder="Повторите новый пароль"
          required
          {...form.getInputProps("confirm_password")}
        />

        <Button
          maw={150}
          type="submit"
          //disabled={loading_change}
        >
          Сохранить
        </Button>
      </Stack>
    </form>
  );
};
