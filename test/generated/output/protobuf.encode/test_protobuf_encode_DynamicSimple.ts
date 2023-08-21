import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_protobuf_encode_DynamicSimple = _test_protobuf_encode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    encode: (input) =>
        ((input: DynamicSimple): Uint8Array => {
            const $join = (typia.protobuf.encode as any).join;
            const $Sizer = (typia.protobuf.encode as any).Sizer;
            const $Writer = (typia.protobuf.encode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    for (const [key, value] of Object.entries(input.value)) {
                        writer.uint32(10);
                        writer.fork();
                        writer.uint32(10);
                        writer.string(key);
                        writer.uint32(17);
                        writer.double(value);
                        writer.ldelim();
                    }
                };
                const $io1 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return "number" === typeof value;
                        return true;
                    });
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage DynamicSimple {\n    map<string, double> value = 1;\n}',
});