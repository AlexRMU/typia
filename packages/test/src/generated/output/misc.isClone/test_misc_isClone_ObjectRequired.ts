import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_misc_isClone_ObjectRequired = _test_misc_isClone(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  ((input: any): typia.Resolved<ObjectRequired> | null => {
    const is = (input: any): input is ObjectRequired => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            false === Array.isArray(input.object) &&
            $io1(input.object)));
      const $io1 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            false === Array.isArray(input.object) &&
            $io1(input.object)));
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: ObjectRequired): typia.Resolved<ObjectRequired> => {
      const $io1 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number || "number" === typeof input.number) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every((elem: any) => "number" === typeof elem))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            false === Array.isArray(input.object) &&
            $io1(input.object)));
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        boolean: input.boolean as any,
        number: input.number as any,
        string: input.string as any,
        array: Array.isArray(input.array)
          ? $cp0(input.array)
          : (input.array as any),
        object:
          "object" === typeof input.object && null !== input.object
            ? $co1(input.object)
            : (input.object as any),
      });
      const $co1 = (input: any): any => ({
        boolean: input.boolean as any,
        number: input.number as any,
        string: input.string as any,
        array: Array.isArray(input.array)
          ? $cp0(input.array)
          : (input.array as any),
        object:
          "object" === typeof input.object && null !== input.object
            ? $co1(input.object)
            : (input.object as any),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);