import React, { useState, useRef, useEffect } from "react";
import { TextInput, Button, Group, ActionIcon, Loader } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { IconPencil } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
//import { useGetMeQuery } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { useGetMeQuery } from "@/rtk/queries/vacancy";
import { useCheckHHConnectQuery, useHhConnectMutation } from "@/rtk/queries/authApi";
import ProfileForm from "./ProfileForm";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import { BasicError } from "@/components/Errors/BasicError";

export const ConnectionToAggregators = () => {
    const {
        data: data_hhCheck,
        error: error_hhCheck,
        isLoading: isLoading_hhCheck,
        refetch: refetchHHConnect, // <- Grab the refetch method here
      } = useCheckHHConnectQuery();
      
      const [connectHH, { isLoading: isLoading_hhConnect, error: error_hhConnect, data: data_hhConnect }] = useHhConnectMutation();
      
      useEffect(() => {
        if (data_hhConnect) {
          // If the mutation succeeds, refetch the HH Connect data
          refetchHHConnect();
        }
      }, [data_hhConnect, refetchHHConnect]);
    
     if  (isLoading_hhCheck) return <Preloader />  
     if (error_hhCheck) return <BasicError error={error_hhCheck} />   

  return (
    <>
      <div className="flex items-center justify-start space-x-2">
        <h3 className="font-sm my-1 mr-2 inline uppercase tracking-widest">
          HeadHunter
        </h3>
        {data_hhCheck?.is_connected ? (
          <>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <div className="text-xs text-green-500">Подключен</div>
          </>
        ) : (
          <>
            <div className="h-4 w-4 rounded-full bg-red-500"></div>
            <div className="text-xs text-red-500 cursor-pointer underline" onClick={() => connectHH()}>Подключить</div>
          </>
        )}
      </div>
      <ProfileForm editEnabled={false} />
      <JSONViewer data={data_hhCheck} />
    </>
  );
};

/*import React, { useState, useRef } from 'react';
import { TextInput, Button, Group, ActionIcon, Loader } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { IconPencil, IconCheck } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useGetMeQuery } from '@/rtk/features/vacancy/vacancySliceHHReal';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';

interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
}

const ProfileForm: React.FC = () => {
  const { data: data_hhme, error: error_hhme, isLoading: isLoading_hhme } = useGetMeQuery();
  const [isEditing, setIsEditing] = useState<Record<keyof UserProfile, boolean>>({
    first_name: false,
    last_name: false,
    email: false,
  });
  const [hasChanges, setHasChanges] = useState(false);

  const form = useForm<UserProfile>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
  });

  const clickOutsideRefs = {
    first_name: useRef<HTMLInputElement>(null),
    last_name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
  };

  useClickOutside(() => handleBlur('first_name'));
  useClickOutside(() => handleBlur('last_name'));
  useClickOutside(() => handleBlur('email'));

  const handleBlur = (field: keyof UserProfile) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleEdit = (field: keyof UserProfile) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof UserProfile, value: string) => {
    form.setFieldValue(field, value);
    setHasChanges(true);
  };

  const handleSubmit = (values: UserProfile) => {
    const updatedValues: Partial<UserProfile> = {};
    Object.keys(values).forEach((key) => {
      const fieldKey = key as keyof UserProfile;
      if (values[fieldKey] !== data_hhme?.[fieldKey]) {
        updatedValues[fieldKey] = values[fieldKey];
      }
    });
    console.log('Submitting updated values:', updatedValues);
    // Submit updated values logic goes here
    setHasChanges(false);
  };

  React.useEffect(() => {
    form.setValues({
      first_name: data_hhme?.first_name || '',
      last_name: data_hhme?.last_name || '',
      email: data_hhme?.email || '',
    });
  }, [data_hhme]);

  if (isLoading_hhme) return <Loader />;
  if (error_hhme) return <div>Error loading profile data</div>;

  return (
    <>
    <form onSubmit={form.onSubmit(handleSubmit)}>
      {(['first_name', 'last_name', 'email'] as Array<keyof UserProfile>).map((field) => (
        <div key={field}>
          {!isEditing[field] ? (
            <Group 
            //position="apart" 
            align="center">
              <div>{form.values?.[field] ||data_hhme?.[field]}</div>
              <ActionIcon onClick={() => handleEdit(field)}>
                <IconPencil size={18} />
              </ActionIcon>
            </Group>
          ) : (
            <TextInput
              ref={clickOutsideRefs[field]}
              value={form.values[field]}
              onChange={(event) => handleChange(field, event.currentTarget.value)}
              onBlur={() => handleBlur(field)}
              autoFocus
            />
          )}
        </div>
      ))}

      {hasChanges && (
        <Button type="submit"
        // leftIcon={<IconCheck size={16} />} 
         mt="md">
          Save
        </Button>
      )}
    </form>
    <JSONViewer data={form.values} />
    </>
  );
};

export default ProfileForm;
*/
