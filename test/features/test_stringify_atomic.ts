import TSON from "../../src";

export function test_stringify_atomic(): void {
    test((input) => TSON.stringify<boolean>(input), true);
    test((input) => TSON.stringify<number>(input), 3);
    test((input) => TSON.stringify<string>(input), "hello");
    test((input) => TSON.stringify<null>(input), null);
}

function test<T>(stringify: (input: T) => string, input: T) {
    const json: string = stringify(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the atomic type.",
        );
}
