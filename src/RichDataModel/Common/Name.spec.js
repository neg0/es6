import { Name } from "./Name";
const MOCK_VALID_NAME = 'Hadi Ta';
const MOCK_INVALID_NAME_LIST = [
    "j0sef",
    "8ball",
    "Curt!s",
    "Curti$",
];

describe("Testing Name valueObject", () => {
    /** @type Name */
    let sut = undefined;

    beforeAll(() => {
        sut = new Name(MOCK_VALID_NAME);
    });

    afterAll(() => {
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(Name);
    });

    it("should return name that passed inside the constructor", () => {
        expect(sut.value).toEqual(MOCK_VALID_NAME);
    });

    describe("checking throwing error with invalid name", () => {
        for (let name in MOCK_INVALID_NAME_LIST) {
            it("should throw an error due invalid name " + MOCK_INVALID_NAME_LIST[name], () => {
                try {
                    sut = new Name(MOCK_INVALID_NAME_LIST[name]);
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        }
    });
});
