export class HateoasField {
  label: string;
  name: string;
  type: string;
  required: boolean;

  constructor(
    label: string,
    name: string,
    type: string,
    required: boolean
  ) {
    this.label = label;
    this.name = name;
    this.type = type;
    this.required = required;
  }
}

