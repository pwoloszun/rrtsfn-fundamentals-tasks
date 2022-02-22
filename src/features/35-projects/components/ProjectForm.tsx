import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { keys, pick } from 'lodash';

export interface ProjectParams {
  name: string;
  description: string;
  version: string;
  url: string;
}

export interface IProjectFormProps<T extends ProjectParams> {
  project?: T;
  onSave: (params: ProjectParams) => void;
}

const EMPTY_PROJECT: ProjectParams = {
  name: '',
  description: '',
  version: '',
  url: '',
};

const FORM_FIELDS = keys(EMPTY_PROJECT);

const FIELD_INFOS = [
  { label: 'Project Name', name: 'name', placeholder: 'Enter Project Name' },
  { label: 'Description', name: 'description', placeholder: 'Enter Description' },
  { label: 'Version', name: 'version', placeholder: 'Enter Version' },
  { label: 'URL', name: 'url', placeholder: 'Enter Project URL' },
];

export default function ProjectForm<T extends ProjectParams>(
  props: IProjectFormProps<T>
): React.ReactElement {
  const { project = EMPTY_PROJECT, onSave } = props;

  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    const initValues = pick(project, FORM_FIELDS);
    reset(initValues);
  }, [project, reset]);

  const submitHandler = handleSubmit((formValues) => {
    onSave(formValues as ProjectParams);
  });

  return (
    <Form onSubmit={submitHandler}>
      {
        FIELD_INFOS.map((ctrlInfo) => {
          const { label, name, placeholder } = ctrlInfo;
          return (
            <Form.Group key={name} controlId={name} className="mb-3" >
              <Form.Label>{label}</Form.Label>
              <Form.Control
                {...register(name as any)}
                type="text"
                placeholder={placeholder}
              />
            </Form.Group>
          );
        })
      }

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
