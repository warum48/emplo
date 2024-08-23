import React, { useState, useRef } from 'react';
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
