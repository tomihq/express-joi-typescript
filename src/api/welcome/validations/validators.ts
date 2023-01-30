import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'

export interface CreateUserSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    name: string;
  }
}


