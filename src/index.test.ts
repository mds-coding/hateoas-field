import { HateoasField } from "./index.js";

test("`HateoasField` can be created", () => {
  const field = new HateoasField("This is a label", "fieldNameForRequest", "object", false);
  expect(field).toBeDefined();
  expect(field.label).toBe("This is a label");
  expect(field.name).toBe("fieldNameForRequest");
  expect(field.type).toBe("object");
  expect(field.required).toBe(false);
});
