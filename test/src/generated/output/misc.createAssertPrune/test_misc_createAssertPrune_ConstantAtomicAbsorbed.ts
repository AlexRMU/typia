import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_misc_createAssertPrune_ConstantAtomicAbsorbed =
  _test_misc_assertPrune("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input: any): ConstantAtomicAbsorbed => {
    const assert = (input: any): ConstantAtomicAbsorbed => {
      const __is = (input: any): input is ConstantAtomicAbsorbed => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).id &&
          "number" === typeof (input as any).age &&
          Number.isFinite((input as any).age)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicAbsorbed => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Default<"something">)',
                value: input.id,
              })) &&
            (("number" === typeof input.age && Number.isFinite(input.age)) ||
              $guard(_exceptionable, {
                path: _path + ".age",
                expected: "(number & Default<20>)",
                value: input.age,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantAtomicAbsorbed",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantAtomicAbsorbed",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ConstantAtomicAbsorbed): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("id" === key || "age" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  });
