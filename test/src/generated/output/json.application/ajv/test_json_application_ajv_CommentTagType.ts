import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagType } from "../../../../structures/CommentTagType";

export const test_json_application_ajv_CommentTagType = _test_json_application(
  "ajv",
)("CommentTagType")({
  schemas: [
    {
      $ref: "#/components/schemas/CommentTagType",
    },
  ],
  components: {
    schemas: {
      CommentTagType: {
        $id: "#/components/schemas/CommentTagType",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/CommentTagType.Type",
            },
          },
        },
        required: ["value"],
        "x-typia-jsDocTags": [],
      },
      "CommentTagType.Type": {
        $id: "#/components/schemas/CommentTagType.Type",
        type: "object",
        properties: {
          int: {
            description: "Integer value.",
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "{int}",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int32">',
                kind: "type",
                value: "int32",
                validate:
                  "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                exclusive: true,
              },
            ],
          },
          uint: {
            description: "Unsigned integer value.",
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "uint",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint32">',
                kind: "type",
                value: "uint32",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                exclusive: true,
              },
            ],
          },
          int32: {
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "{int32}",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int32">',
                kind: "type",
                value: "int32",
                validate:
                  "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                exclusive: true,
              },
            ],
          },
          uint32: {
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "uint32",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint32">',
                kind: "type",
                value: "uint32",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                exclusive: true,
              },
            ],
          },
          int64: {
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "int64",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int64">',
                kind: "type",
                value: "int64",
                validate:
                  "Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807",
                exclusive: true,
              },
            ],
          },
          uint64: {
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "{uint64}",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint64">',
                kind: "type",
                value: "uint64",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615",
                exclusive: true,
              },
            ],
          },
          float: {
            "x-typia-jsDocTags": [
              {
                name: "type",
                text: [
                  {
                    text: "float",
                    kind: "text",
                  },
                ],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"float">',
                kind: "type",
                value: "float",
                validate: "-1.175494351e38 <= $input && $input <= 3.4028235e38",
                exclusive: true,
              },
            ],
          },
        },
        required: [
          "int",
          "uint",
          "int32",
          "uint32",
          "int64",
          "uint64",
          "float",
        ],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});