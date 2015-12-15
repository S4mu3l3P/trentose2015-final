/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

   it("Return the correct current request", function () {
       SantaModel.init();
       expect(SantaModel.getCurrentRequest()).toBe(requests[0]);
       SantaModel.next();
       expect(SantaModel.getCurrentRequest()).toBe(requests[1]);
       SantaModel.next();
       SantaModel.next();
       SantaModel.next();
       expect(SantaModel.getCurrentRequest()).toBe(null);
    });   
    
    it("Correct packing", function () {
        expect(SantaModel.pack("yes")).toBe(0);
        expect(SantaModel.pack("no")).toBe(1);
        SantaModel.next();
        expect(SantaModel.pack("yes")).toBe(1);
    }); 
 
});
