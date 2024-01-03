import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_swagger_standard_ArrayRecursiveUnionImplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayRecursiveUnionImplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionImplicit: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionImplicit.IBucket": {
          oneOf: [
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
            },
          ],
        },
        "ArrayRecursiveUnionImplicit.IDirectory": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          nullable: false,
          required: ["id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
          type: "object",
          properties: {
            access: {
              type: "string",
              enum: ["read", "write"],
            },
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          nullable: false,
          required: ["access", "id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            width: {
              type: "number",
            },
            height: {
              type: "number",
            },
            url: {
              type: "string",
            },
            size: {
              type: "number",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "width", "height", "url", "size"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            size: {
              type: "number",
            },
            content: {
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "size", "content"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            size: {
              type: "number",
            },
            count: {
              type: "number",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "size", "count"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "target"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
