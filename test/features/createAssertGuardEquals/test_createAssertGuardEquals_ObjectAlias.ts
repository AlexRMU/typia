import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuardEquals_ObjectAlias = _test_assertGuardEquals(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.createAssertGuardEquals<ObjectAlias>());