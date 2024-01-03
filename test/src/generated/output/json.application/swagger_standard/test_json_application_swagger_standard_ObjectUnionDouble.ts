import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../../structures/ObjectUnionDouble";

export const test_json_application_swagger_standard_ObjectUnionDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionDouble",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionDouble",
      },
    ],
    components: {
      schemas: {
        ObjectUnionDouble: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUnionDouble.Union",
          },
        },
        "ObjectUnionDouble.Union": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IA",
            },
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IB",
            },
          ],
        },
        "ObjectUnionDouble.IA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  type: "number",
                },
              },
              nullable: false,
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAA",
                },
              ],
            },
          },
          nullable: false,
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "number",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "boolean",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  type: "string",
                },
              },
              nullable: false,
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBA",
                },
              ],
            },
          },
          nullable: false,
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBB": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "array",
                  items: {
                    type: "number",
                  },
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBA": {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "string",
                },
              },
              nullable: false,
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
