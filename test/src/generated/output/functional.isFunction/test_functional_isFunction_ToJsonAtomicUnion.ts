import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_functional_isFunction_ToJsonAtomicUnion =
  _test_functional_isFunction("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      (input: ToJsonAtomicUnion): ToJsonAtomicUnion | null => {
        if (
          false ===
          ((input: any): input is ToJsonAtomicUnion => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ToJsonAtomicUnion => {
          const $io0 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        })(result)
          ? result
          : null;
      },
  );