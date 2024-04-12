import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_functional_equalsParametersAsync_ObjectInternal =
  _test_functional_equalsParametersAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      async (input: ObjectInternal): Promise<ObjectInternal | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectInternal => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["id", "name"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );