'use client'

import { STYLES } from '@/global/CONSTS';
import { Button, PasswordInput, Stack, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as React from 'react';

type TProps = {
    onSuccess?: (refetchFunction:()=>void) => void
}

export const NewPasswordInput = ({ onSuccess = () => {} }: TProps) => {
  const { colorScheme }= useMantineColorScheme();

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
    color: colorScheme === 'dark' ? 'var(--mantine-color-custom-grey-3)' : 'var(--mantine-color-custom-grey-5)',
  };

    const form = useForm({
        initialValues: {
          password: '',
          passwordConfirm: '',
        },
        validate: (values) => ({
            password:
            !!values.password && values.password.length < 8
              ? 'Пароль должен содержать хотя бы 8 знаков'
              : null,
              passwordConfirm:
              !!values.passwordConfirm && values.passwordConfirm.length < 8 && values.passwordConfirm !== values.password
                ? 'Подтверждающий пароль должен содержать хотя бы 8 знаков и совпадать с паролем'
                : null,  
        }),
      });

  /*    const [changePassword, { loading: loading_change, error: error_change, data: data_change }] = 

      useMutation(CHANGE_PASSWORD_BY_PHONE, {
          variables: {
              newPassword: form.values.password, //{...values, phoneNumber:values.phoneNumber.replace(/\D/g, ''), birthDate: '2012-12-31'} ,
          },
        }); */

      const onSubmit = (values: any) => {
        //!!changePassword();
      };


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



    return(
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <Stack maw={320} >
            
          {/*  <PasswordInput label="Старый пароль" placeholder="Ваш пароль" required mt={'-.25rem'} /> */}
            <PasswordInput
           // form={form}
           {...form.getInputProps('password')}
           labelProps={{ style: customLabelStyle }}
          //  formField="password"
              label="Новый пароль (минимум 8 символов)"
              placeholder="Новый пароль"
              required
             // mt="md"
            />

            <PasswordInput 
            {...form.getInputProps('passwordConfirm')}
            //form={form}
            //formField="passwordConfirm"
            placeholder="Повторите новый пароль" required />
            <Button  maw={150} type='submit' 
            //disabled={loading_change}
            >
              Сохранить
            </Button>
            
          </Stack>
          </form>
    )
}