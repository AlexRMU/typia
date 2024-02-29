import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createDecode_ConstantAtomicAbsorbed =
  _test_protobuf_decode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    decode: (input) => typia.protobuf.decode<ConstantAtomicAbsorbed>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
