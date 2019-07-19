describe("Mergesort", function() {
    var mergesort;

    beforeEach(function() {
        mergesort = new Mergesort();
    });

    it("should correctly sort an empty array", function() {
        let input = [];
        let output = mergesort.sort(input);
        expect(output).toEqual(input);
    });

    it("should correctly sort an array of length 1", function() {
        let input = [1];
        let output = mergesort.sort(input);
        expect(output).toEqual(input);
    });

    it("should correctly sort an array longer than 1", function() {
        let input = mergesort.randomArray(4);
        let output = mergesort.sort(input);
        let sortedInput = input.sort();
        expect(output.toString() === sortedInput.toString()).toBe(true); //tested against the built-in JS sort() function
    }); 
});