const toShort = "Поле заполнено не верно, склишком мало букв";
const minLength = 2;

export const validatorStep1 = (values: any) => {
    return {
        // username:
        //   values.username.trim().length < 6
        //     ? 'Username must include at least 6 characters'
        //     : null,
        // password:
        //   values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        org_unit: values.org_unit.length < minLength ? toShort : null,
        name: values.name.length < minLength ? toShort : null,
        speciality: values.org_unit.length < minLength ? toShort : null,
        // org_unit: "Подразделение", //Подразделение
        org_project: values.org_project.length < minLength ? toShort : null,
        org: values.org.length < minLength ? toShort : null,
        job_description:
          values.job_description.length < minLength ? toShort : null,
        job_conditions:
          values.job_conditions.length < minLength ? toShort : null,
        job_requirements:
          values.job_requirements.length < minLength ? toShort : null,
      };
    }
