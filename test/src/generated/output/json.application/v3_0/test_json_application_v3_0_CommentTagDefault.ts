import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../../structures/CommentTagDefault";

export const test_json_application_v3_0_CommentTagDefault =
  _test_json_application({
    version: "3.0",
    name: "CommentTagDefault",
  })({
    version: "3.0",
    components: {
      schemas: {
        CommentTagDefault: {
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
              title: "Default tag on `boolean` typed value",
              description: "Default tag on `boolean` typed value.",
            },
            number: {
              type: "number",
              title: "Default tag on `number` typed value",
              description: "Default tag on `number` typed value.",
            },
            string: {
              type: "string",
              title: "Default tag on `string` typed value",
              description: "Default tag on `string` typed value.",
            },
            text: {
              type: "string",
              title: "Default tag on `string` typed value with long characters",
              description:
                "Default tag on `string` typed value with long characters.",
            },
            boolean_and_number_and_string: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
            union_but_boolean: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
            union_but_number: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
            union_but_string: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
            vulnerable_range: {
              type: "number",
              minimum: 3,
              maximum: 5,
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
            boolean_and_number_and_template: {
              oneOf: [
                {
                  type: "string",
                  pattern:
                    "^([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(prefix_(.*)))",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              title: "Default value on union typed property",
              description: "Default value on union typed property.",
            },
          },
          nullable: false,
          required: [
            "boolean",
            "number",
            "string",
            "text",
            "boolean_and_number_and_string",
            "union_but_boolean",
            "union_but_number",
            "union_but_string",
            "vulnerable_range",
            "boolean_and_number_and_template",
          ],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagDefault",
      },
    ],
  });