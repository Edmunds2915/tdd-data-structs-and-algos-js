describe("Mergesort", function() {

    beforeEach(function() {
        mergesort = new Mergesort();
    })

    it("should correctly sort an empty array", function() {
        var input = [];
        var output = mergesort.sort(input);
        expect(output).toEqual(input);
    })
})