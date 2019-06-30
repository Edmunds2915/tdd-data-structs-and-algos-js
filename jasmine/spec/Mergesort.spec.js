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

})