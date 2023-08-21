import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_validateEncode_ObjectJsonTag =
    _test_protobuf_validateEncode("ObjectJsonTag")<ObjectJsonTag>(
        ObjectJsonTag,
    )({
        validateEncode: (
            input: ObjectJsonTag,
        ): typia.IValidation<Uint8Array> => {
            const validate = (input: any): typia.IValidation<ObjectJsonTag> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectJsonTag => {
                    const $is_custom = (
                        typia.protobuf.createValidateEncode as any
                    ).is_custom;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).vulnerable &&
                        $is_custom(
                            "deprecated",
                            "string",
                            "",
                            (input as any).vulnerable,
                        ) &&
                        "string" === typeof (input as any).description &&
                        "string" === typeof (input as any).title &&
                        $is_custom(
                            "title",
                            "string",
                            "something",
                            (input as any).title,
                        ) &&
                        "string" === typeof (input as any).complicate_title
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectJsonTag => {
                        const $is_custom = (
                            typia.protobuf.createValidateEncode as any
                        ).is_custom;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("string" === typeof input.vulnerable &&
                                    ($is_custom(
                                        "deprecated",
                                        "string",
                                        "",
                                        input.vulnerable,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable",
                                            expected: "string (@deprecated)",
                                            value: input.vulnerable,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable",
                                        expected: "string",
                                        value: input.vulnerable,
                                    }),
                                "string" === typeof input.description ||
                                    $report(_exceptionable, {
                                        path: _path + ".description",
                                        expected: "string",
                                        value: input.description,
                                    }),
                                ("string" === typeof input.title &&
                                    ($is_custom(
                                        "title",
                                        "string",
                                        "something",
                                        input.title,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".title",
                                            expected:
                                                "string (@title something)",
                                            value: input.title,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "string",
                                        value: input.title,
                                    }),
                                "string" === typeof input.complicate_title ||
                                    $report(_exceptionable, {
                                        path: _path + ".complicate_title",
                                        expected: "string",
                                        value: input.complicate_title,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectJsonTag",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectJsonTag",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const encode = (input: ObjectJsonTag): Uint8Array => {
                const $is_custom = (typia.protobuf.createValidateEncode as any)
                    .is_custom;
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "vulnerable";
                        writer.uint32(10);
                        writer.string(input.vulnerable);
                        // property "description";
                        writer.uint32(18);
                        writer.string(input.description);
                        // property "title";
                        writer.uint32(26);
                        writer.string(input.title);
                        // property "complicate_title";
                        writer.uint32(34);
                        writer.string(input.complicate_title);
                    };
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    required string vulnerable = 1;\n    required string description = 2;\n    required string title = 3;\n    required string complicate_title = 4;\n}',
    });