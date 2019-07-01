import "../src/RandomArray";
import { randomDataSet } from "../src/RandomArray";

describe("Mergesort", function() {

    beforeEach(function() {
        mergesort = new Mergesort();
    })

    it("should correctly sort an empty array", function() {
        var input = [];
        var output = mergesort.sort(input);
        expect(output).toEqual(input);
    })

    it("should correctly sort an array of size 1", function() {
        var input = [1];
        var output = mergesort.sort(input);
        expect(output).toEqual(input);
    })

    it("should correctly sort an array of a greater size than 1"), function() {
        var input = randomDataSet(6, 0, 10);
        var output = mergesort.sort(input);
        expect(output).toEqual(input);
    }

})